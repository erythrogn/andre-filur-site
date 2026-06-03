import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    // Configuração do transportador do Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configuração do e-mail que o André vai receber
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Envia para o próprio info.andrefilur@gmail.com
      replyTo: email,             // Permite que ele clique em "Responder" e vá direto para o cliente
      subject: `Novo Contato do Portfólio: ${name}`,
      html: `
        <div style="font-family: monospace; padding: 20px; background-color: #F5F1EA; color: #1A1A1A;">
          <h2 style="color: #8B7355; margin-bottom: 20px;">Novo Contato do Site</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid rgba(26,26,26,0.1); margin: 20px 0;" />
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'E-mail enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json(
      { error: 'Falha ao enviar a mensagem. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}