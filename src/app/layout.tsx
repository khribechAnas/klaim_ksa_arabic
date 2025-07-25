import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import {PostHogProvider} from "@/app/providers/posthogProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klaim - Swift Healthcare Claim Payments in UAE & KSA",
  description:
    "Transform your healthcare revenue cycle with Klaim - ensuring providers receive payments within 24 hours, not 45+ days. Explore innovative, award-winning solutions that stabilize cash flow, reduce staffing costs, and expedite business growth.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script id="googleTagManager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WLG995HR');`}
          </Script>
        )}
      </head>
      <body className={poppins.className}>
        {process.env.NODE_ENV === "production" && (
          <>
            <noscript>
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLG995HR" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
            </noscript>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-D0PLRFEHF5"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-D0PLRFEHF5');
              `}
            </Script>
            <Script
              defer
              data-domain="klaim.ai"
              src="https://plausible.klaim.ai/js/script.tagged-events.js"
            ></Script>
            <Script id="hotjar" strategy="afterInteractive">
              {`(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3541445,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `}
            </Script>
            <Script id="linkedin" strategy="afterInteractive">
              {`
              _linkedin_partner_id = "5667689";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              </Script><Script type="text/javascript">
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
              `}
            </Script>
          </>
        )}
        <PostHogProvider>
            {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
