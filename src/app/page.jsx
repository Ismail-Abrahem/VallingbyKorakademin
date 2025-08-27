"use client"; 
import styles from "./page.module.css";
import Slideshow from "../components/Slideshow";
import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function PriceTeasers() {
  return (
    <section className={styles.teasers}>
      <h2 className={styles.sectionTitle}>Kom igång – välj det som passar dig</h2>
      <div className={styles.teaserGrid}>
        <article className={styles.teaserCard}>
          <h3>Körlektioner</h3>
          <p>
            Bygg en stabil grund tillsammans med erfarna trafiklärare och moderna bilar.
            Välj antal lektioner efter behov och tempo.
          </p>
          <ul className={styles.teaserList}>
            <li>1 lektion (50 min) – 580 kr</li>
            <li>5 lektioner – 2,800 kr</li>
            <li>10 lektioner – 5,700 kr</li>
          </ul>
          <Link className={styles.btnPrimary} href="/priser" aria-label="Till prislistan för körlektioner">
            Se priser
          </Link>
        </article>

        <article className={styles.teaserCard}>
          <h3>Paket</h3>
          <p>
            Smidiga paket där körlektioner och riskutbildningar samlas för en effektiv väg till körkortet.
          </p>
          <ul className={styles.teaserList}>
            <li>5 lektioner + Risk 1 &amp; 2 – 5,000 kr</li>
            <li>10 lektioner + Risk 1 &amp; 2 – 7,700 kr</li>
            <li>15 lektioner + Risk 1 &amp; 2 – 10,500 kr</li>
          </ul>
          <Link className={styles.btnPrimary} href="/priser" aria-label="Till prislistan för paket">
            Se paket
          </Link>
        </article>

        <article className={styles.teaserCard}>
          <h3>Kurser</h3>
          <p>
            Obligatoriska moment och stödjande utbildningar – allt du behöver samlat hos oss.
          </p>
          <ul className={styles.teaserList}>
            <li>Risk 1 – 350 kr</li>
            <li>Risk 2 / Halkbana – 1,750 kr</li>
            <li>Introduktionsutbildning – 250 kr</li>
          </ul>
          <Link className={styles.btnPrimary} href="/priser" aria-label="Till prislistan för kurser">
            Se kurser
          </Link>
        </article>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.sectionTitle}>Våra Styrkor</h2>
      <div className={styles.benefitsGrid}>
        <div className={styles.benefitItem}>
          <div className={styles.benefitCircle}>
            <Image 
              src="/assets/Images/multilingual.png" 
              alt="Mångspråkig Instruktion" 
              className={styles.benefitImage} 
              width={120} 
              height={120}
            />
          </div>
          <h3>Mångspråkig Instruktion</h3>
          <p>Undervisning på alla språk efter behov</p>
        </div>
        
        <div className={styles.benefitItem}>
          <div className={styles.benefitCircle}>
            <Image 
              src="/assets/Images/experienced.png" 
              alt="Erfarna Trafiklärare" 
              className={styles.benefitImage} 
              width={120} 
              height={120}
            />
          </div>
          <h3>Erfarna Trafiklärare</h3>
          <p>Lärare med många års branscherfarenhet</p>
        </div>
        
        <div className={styles.benefitItem}>
          <div className={styles.benefitCircle}>
            <Image 
              src="/assets/Images/flexible.png" 
              alt="Flexibelt Lärande" 
              className={styles.benefitImage} 
              width={120} 
              height={120}
            />
          </div>
          <h3>Flexibelt Lärande</h3>
          <p>Tillgång till kursmaterial och datorer</p>
        </div>
        
        <div className={styles.benefitItem}>
          <div className={styles.benefitCircle}>
            <Image 
              src="/assets/Images/modern.png" 
              alt="Modern Utrustning" 
              className={styles.benefitImage} 
              width={120} 
              height={120}
            />
          </div>
          <h3>Modern Utrustning</h3>
          <p>Nya bilar med senaste säkerhetsfunktioner</p>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleFlip = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const methodCards = [
    {
      icon: "🚗",
      title: "Praktisk Körning",
      description: "Klicka för att se vår omfattande praktiska utbildning",
      features: [
        "Stadskörning i olika trafiksituationer",
        "Landsvägskörning med fokus på säkerhet",
        "Avancerade parkeringstekniker",
        "Motorvägsträning och hastighetsanpassning",
        "Miljömedveten körstil"
      ]
    },
    {
      icon: "📚",
      title: "Teoristöd",
      description: "Klicka för att se vad som inkluderas i vårt teoristöd",
      features: [
        "Interaktiva teorilektioner med erfarna lärare",
        "Digitala läromedel och provsimulatorer",
        "Personliga studieplaner",
        "Strategier för effektiv inlärning",
        "Regelbundna kunskapstester"
      ]
    },
    {
      icon: "🛡️",
      title: "Riskmedvetenhet",
      description: "Klicka för att se vad som inkluderas i vår säkerhetsutbildning",
      features: [
        "Identifiera och undvika potentiella faror",
        "Hantera nödsituationer på ett säkert sätt",
        "Förstå bilens fysik och gränser",
        "Anpassa körstil efter väder och vägförhållanden",
        "Utveckla en defensiv körstil"
      ]
    }
  ];

  return (
    <section className={styles.methodSection}>
      <h2 className={styles.sectionTitle}>Vår Metod</h2>
      <p className={styles.introText}>
        På Vällingby Körakademi har vi utvecklat en unik utbildningsmetod som kombinerar 
        praktisk erfarenhet med pedagogisk forskning för att ge dig den bästa möjliga 
        körkortsutbildningen.
      </p>
      
      <div className={styles.methodContainer}>
        {methodCards.map((card, index) => (
          <div 
            key={index}
            className={`${styles.methodCard} ${flippedCards.includes(index) ? styles.flipped : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className={styles.methodCardInner}>
              <div className={styles.methodCardFront}>
                <div className={styles.methodIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.flipArrow}>→</div>
              </div>
              <div className={styles.methodCardBack}>
                <ul className={styles.methodFeatures}>
                  {card.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.methodConclusion}>
        All utbildning sker med personliga trafiklärare som anpassar lektionerna efter 
        dina individuella behov och inlärningstempot. Vi strävar efter att inte bara 
        lära dig klara körprovet, utan att bli en säker och medveten förare för livet.
      </p>
    </section>
  );
}

export default function Home() {
  const images = [
    { src: "/assets/Images/hero1.jpg", alt: "Vällingby Körakademin – bil på väg" },
    { src: "/assets/Images/hero2.jpg", alt: "Elev och trafiklärare inför körlektion" },
    { src: "/assets/Images/hero3.jpg", alt: "Stadskörning i västerort" },
    { src: "/assets/Images/hero4.jpg", alt: "Körning i mörker med moderna strålkastare" },
  ];

  return (
    <>
      <Head>
        <title>Vällingby Körakademin – Körskola & Trafikskola i Vällingby</title>
        <meta
          name="description"
          content="Vällingby Körakademin AB är en professionell körskola och trafikskola i Vällingby. Vi erbjuder körlektioner, intensivkurser och utbildningar för körkort. Boka din körlektion idag!"
        />
        <link rel="canonical" href="https://www.vällingbykörakademin.se/" />
      </Head>

      <div className="main-first-section">
        <Slideshow
          images={images}
          autoAdvanceMs={5000}
          headline="Vällingby Körakademin"
          subline="Professionell körkortsutbildning med erfarna trafiklärare och välutrustade bilar. Strukturerad metodik, tydlig feedback och trygg progression – från första lektion till godkänt prov."
        />
      </div>
      <div className={styles.homeContainer}>
        <PriceTeasers />
        <Benefits />
        <Method />
      </div>
    </>
  );
}