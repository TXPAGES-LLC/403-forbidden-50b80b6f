"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

function FAQItem({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#2e2820]">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-serif text-base md:text-lg font-semibold text-[#f5f0e8]">{q}</span>
        <span
          className={`text-[#c85a00] shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-5 text-[#f5f0e8]/70 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FeedingGuideFAQ({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div>
      {faqs.map((faq) => (
        <FAQItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
}
