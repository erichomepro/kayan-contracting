import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Kayan Contracting lead pipeline.
// Server-side: writes the lead to the AIP CRM (Supabase, service role) and
// emails Bryan via Resend. Both forms (homepage RoofCalculator and the
// service-page ServiceQuoteForm) POST here. The client never holds a Supabase
// key and we only report success when the email actually went out.

const OWNER_EMAIL = process.env.KAYAN_LEAD_EMAIL || 'kayancontracting@gmail.com'
const BCC_EMAIL = 'eric@aiprecisionmarketing.ca'
const FROM = 'Kayan Leads <leads@aiprecisionmarketing.ca>'
const ORG_ID = 'c3dec66d-ab7a-466a-b814-f15f3f0bf299'

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  )
}

function cap(s) {
  if (!s) return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function row(label, value) {
  if (!value) return ''
  return `<tr>
    <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#333;width:150px;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#555;">${escapeHtml(value)}</td>
  </tr>`
}

// Backup to the CRM. Never throws, because a CRM hiccup must not block the email.
async function backupToSupabase(body) {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return

  const services = Array.isArray(body.services) && body.services.length
    ? body.services
    : (body.serviceId ? [body.serviceId] : [])

  const payload = {
    org_id: ORG_ID,
    business_name: body.name || 'Website Lead',
    contact_name: body.name || null,
    email: body.email || null,
    phone: body.phone || null,
    source: body.source || 'Website Form',
    inquiry_type: 'Quote Request',
    form_data: body,
    services_interested: services,
    property_type: body.propertyType || null,
    lead_score:
      body.timeline === 'asap' ? 'Hot'
      : body.timeline === '1-month' ? 'Warm'
      : 'Warm',
    pipeline_stage: 'New',
    notes: body.message || null,
  }

  await fetch(`${url.replace(/\/+$/, '')}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(payload),
  }).catch(() => undefined)
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  if (!body.name || !body.phone) {
    return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured')
    return NextResponse.json({ error: 'Email backend not configured' }, { status: 500 })
  }

  // Fire the CRM backup in parallel, but do not let it block or fail the email.
  const crm = backupToSupabase(body)

  const serviceTitle = body.serviceTitle
    || (Array.isArray(body.services) && body.services.length ? body.services.join(', ') : 'General Inquiry')

  const rows = [
    row('Service', serviceTitle),
    row('Name', body.name),
    row('Phone', body.phone),
    row('Email', body.email),
    row('Address', body.address),
    row('Property Type', cap(body.propertyType)),
    row('Timeline', body.timeline),
    row('Best Call Time', cap(body.callTime)),
    row('Message', body.message),
  ].join('')

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#1a1a2e;color:#d95c26;padding:20px;border-radius:8px 8px 0 0;">
        <h1 style="margin:0;font-size:22px;">New Quote Request, Kayan Contracting</h1>
      </div>
      <div style="background:#f9f9f9;padding:24px;border:1px solid #e0e0e0;">
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
      </div>
      <div style="background:#1a1a2e;color:#999;padding:16px;border-radius:0 0 8px 8px;font-size:12px;text-align:center;">
        Lead captured from kayancontracting.ca. Managed by AI Precision Marketing.
      </div>
    </div>
  `

  const plain = [
    ['Service', serviceTitle],
    ['Name', body.name],
    ['Phone', body.phone],
    ['Email', body.email],
    ['Address', body.address],
    ['Property Type', cap(body.propertyType)],
    ['Timeline', body.timeline],
    ['Best Call Time', cap(body.callTime)],
    ['Message', body.message],
  ].filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n')

  const emailPayload = {
    from: FROM,
    to: [OWNER_EMAIL],
    bcc: [BCC_EMAIL],
    subject: `New Quote Request from ${body.name}${serviceTitle !== 'General Inquiry' ? ` (${serviceTitle})` : ''}`,
    html,
    text: plain,
  }
  if (body.email) emailPayload.reply_to = body.email

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(emailPayload),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      await crm
      return NextResponse.json({ error: 'Email send failed' }, { status: 502 })
    }
  } catch (err) {
    console.error('Lead notify error:', err)
    await crm
    return NextResponse.json({ error: 'Email send failed' }, { status: 502 })
  }

  await crm
  return NextResponse.json({ success: true })
}
