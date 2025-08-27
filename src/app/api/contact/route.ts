import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/browser";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  time?: string;
  [key: string]: FormDataEntryValue | string | undefined; // fallback för extra fält
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data: ContactFormData = Object.fromEntries(formData) as ContactFormData;

    // Add timestamp
    const now = new Date();
    data.time = now.toLocaleString("sv-SE");

    // Send email using EmailJS
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      data,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
      }
    );

    return NextResponse.json({
      success: true,
      message: "Tack för ditt meddelande! Vi återkommer så snart vi kan.",
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, message: "Något gick fel. Vänligen försök igen senare." },
      { status: 500 }
    );
  }
}
