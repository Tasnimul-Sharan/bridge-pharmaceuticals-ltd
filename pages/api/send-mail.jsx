// pages/api/send-mail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Anondo Baari Chatbot" <${process.env.EMAIL_USER}>`,
        to: "tasnimulsharan8962@gmail.com",
        subject: "নতুন লিড এসেছে ✅",
        text: `Name: ${name || "N/A"}\nPhone: ${phone || "N/A"}\nEmail: ${
          email || "N/A"
        }`,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Mail error:", error);
      return res.status(500).json({ error: "Mail not sent" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
