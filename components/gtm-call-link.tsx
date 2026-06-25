"use client";

import { trackCallClick } from "@/lib/gtm";
import type { ReactNode } from "react";

interface GtmCallLinkProps {
  location: string;
  className?: string;
  children: ReactNode;
}

/**
 * Drop-in replacement for <a href="tel:+12549393957">.
 * Fires a GTM click_to_call event before the browser opens the dialer.
 */
export default function GtmCallLink({
  location,
  className,
  children,
}: GtmCallLinkProps) {
  return (
    <a
      href="tel:+12549393957"
      className={className}
      onClick={() => trackCallClick(location)}
    >
      {children}
    </a>
  );
}
