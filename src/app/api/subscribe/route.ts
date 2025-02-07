import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !serverPrefix) {
    return NextResponse.json(
      { error: "Missing Mailchimp credentials" },
      { status: 500 }
    );
  }

  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/`;
  const data = {
    email_address: email,
    status: "subscribed", // Or "pending" for double opt-in
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
          "base64"
        )}`,
      },
      body: JSON.stringify(data),
    });

    if (response.status >= 400) {
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Subscribed successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error subscribing to Mailchimp:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
