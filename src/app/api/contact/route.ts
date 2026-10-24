import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return NextResponse.json(
      { message: "Please send your message from the CollectKE website." },
      { status: 403 },
    );
  }
  const body = await request.text();
  if (body.length > 8192)
    return NextResponse.json({ message: "Your message is too large." }, { status: 413 });
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(body);
  } catch {
    return NextResponse.json(
      { message: "Please check your details and try again." },
      { status: 400 },
    );
  }
  if (!data || typeof data !== "object" || Array.isArray(data) || data.website) {
    return NextResponse.json(
      { message: "Unable to send this message. Please check your details." },
      { status: 400 },
    );
  }
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const businessName = typeof data.businessName === "string" ? data.businessName.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const topic = data.topic;
  if (
    !name ||
    name.length > 100 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    businessName.length > 160 ||
    message.length < 10 ||
    message.length > 3000 ||
    (topic !== "workflow" && topic !== "general")
  ) {
    return NextResponse.json(
      { message: "Enter your name, a valid email, and a message between 10 and 3,000 characters." },
      { status: 400 },
    );
  }
  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint)
    return NextResponse.json(
      {
        message:
          "Contact messages aren’t open yet. Your message hasn’t been sent. Please check back soon.",
      },
      { status: 503 },
    );
  try {
    if (new URL(endpoint).protocol !== "https:") throw new Error("HTTPS required");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, businessName, topic, message }),
      signal: AbortSignal.timeout(8000),
      redirect: "error",
    });
    if (!response.ok) throw new Error("Message delivery failed");
    return NextResponse.json({ message: "Message received." });
  } catch {
    return NextResponse.json(
      { message: "We couldn’t send your message right now. Please try again shortly." },
      { status: 502 },
    );
  }
}
