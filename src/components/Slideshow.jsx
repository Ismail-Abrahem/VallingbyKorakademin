"use client"; // 🔴 Viktigt för Hooks!

import { useEffect, useRef, useState } from "react";
import "../styles/components/Slideshow.css";

export default function Slideshow({
  images = [],
  autoAdvanceMs = 5000,
  headline = "Vällingby Körakademin",
  subline = "Professionell körkortsutbildning med erfarna trafiklärare..."
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const timerRef = useRef(null);

  const len = images.length || 1;

  const goTo = (i) => setIndex((i + len) % len);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!autoAdvanceMs || len <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, autoAdvanceMs);
    return () => clearInterval(timerRef.current);
  }, [autoAdvanceMs, len]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % len);
      else if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + len) % len);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [len]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; touchDeltaX.current = 0; };
  const onTouchMove = (e) => { if (touchStartX.current != null) touchDeltaX.current = e.touches[0].clientX - touchStartX.current; };
  const onTouchEnd = () => { 
    if (touchStartX.current == null) return; 
    if (touchDeltaX.current > 40) prev();
    else if (touchDeltaX.current < -40) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section
      className="hero"
      aria-label="Bildspel över trafikskolan"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((img, i) => (
          <figure className="slide" key={i} aria-hidden={i !== index}>
            <img 
              src={img.src} 
              alt={img.alt || `Bild ${i + 1}`} 
              loading={i === 0 ? "eager" : "lazy"} 
              fetchPriority={i === 0 ? "high" : "auto"} 
            />
          </figure>
        ))}
        {images.length === 0 && (
          <figure className="slide" aria-hidden={false}>
            <div className="slide-placeholder">Lägg till dina bilder i /public/assets/Images/</div>
          </figure>
        )}
      </div>
      <div className="hero-overlay">
        <h1 className="hero-title">{headline}</h1>
        <p className="hero-subtitle">{subline}</p>
      </div>
      {len > 1 && <>
        <button className="nav-arrow left" onClick={prev} aria-label="Föregående bild">‹</button>
        <button className="nav-arrow right" onClick={next} aria-label="Nästa bild">›</button>
      </>}
      {len > 1 && (
        <div className="dots" role="tablist" aria-label="Bildväljare">
          {images.map((_, i) => (
            <button key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => goTo(i)} role="tab" aria-selected={i === index} aria-label={`Gå till bild ${i + 1}`} />
          ))}
        </div>
      )}
    </section>
  );
}
