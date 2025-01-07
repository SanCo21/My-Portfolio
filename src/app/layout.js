import { Poppins, Inter } from "next/font/google";
import "./styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { content } from "../content";
import { projectsList } from "../projectsList";
import BackgroundStyle from "./components/BackgroundStyle";
import getImagePath from "./components/getImagePath";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

// Determine the type of the image based on its extension
const getImageType = (src) => {
  if (typeof src !== "string") {
    return "image/*"; // Or handle the error differently, like throwing an error
  }

  if (src.endsWith(".jpg") || src.endsWith(".jpeg")) {
    return "image/jpeg";
  } else if (src.endsWith(".png")) {
    return "image/png";
  } else if (src.endsWith(".webp")) {
    // Add webp support
    return "image/webp";
  } else {
    return "image/*"; // Default for other or unknown types
  }
};

export const metadata = {
  metadataBase: new URL("https://s-and-co-solutions.digital"), // Base URL for metadata
  title: content.siteMetadata.title,
  description: content.siteMetadata.description,
  keywords: content.siteMetadata.keywords, // Keywords for SEO
  authors: [
    { name: "Sandra COLOMER", url: "https://s-and-co-solutions.digital" },
  ],
  openGraph: {
    // metadata for social networks
    title: "Portfolio - Sandra COLOMER",
    description:
      "Bienvenue sur le portfolio de Sandra COLOMER. Explorez mes projets de développement web, apprenez-en davantage sur moi, et contactez-moi pour vos projets numériques.",
    url: "/Portfolio",
    images: {
      url: getImagePath("/images/og-image.jpg"), // relative path to the image
      alt: "Image de partage pour le portfolio",
      width: 1200,
      height: 630,
    },
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  // Get all images to preload
  const imagesToPreload = [
    getImagePath(content.sectionsData.home.imageSrc),
    ...projectsList.projects.map((project) => getImagePath(project.image)),
  ];
  return (
    <html lang="fr" className={inter.className}>
      <head>
        {imagesToPreload.map((image, index) => (
          <link
            key={index}
            rel="preload"
            as="image"
            href={image}
            type={getImageType(image)} // Determine the type of the image based on its extension
          />
        ))}
      </head>
      <body className={`antialiased ${poppins.variable}`}>
        <BackgroundStyle />
        {children}
      </body>
    </html>
  );
}
