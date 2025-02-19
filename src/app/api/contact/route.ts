import EmailTemplate from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, message: "Missing RESEND_API_KEY in environment variables." },
      { status: 500 }
    );
  }

  try {
    const { senderEmail, message } = await request.json();

    if (!senderEmail || !message) {
      return NextResponse.json(
        { success: false, message: "Both email and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "abdulr6503@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: EmailTemplate({ message, senderEmail }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully!", data },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
