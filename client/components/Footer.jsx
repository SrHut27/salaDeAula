import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Escola Maria Peregrina</h1>
          <p>Transformando vidas através da educação.</p>
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
        <p>&copy; 2024 sala.mariaperegrina.org. Todos os direitos reservados.</p>
        <p>
          Telefone: 17-988117301
          E-mail: contato@mariaperegrina.org.br
          Endereço: R. Francisco Rodrigues de Freitas, 184 - CECAP, São José do Rio Preto - SP, 15041-049
      </p>
      </div>
    </footer>
  );
}

export default Footer;
