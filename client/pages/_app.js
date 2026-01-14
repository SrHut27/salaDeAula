import "../styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Lato, Yeseva_One } from 'next/font/google';

// Fonte Lato (texto geral)
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

// Fonte Yeseva One (títulos)
const yeseva = Yeseva_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-yeseva',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${lato.variable} ${yeseva.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
