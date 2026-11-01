import type { Metadata } from "next";
import TermsContent from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use and AI Assistant acceptable use guidelines for Assia Benkedia's portfolio.",
  alternates: {
    canonical: "https://assiabenkedia.dev/terms",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
