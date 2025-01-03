import Document, { Html, Head, Main, NextScript } from "next/document";
import { content } from "../content";
import { projects } from "../projects";

class MyDocument extends Document {
  render() {
    // Get all images to preload
    const imagesToPreload = [
      content.sectionsData.home.image,
      ...projects.projectList.map((project) => project.image),
    ];

    // Determine the type of the image based on its extension
    const getImageType = (src) => {
      if (src.endsWith(".jpg") || src.endsWith(".jpeg")) {
        return "image/jpeg";
      } else if (src.endsWith(".png")) {
        return "image/png";
      } else {
        return "image/*"; // For unknown image types
      }
    };

    return (
      <Html lang="fr">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta
            name="description"
            content="Bienvenue sur le portfolio de Sandra COLOMER. Explorez mes projets de développement web, apprenez-en davantage sur moi, et contactez-moi pour vos projets numériques."
          />
          <meta name="robots" content="noindex, nofollow" /> {/* metadata not to be indexed */}
          {imagesToPreload.map((image, index) => (
            <link
              key={index}
              rel="preload"
              as="image"
              href={image}
              type={getImageType(image)} // Determine the type of the image based on its extension
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
