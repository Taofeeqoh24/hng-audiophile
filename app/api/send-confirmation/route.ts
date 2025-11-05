// app/api/send-confirmation/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { OrderConfirmationEmail } from "@/emails/order-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, orderNumber, items, totals } = body;

    // Extract shipping details from body
    const shippingAddress = body.shippingAddress || "N/A";
    const shippingCity = body.shippingCity || "N/A";
    const shippingZip = body.shippingZip || "N/A";
    const shippingCountry = body.shippingCountry || "N/A";

    const { data, error } = await resend.emails.send({
      from: "Audiophile <onboarding@resend.dev>", // Use this for testing
      // from: "Audiophile <orders@yourdomain.com>", // Use this in production after domain verification
      to: [email],
      subject: `Order Confirmation - ${orderNumber}`,
      react: OrderConfirmationEmail({ 
        name, 
        orderNumber,
        email,
        items, 
        totals,
        shippingAddress,
        shippingCity,
        shippingZip,
        shippingCountry,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}