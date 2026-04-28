import EmailTemplate from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { NextRequest, NextResponse } from "next/server";

// Initialize Resend safely
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Define expected payload structure
interface ContactPayload {
  senderEmail: string;
  message: string;
}

export async function POST(request: NextRequest) {
  // 1. Guard against missing environment configuration
  if (!resend) {
    console.error("API Error: Missing RESEND_API_KEY environment variable.");
    return NextResponse.json(
      { success: false, message: "Email service is temporarily misconfigured." },
      { status: 503 } // Service Unavailable
    );
  }

  try {
    // 2. Parse and validate the incoming payload
    const body = await request.json() as Partial<ContactPayload>;
    const { senderEmail, message } = body;

    // Basic validation
    if (!senderEmail || typeof senderEmail !== "string") {
      return NextResponse.json(
        { success: false, message: "A valid sender email address is required." },
        { status: 400 } // Bad Request
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "The message body cannot be empty." },
        { status: 400 }
      );
    }

    // 3. Dispatch the email via Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      // Replace this with the email you used to sign up for Resend!
      to: "abdulr6503@gmail.com", 
      subject: `New Inquiry from ${senderEmail}`,
      replyTo: senderEmail,
      react: EmailTemplate({ message, senderEmail }) as React.ReactElement,
    });

    // 4. Handle specific Resend API errors (e.g., trying to send to an unverified domain on the free tier)
    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to dispatch email. Please ensure your Resend account is verified." },
        { status: 502 } // Bad Gateway
      );
    }

    // 5. Success Response
    return NextResponse.json(
      { success: true, message: "Transmission complete. I will be in touch shortly.", data },
      { status: 200 } // OK
    );

  } catch (error: unknown) {
    // 6. Catch-all for unexpected server or parsing errors
    console.error("Internal Server Error (Contact API):", error);
    
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred during transmission." },
      { status: 500 } // Internal Server Error
    );
  }
}