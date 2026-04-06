import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, name, tags } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Kirim.Email integration
    const listId = process.env.KE_LIST_ID;
    const apiKey = process.env.KE_API_KEY;

    if (apiKey && listId) {
      const response = await fetch("https://api.kirim.email/v3/subscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          lists: listId,
          email,
          full_name: name || "",
          tags: tags || "website, via-api",
        }),
      });

      if (!response.ok) {
        console.error("Kirim.Email API error:", await response.text());
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
