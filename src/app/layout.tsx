import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeDebug } from "@/components/theme-debug";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xn--vllingbykrakademin-ltb28a.se"),
  title: "Vällingby Körakademin AB – Körskola & Trafikskola i Vällingby",
  description:
    "Vällingby Körakademin AB är en professionell körskola och trafikskola i Vällingby. Vi erbjuder körlektioner, intensivkurser och utbildningar för körkort. Boka din körlektion idag!",
  keywords: [
    "Vällingby körskola",
    "Vällingby trafikskola",
    "körlektioner Vällingby",
    "intensivkurs körkort",
    "körkort Vällingby",
    "trafikskola Stockholm",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Vällingby Körakademin AB – Körskola & Trafikskola i Vällingby",
    description:
      "Professionell körskola och trafikskola i Vällingby. Körlektioner, intensivkurser och utbildningar för körkort.",
    url: "https://www.vällingbykörakademin.se",
    siteName: "Vällingby Körakademin",
    images: ["/android-chrome-512x512.png"],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vällingby Körakademin AB – Körskola & Trafikskola i Vällingby",
    description:
      "Körskola och trafikskola i Vällingby. Körlektioner, intensivkurser och körkortsutbildningar.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Default to "system" for SSR, client will resolve via localStorage or prefers-color-scheme
  const initialTheme = "system";

  return (
    <html lang="sv" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme={initialTheme}
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDebug />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="79deb92b-9325-413b-a9e7-4b959d520c74"
          data-blockingmode="auto"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}