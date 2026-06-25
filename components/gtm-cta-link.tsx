"use client";

import Link from "next/link";
import { trackFindStoreCta } from "@/lib/gtm";
import type { ReactNode } from "react";

interface GtmCtaLinkProps {
  href: string;
  location: string;
  className?: string;
  children: ReactNode;
}

/**
 * Drop-in replacement for <Link href="/where-to-buy"> primary CTAs.
 * Fires a GTM find_store_cta_click event on click.
 */
export default function GtmCtaLink({
  href,
  location,
  className,
  children,
}: GtmCtaLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackFindStoreCta(location)}
    >
      {children}
    </Link>
  );
}
