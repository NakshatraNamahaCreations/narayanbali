"use client";

import { useState } from "react";
import styles from "../styles/ContactSection.module.css";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // <<< REPLACE this with your WhatsApp number (international, no +) >>>
  const whatsappNumber = "918970901034";

  function buildWhatsAppUrl(number, message) {
    // wa.me short link with encoded text
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encoded}`;
  }

  function makeMessage({ name, email, phone, message }) {
    const lines = [
      "New enquiry from website",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "Message:",
      message,
      "",
      "— via website contact form",
    ].filter(Boolean);
    return lines.join("\n");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus(null);

    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone?.value.trim() || "",
      message: form.message.value.trim(),
    };

    // client-side validation
    if (!data.name || !data.email || !data.message) {
      setStatus({ ok: false, message: "Please enter your name, email and message." });
      setLoading(false);
      return;
    }

    const messageText = makeMessage(data);
    const waUrl = buildWhatsAppUrl(whatsappNumber, messageText);

    try {
      // Try to open in a new tab/window first (works for desktop -> WhatsApp Web)
      const newWin = window.open(waUrl, "_blank");

      if (newWin) {
        setStatus({ ok: true, message: "WhatsApp opened. Please review the message and press Send." });
        form.reset();
      } else {
        // Popup blocked — provide clickable fallback and also try location redirect as last resort
        setStatus({
          ok: false,
          message: (
            <>
              Couldn't open WhatsApp automatically.{" "}
              <a href={waUrl} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                Click here to open WhatsApp.
              </a>
            </>
          ),
        });
      }
    } catch (err) {
      console.error("Error opening WhatsApp:", err);
      setStatus({
        ok: false,
        message: (
          <>
            Failed to open WhatsApp.{" "}
            <a href={waUrl} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
              Click here to open WhatsApp manually.
            </a>
          </>
        ),
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.overlay} />

      <div className="container position-relative">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className={styles.title}>Get In Touch</h2>
            <span className={styles.underline} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className={`${styles.formCard} bg-white`}>
              <form className="row g-3" onSubmit={handleSubmit} noValidate>
                <div className="col-12">
                  <label htmlFor="name" className="visually-hidden">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    aria-label="Name"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="visually-hidden">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    aria-label="Email"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="phone" className="visually-hidden">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    pattern="^[0-9+() \\-]{7,}$"
                    title="Enter at least 7 characters: digits, +, (), space or -"
                    aria-label="Phone"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="visually-hidden">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-control"
                    placeholder="Your Message"
                    required
                    aria-label="Message"
                  />
                </div>

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className={`btn ${styles.cta}`}
                    disabled={loading}
                    aria-disabled={loading}
                  >
                    {loading ? "Opening WhatsApp…" : "Send via WhatsApp"}
                  </button>
                </div>

                {status && (
                  <div className="col-12 text-center mt-2">
                    <div role="status" style={{ color: status.ok ? "green" : "crimson" }}>
                      {status.message}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
