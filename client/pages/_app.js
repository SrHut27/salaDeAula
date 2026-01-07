import "../styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Lato } from 'next/font/google';

// Carregando a fonte Lato
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // pesos que você quer usar
});

import { Yeseva_One } from 'next/font/google';

const yeseva = Yeseva_One({
  subsets: ['latin'],
  weight: '400', // Yeseva One só tem peso 400
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
