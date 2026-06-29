import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Audit — Internal Tool | Outlaw Feed",
  robots: { index: false, follow: false },
};

export default function SeoAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
