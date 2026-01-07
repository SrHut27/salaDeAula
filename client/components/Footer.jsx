import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Yeseva_One, Lato } from 'next/font/google';

// Importando a fonte Yeseva One
const yeseva = Yeseva_One({
  subsets: ['latin'],
  weight: '400', // único peso disponível
});

// Importando a fonte Lato
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // pesos comuns
});

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Título com Yeseva One */}
          <h1 className={`${styles.footerTitle} ${yeseva.className}`}>
            Escola Maria Peregrina
          </h1>
          {/* Texto com Lato */}
          <p className={lato.className}>
            Transformando vidas através da educação.
          </p>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#conheca">Conheça</a></li>
            <li><a href="#amaiorsala">Sala</a></li>
            <li><a href="#comoajudar">Apoie</a></li>
          </ul>
        </nav>
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com/escolamariaperegrina.sjrp" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://wa.link/hygqgj" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/escolamariaperegrina.sjrp/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        {/* Textos da bottomBar com Lato */}
        <p className={lato.className}>
          &copy; 2026 sala.mariaperegrina.org Todos os direitos reservados.
        </p>
        <p className={lato.className}>
          Telefone: (17) 98811-7301<br />
          E-mail: contato@mariaperegrina.org.br<br />
          Endereço: R. Francisco Rodrigues de Freitas, 184 - CECAP, São José do Rio Preto - SP, 15041-049
        </p>
      </div>
    </footer>
  );
}

export default Footer;
