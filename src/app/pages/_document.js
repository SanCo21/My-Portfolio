import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="description" content="Bienvenue sur le portfolio de Sandra COLOMER. Explorez mes projets de développement web, apprenez-en davantage sur moi, et contactez-moi pour vos projets numériques." />
          <link rel="preload" href="/images/Portrait7.png" as="image" />
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
