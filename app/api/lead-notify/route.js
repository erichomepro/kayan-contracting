import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const lead = await request.json()

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json({ error: 'Email not configured' }, { status: 500 })
    }

    const serviceTitle = lead.serviceTitle || 'General Inquiry'
    const propertyType = lead.propertyType ? lead.propertyType.charAt(0).toUpperCase() + lead.propertyType.slice(1) : 'Not specified'
    const callTime = lead.callTime ? lead.callTime.charAt(0).toUpperCase() + lead.callTime.slice(1) : 'No preference'

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a1a2e; color: #d95c26; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 22px;">🔨 New Quote Request — Kayan Contracting</h1>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333; width: 140px;">Service:</td>
              <td style="padding: 8px 0; color: #555;">${serviceTitle}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td>
              <td style="padding: 8px 0; color: #555;">${lead.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${lead.phone}" style="color: #d95c26; font-weight: bold;">${lead.phone}</a></td>
            </tr>
            ${lead.email ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${lead.email}" style="color: #d95c26;">${lead.email}</a></td>
            </tr>` : ''}
            ${lead.address ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Address:</td>
              <td style="padding: 8px 0; color: #555;">${lead.address}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Property Type:</td>
              <td style="padding: 8px 0; color: #555;">${propertyType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Best Call Time:</td>
              <td style="padding: 8px 0; color: #555;">${callTime}</td>
            </tr>
            ${lead.message ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; color: #555;">${lead.message}</td>
            </tr>` : ''}
          </table>
        </div>
        <div style="background: #1a1a2e; color: #999; padding: 16px; border-radius: 0 0 8px 8px; font-size: 12px; text-align: center;">
          Lead captured from kayancontracting.ca — Managed by AI Precision Marketing
        </div>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Kayan Leads <leads@aiprecisionmarketing.ca>',
        to: ['kayancontracting@gmail.com'],
        subject: `New ${serviceTitle} Quote Request — ${lead.name}`,
        html: emailHtml,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead notify error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
