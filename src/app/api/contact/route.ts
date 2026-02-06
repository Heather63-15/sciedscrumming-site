import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // TODO: Replace with your preferred email service (Resend, SendGrid, Formspree, etc.)
    // For now, log the submission. In production, send an email to support@sciedscrumming.com.
    console.log("Contact form submission:", { name, email, message });

    // Example with Resend (uncomment and add RESEND_API_KEY to env):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "SciEdScrumming <noreply@sciedscrumming.com>",
    //   to: "support@sciedscrumming.com",
    //   subject: `Contact form: ${name}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
