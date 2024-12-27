import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
// import { appWithTranslation } from 'next-i18next';
// import { i18n } from '../../next-i18next.config.mjs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Sandra COLOMER",
  description:
    "Bienvenue sur le portfolio de Sandra COLOMER. Explorez mes projets de développement web, apprenez-en davantage sur moi, et contactez-moi pour vos projets numériques.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// export default appWithTranslation(RootLayout, { ...i18n });
