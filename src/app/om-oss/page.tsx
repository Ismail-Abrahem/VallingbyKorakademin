import Head from "next/head"; // Import next/head
import "./Omoss.css";

function Areas() {
  return (
    <section className="areas">
      <h2 className="section-title">Var vi kör – trygghet i rätt miljö</h2>
      <div className="areas-grid">
        <article className="area-card">
          <h3>Vällingby</h3>
          <p>
            Här finns vår utgångspunkt. Vi börjar ofta i närområdet för att skapa en lugn och tydlig progression
            från enklare till mer komplex trafik – utan onödiga avbrott i körningen.
          </p>
        </article>
        <article className="area-card">
          <h3>Bromma</h3>
          <p>
            Bromma erbjuder tät stadstrafik, varierade korsningar och genomfarter. Det ger realistisk träning i
            blick, planering och anpassning – viktiga delar för säker, självständig körning.
          </p>
        </article>
        <article className="area-card">
          <h3>Spånga</h3>
          <p>
            Spånga passar bra för att befästa grundläggande manövrering i ett lugnare tempo. Vi använder området
            för att stärka fordonshantering och rutiner innan svårare miljöer.
          </p>
        </article>
        <article className="area-card">
          <h3>Järfälla</h3>
          <p>
            Många uppkörningar sker i Järfälla. Genom att träna där blir du bekväm med lokala vägmiljöer och typiska
            provmoment, vilket minskar osäkerhet på själva provdagen.
          </p>
        </article>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>Om oss – Vällingby Körakademin</title>
        <meta
          name="description"
          content="Läs mer om Vällingby Körakademin. Vår körskola erbjuder modern körkortsutbildning med erfarna trafiklärare, pedagogisk metodik och fokus på trafiksäkerhet."
        />
        <link rel="canonical" href="https://www.vällingbykörakademin.se/om-oss" />
      </Head>
      <div className="about-container">
        <div className="about-content">
          <div className="about-details">
            <h2>Välkommen till Vällingby Körakademin</h2>
            <p>
              Vi erbjuder en modern och effektiv körkortsutbildning där kvalitet och säkerhet står i fokus. Hos oss får du tillgång till välutrustade och lättkörda fordon samt erfarna trafiklärare med pålitlig pedagogisk kompetens.
            </p>
            <p>
              Vår utbildningsfilosofi bygger på att skapa en trygg och strukturerad inlärningsmiljö. Vi arbetar metodiskt och anpassar utbildningen efter varje elevs behov och förutsättningar. Målet är att ge dig de kunskaper och färdigheter som krävs för att bli en säker, ansvarsfull och självständig förare.
            </p>
            <p>
              Vi använder moderna utbildningsmetoder och genomför varje moment i en logisk och effektiv ordning. Med fokus på både körteknik och trafiksäkerhet får du en helhetsutbildning som ger förutsättningar för att klara både teoriprov och körprov på första försöket.
            </p>
            <h2>Kontakta Oss</h2>
            <p>
              På Vällingby Körakademin ser vi till att du får den utbildning du behöver för att ta körkort på ett tryggt, effektivt och professionellt sätt.
            </p>
            <p>
              Har du frågor eller vill boka en lektion? Kontakta oss gärna via e-post eller telefon – vi svarar snabbt och hjälper dig vidare.
            </p>
          </div>
          <Areas />
        </div>
      </div>
    </>
  );
}