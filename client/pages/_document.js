import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="icon" type="image/png" href="/capanova.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
  rel="stylesheet"
/>

            </Html>
        );
    }
}

export default MyDocument;
