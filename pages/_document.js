import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * Custom document class for advance usage
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US" dir="ltr">
        <Head>
          <meta name="description" content="IPL 2017 Explorer | Discovery" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </Head>
        <body className="bg-white dark:bg-my-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
