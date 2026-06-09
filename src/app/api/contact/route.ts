import { NextRequest, NextResponse } from "next/server";
import { getSalesUaeApiConfig } from "@/lib/sales-uae-api";

export async function POST(request: NextRequest) {
  const salesUaeApi = getSalesUaeApiConfig();
  if (!salesUaeApi) {
    console.error(
      "Missing required environment variables: SALES_UAE_API_BASE_URL and SALES_UAE_API_KEY",
    );
    return NextResponse.json(
      {
        success: false,
        message: "Service is not configured. Please try again later.",
      },
      { status: 503 },
    );
  }

  try {
    const { name, email, company, phone, message } = await request.json();

    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const getSectorFromRequest = (req: NextRequest): string | undefined => {
      try {
        const referer = req.headers.get("referer") || "";
        if (referer) {
          const url = new URL(referer);
          const path = url.pathname.toLowerCase();
          if (path.startsWith("/flow")) return "Klaim Flow";
          if (path.startsWith("/estate")) return "Klaim Estate";
          if (path.startsWith("/health")) return "Klaim Health";
        }
      } catch {}
      return undefined;
    };

    const sector = getSectorFromRequest(request);
    const originalMessage = message?.trim() || "";
    const description = sector
      ? `[${sector}]: ${originalMessage}`
      : originalMessage;

    const response = await fetch(
      `${salesUaeApi.baseUrl}/public-api/lead/contact-us`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-KEY": salesUaeApi.apiKey,
        },
        body: JSON.stringify({
          data: [
            {
              contact_name: name.trim(),
              email_from: email.trim(),
              partner_name: company.trim(),
              phone: phone?.trim() || "",
              description: description.replace(/\n/g, "<br/>"),
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error("Klaim API Error:", {
        status: response.status,
        statusText: response.statusText,
        errorText,
      });

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send message. Please try again later.",
        },
        { status: response.status },
      );
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 },
    );
  }
}
