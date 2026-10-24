"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/icon";

export function EarlyAccess({
  className = "button button-primary",
  arrow = true,
  compactLabel = false,
}: {
  className?: string;
  arrow?: boolean;
  compactLabel?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "We couldn’t send your request. Please try again.",
      );
    }
  }

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={site.primaryCta}
        onClick={() => dialog.current?.showModal()}
      >
        {compactLabel ? (
          <>
            <span className="cta-full-label">{site.primaryCta}</span>
            <span className="cta-short-label">Early access</span>
          </>
        ) : (
          site.primaryCta
        )}
        {arrow ? <Icon name="arrow" /> : null}
      </button>
      <dialog
        ref={dialog}
        className="access-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-content">
          <button
            className="dialog-close"
            type="button"
            aria-label="Close early access form"
            onClick={() => dialog.current?.close()}
          >
            <Icon name="close" />
          </button>
          <span className="eyebrow">A BETTER WAY TO GET PAID</span>
          <h2 id={titleId}>
            {status === "success" ? "You’re on the list." : "Let’s keep your cash moving."}
          </h2>
          {status === "success" ? (
            <p role="status">
              Thanks for your interest in CollectKE. We’ll be in touch about early access.
            </p>
          ) : (
            <>
              <p>Tell us a little about your business to request early access to CollectKE.</p>
              <form onSubmit={submit}>
                <label>
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    required
                    placeholder="Jane Wanjiku"
                  />
                </label>
                <label>
                  Work email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    placeholder="jane@yourbusiness.co.ke"
                  />
                </label>
                <label>
                  Business name
                  <input
                    name="businessName"
                    autoComplete="organization"
                    maxLength={160}
                    required
                    placeholder="Your business"
                  />
                </label>
                <div className="form-trap" aria-hidden="true">
                  <label>
                    Leave this empty
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <p className="form-note">
                  We’ll use these details to contact you about CollectKE early access. Read our{" "}
                  <a href="/privacy">privacy policy</a>.
                </p>
                {message ? (
                  <p className="form-error" role="alert">
                    {message}
                  </p>
                ) : null}
                <button
                  className="button button-primary"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending request…" : site.primaryCta}
                  <Icon name="arrow" />
                </button>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
