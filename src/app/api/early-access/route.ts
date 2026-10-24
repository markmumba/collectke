import { NextResponse } from "next/server";

const unavailable = "Early access registration isn’t open yet. Please check back soon.";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return NextResponse.json(
      { message: "Please submit your request from the CollectKE website." },
      { status: 403 },
    );
  }
  const body = await request.text();
  if (body.length > 4096)
    return NextResponse.json({ message: "Your request is too large." }, { status: 413 });
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(body);
  } catch {
    return NextResponse.json(
      { message: "Please check your details and try again." },
      { status: 400 },
    );
  }
  if (!data || typeof data !== "object" || Array.isArray(data))
    return NextResponse.json(
      { message: "Please check your details and try again." },
      { status: 400 },
    );
  if (data.website)
    return NextResponse.json({ message: "Unable to send this request." }, { status: 400 });
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const businessName = typeof data.businessName === "string" ? data.businessName.trim() : "";
  if (
    !name ||
    name.length > 100 ||
    !businessName ||
    businessName.length > 160 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json(
      { message: "Please enter your name, a valid email, and your business name." },
      { status: 400 },
    );
  }
  const endpoint = process.env.EARLY_ACCESS_WEBHOOK_URL;
  if (!endpoint) return NextResponse.json({ message: unavailable }, { status: 503 });
  try {
    if (new URL(endpoint).protocol !== "https:") throw new Error("HTTPS required");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, businessName }),
      signal: AbortSignal.timeout(8000),
      redirect: "error",
    });
    if (!response.ok) throw new Error("Lead delivery failed");
    return NextResponse.json({ message: "Request received." });
  } catch {
    return NextResponse.json(
      { message: "We couldn’t send your request right now. Please try again shortly." },
      { status: 502 },
    );
  }
}
