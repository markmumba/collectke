"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/icon";
import styles from "./contact.module.css";

export function ContactEnquiry({ topic, label }: { topic: "workflow" | "general"; label: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data), topic }),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "We couldn’t send your message. Please try again.");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "We couldn’t send your message. Please try again.",
      );
    }
  }
  return (
    <>
      <button
        type="button"
        className="button button-outline"
        onClick={() => dialog.current?.showModal()}
      >
        {label}
        <Icon name="arrow" width="16" height="16" />
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
            type="button"
            className="dialog-close"
            aria-label="Close contact form"
            onClick={() => dialog.current?.close()}
          >
            <Icon name="close" />
          </button>
          <span className="eyebrow">
            {topic === "workflow" ? "LET’S TALK ABOUT YOUR WORKFLOW" : "CONTACT COLLECTKE"}
          </span>
          <h2 id={titleId}>
            {status === "success"
              ? "Message received."
              : topic === "workflow"
                ? "Tell us how you work."
                : "What’s on your mind?"}
          </h2>
          {status === "success" ? (
            <p role="status">
              Thanks for getting in touch. Your message has been received, and we can follow up
              using the email you shared.
            </p>
          ) : (
            <>
              <p>
                {topic === "workflow"
                  ? "Tell us where invoices, payments, or customer follow-up get stuck in your business."
                  : "Send a question, share an idea, or tell us about a potential collaboration."}
              </p>
              <form onSubmit={submit} className={styles.contactForm}>
                <label>
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@yourbusiness.co.ke"
                  />
                </label>
                <label>
                  <span>
                    Business name <span className={styles.optional}>(optional)</span>
                  </span>
                  <input
                    name="businessName"
                    autoComplete="organization"
                    maxLength={160}
                    placeholder="Your business"
                  />
                </label>
                <label>
                  Your message
                  <textarea
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                    maxLength={3000}
                    placeholder={
                      topic === "workflow"
                        ? "How does your team handle invoices and payments today?"
                        : "How can we help?"
                    }
                  />
                </label>
                <div className="form-trap" aria-hidden="true">
                  <label>
                    Leave this empty
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <p className="form-note">
                  We’ll use these details to respond to your enquiry. Please leave out payment
                  credentials and private customer records. Read our{" "}
                  <a href="/privacy">privacy policy</a>.
                </p>
                {message ? (
                  <p role="alert" className="form-error">
                    {message}
                  </p>
                ) : null}
                <button
                  type="submit"
                  className="button button-primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending message…" : "Send message"}
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
