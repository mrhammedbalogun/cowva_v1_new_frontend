import { NextRequest, NextResponse } from "next/server"

const MAILGUN_DOMAIN = "mg.cowva.com"
const MAILGUN_API_URL = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  support: "Technical Support",
  sales: "Sales & Pricing",
  partnership: "Partnership",
  demo: "Request a Demo",
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.MAILGUN_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 }
    )
  }

  let body: { name: string; email: string; phone?: string; subject: string; message: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { name, email, phone, subject, message } = body

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  const subjectLabel = SUBJECT_LABELS[subject] ?? subject

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0D1B2A; padding: 24px; border-radius: 8px 8px 0 0;">
        <h2 style="color: #00B5AD; margin: 0;">New Contact Form Submission</h2>
        <p style="color: #9ca3af; margin: 4px 0 0;">Cowva Landing Page</p>
      </div>
      <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #6b7280; width: 120px; vertical-align: top;"><strong>Name</strong></td>
            <td style="padding: 10px 0; color: #111827;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;"><strong>Email</strong></td>
            <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #00B5AD;">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;"><strong>Phone</strong></td>
            <td style="padding: 10px 0; color: #111827;">${phone}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;"><strong>Subject</strong></td>
            <td style="padding: 10px 0; color: #111827;">${subjectLabel}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;"><strong>Message</strong></td>
            <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      </div>
      <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
        Sent from cowva.com contact form
      </p>
    </div>
  `

  const formData = new FormData()
  formData.append("from", `Cowva Contact Form <app@mg.cowva.com>`)
  formData.append("to", "support@cowva.com")
  formData.append("cc", "mrhammedbalogun@gmail.com, eegbroko@gmail.com")
  formData.append("subject", `[Cowva] ${subjectLabel} — from ${name}`)
  formData.append("html", htmlBody)
  formData.append("h:Reply-To", email)

  const credentials = Buffer.from(`api:${apiKey}`).toString("base64")

  try {
    const response = await fetch(MAILGUN_API_URL, {
      method: "POST",
      headers: { Authorization: `Basic ${credentials}` },
      body: formData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Mailgun error:", errorText)
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
