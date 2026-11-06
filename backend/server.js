import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER || "yadavpriyanshu9386@gmail.com",
    pass: process.env.GMAIL_PASS || "evaxwkdlwbbkwqvk",
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error("❌ Gmail Connection Error:", error);
  } else {
    console.log("✅ Gmail Server is ready to send messages!");
  }
});

app.post("/api/contact", async (req, res) => {
  console.log("📩 Form Submission Received:", req.body);
  const { name, contact, subject, message } = req.body;

  if (!name || !contact || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  const mailOptions = {
    from: `"Portfolio Alert" <yadavpriyanshu9386@gmail.com>`,
    to: "yadavpriyanshu9386@gmail.com",
    replyTo: contact.includes("@") ? contact : undefined,
    subject: `⚡ Transmission from ${name}: ${subject || "Inquiry"}`,
    text: `Name: ${name}\nContact: ${contact}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #0f0207; color: #fff; padding: 20px; border-radius: 10px; border: 1px solid #dc143c;">
        <h2 style="color: #ff2e56; margin-top: 0;">New Transmission Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact Info:</strong> ${contact}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border-color: #330514;" />
        <h4 style="color: #ff6b8b;">Message:</h4>
        <p style="background: #19030c; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully! MessageId:", info.messageId);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ SendMail Error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});