import { redirect } from "next/navigation";

/**
 * Legacy URL: send visitors to the UAE terms by default.
 * Regional terms live at /terms/uae and /terms/ksa.
 */
export default function TermsIndexPage() {
  redirect("/terms/uae");
}
