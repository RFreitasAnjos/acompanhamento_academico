// app/api/contact/route.ts

import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO;

    if (!resendApiKey || !emailTo) {
      return NextResponse.json(
        { error: "Variáveis de ambiente ausentes para envio de email" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      to: emailTo,
      subject: `Novo contato de ${name}`,
      replyTo: email,
      html: `
        <h2>Novo contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}