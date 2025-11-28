// app/api/contact/route.js (debug)
export async function POST(request) {
  try {
    console.log("API route hit — env:", {
      hasKey: !!process.env.BREVO_API_KEY,
      keyPreview: process.env.BREVO_API_KEY?.slice(0,7),
      from: process.env.BREVO_FROM_EMAIL,
      to: process.env.BREVO_TO_EMAIL
    });

    const body = await request.json();
    const { name, email, phone, message } = body || {};
    if (!name || !email || !message) return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });

    const payload = {
      sender: { email: process.env.BREVO_FROM_EMAIL, name: process.env.BREVO_FROM_NAME || "Website" },
      to: [{ email: process.env.BREVO_TO_EMAIL }],
      subject: `New contact: ${name}`,
      htmlContent: `<p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><p><b>Phone:</b> ${escapeHtml(phone||"—")}</p><p><b>Message:</b><br/>${escapeHtml(message)}</p>`,
      replyTo: { email, name }
    };

    const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { accept: "application/json", "content-type": "application/json", "api-key": process.env.BREVO_API_KEY },
      body: JSON.stringify(payload)
    });

    const text = await resp.text();
    console.log("Brevo responded:", resp.status, text);
    let data = {};
    try { data = text ? JSON.parse(text) : {}; } catch (e) { data = { raw: text }; }

    if (!resp.ok) return new Response(JSON.stringify({ message: data.message || "Brevo error", details: data }), { status: resp.status });
    return new Response(JSON.stringify({ message: "Email sent" }), { status: 200 });

  } catch (err) {
    console.error("Route error:", err);
    return new Response(JSON.stringify({ message: err?.message || "Server error" }), { status: 500 });
  }
}

function escapeHtml(s=""){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"); }
