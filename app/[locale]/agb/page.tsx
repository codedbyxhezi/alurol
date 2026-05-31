import type { Metadata } from "next";
import { LegalPage, generateLegalMetadata } from "../legal-page";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateLegalMetadata(params, "terms");
}

export default function AgbPage({ params }: PageProps) {
  return <LegalPage params={params} pageKey="terms" />;
}