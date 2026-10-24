"use client";

import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

export function MobileNavigation({ activeHref }: { activeHref?: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const wrapper = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !wrapper.current?.contains(event.target)) setOpen(false);
    }
    function closeOnEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="mobile-navigation xl:hidden" ref={wrapper}>
      <button
        ref={trigger}
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <Icon name="close" />
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3 6h14M3 10h14M3 14h14" />
          </svg>
        )}
      </button>
      <nav
        id={id}
        aria-label="Mobile navigation"
        className="mobile-menu"
        hidden={!open}
        onBlur={(event) => {
          if (
            event.relatedTarget instanceof Node &&
            !wrapper.current?.contains(event.relatedTarget)
          )
            setOpen(false);
        }}
      >
        {site.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={activeHref === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
            <Icon name="arrow" width="16" height="16" />
          </Link>
        ))}
        <Link href="/#walkthrough" onClick={() => setOpen(false)}>
          Explore the workspace
          <Icon name="arrow" width="16" height="16" />
        </Link>
      </nav>
    </div>
  );
}
