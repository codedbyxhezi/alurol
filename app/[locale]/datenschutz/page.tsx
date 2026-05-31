import type { Metadata } from "next";
import { LegalPage, generateLegalMetadata } from "../legal-page";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateLegalMetadata(params, "privacy");
}

export default function DatenschutzPage({ params }: PageProps) {
  return <LegalPage params={params} pageKey="privacy" />;
}