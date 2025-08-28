"use client";

import Head from "next/head";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Kontaktaoss.css";

export default function KontaktaOss() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    // Lägg till timestamp som hidden input
    const now = new Date();
    const timeString = now.toLocaleString("sv-SE");
    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = timeString;
    form.current.appendChild(timeInput);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setSubmitStatus("success");
      form.current.reset();
    } catch (err) {
      console.error("Failed to send:", err);
      setSubmitStatus("error");
    } finally {
      // Ta bort hidden input igen
      form.current.removeChild(timeInput);

      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000); // rensa feedback efter 5s
    }
  };

  return (
    <>
      <Head>
        <title>Kontakta oss – Vällingby Körakademin</title>
        <meta
          name="description"
          content="Kontakta Vällingby Körakademin för bokning av körlektioner, kurser eller frågor. Här hittar du kontaktformulär, öppettider och adress i Vällingby."
        />
        <link
          rel="canonical"
          href="https://www.vällingbykörakademin.se/kontakta-oss"
        />
      </Head>

      <div className="contact-page">
        <div className="contact-container">
          <h1 className="contact-title">Kontakta Oss</h1>
          <p className="contact-subtitle">
            Skicka oss ett meddelande så återkopplar vi så snart vi kan
          </p>

          <div className="main-content-section">
            {/* Vänster: Formulär */}
            <div className="form-section">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Ämne"
                    required
                    className="form-input"
                  />
                  <span className="input-border"></span>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Namn"
                    required
                    className="form-input"
                  />
                  <span className="input-border"></span>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="form-input"
                  />
                  <span className="input-border"></span>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Beskrivning"
                    required
                    className="form-textarea"
                  ></textarea>
                  <span className="input-border"></span>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Skickar..." : "Skicka Meddelande"}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Tack för ditt meddelande! Vi återkommer så snart vi kan.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="error-message">
                    Något gick fel. Vänligen försök igen senare.
                  </div>
                )}
              </form>
            </div>

            {/* Höger: Info-kort */}
            <div className="right-column">
              <div className="map-container">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127.06584009758762!2d17.878522835224487!3d59.36544698393505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9fcd5640a071%3A0x14cb18bf7f9ea5c!2sH%C3%A4rjedalsgatan%2014%2C%20162%2066%20V%C3%A4llingby!5e0!3m2!1sen!2sse!4v1748976558911!5m2!1sen!2sse"
                  className="location-map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="contact-info">
                <h2>Kontaktinformation</h2>
                <div className="contact-details">
                  <div className="contact-item">
                    <p>
                      Härjedalsgatan 14
                      <br />
                      162 66 Vällingby
                    </p>
                  </div>
                  <div className="contact-item">
                    <p>
                      Mån-Fre 08:00-18:00
                      <br />
                      Lör 10:00-15:00
                    </p>
                  </div>
                  <div className="contact-item">
                    <p>vallingby.korakademin@outlook.com</p>
                  </div>
                  <div className="contact-item">
                    <p>070-034 23 24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
