import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy and AI Data Processing Transparency Statement for Assia Benkedia's portfolio.",
  alternates: {
    canonical: "https://assiabenkedia.dev/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
