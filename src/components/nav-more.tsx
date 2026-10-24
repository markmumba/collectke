"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/icon";

const CLOSE_DELAY_MS = 160;

/**
 * "More" in the header bar. Opens a full-width panel with the rest of the site on hover,
 * click, or keyboard; closes on leave, Escape, outside click, or focus moving away.
 */
export function NavMore({ activeHref }: { activeHref?: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const wrapper = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const current = site.moreNavigation.some((group) =>
    group.items.some((item) => item.href === activeHref),
  );

  function show() {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function hide() {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  }

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return;
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !wrapper.current?.contains(event.target)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
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
    <div
      ref={wrapper}
      className="nav-more"
      data-open={open}
      onPointerEnter={(event) => event.pointerType === "mouse" && show()}
      onPointerLeave={(event) => event.pointerType === "mouse" && hide()}
      onBlur={(event) => {
        if (!(
          event.relatedTarget instanceof Node && wrapper.current?.contains(event.relatedTarget)
        ))
          setOpen(false);
      }}
    >
      <button
        ref={trigger}
        type="button"
        className="nav-more-trigger"
        aria-expanded={open}
        aria-controls={id}
        data-current={current || undefined}
        onClick={() => setOpen(!open)}
      >
        More
        <Icon name="chevron" width="14" height="14" />
      </button>
      <div id={id} className="nav-more-panel">
        <div className="nav-more-groups">
          {site.moreNavigation.map((group) => (
            <div key={group.title} className="nav-more-group">
              <p>{group.title}</p>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span>
                    {item.label}
                    <Icon name="arrow" width="14" height="14" />
                  </span>
                  <small>{item.description}</small>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <Link href="/#walkthrough" className="nav-more-feature" onClick={() => setOpen(false)}>
          <span className="nav-more-feature-label">PRODUCT PREVIEW</span>
          <strong>Explore the workspace</strong>
          <small>See invoices, payments, and follow-up connected on one customer account.</small>
          <span className="nav-more-feature-cta">
            Take the walkthrough <Icon name="arrow" width="14" height="14" />
          </span>
        </Link>
      </div>
    </div>
  );
}
