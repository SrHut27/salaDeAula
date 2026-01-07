import styles from '../styles/Help.module.css';
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

const Help = () => {
  return (
    <section id='comoajudar' className={styles.helpSection}>
      <h2 className={styles.sectionTitle}>Faça parte desse projeto!</h2>

      {/* Título principal com Yeseva One */}
      <h1 className={`${styles.mainTitle} ${yeseva.className}`}>
        Precisamos da sua ajuda
      </h1>

    {/* Parágrafo inicial com Lato */}
<p className={`${styles.description} ${lato.className}`}>
  Se você gostou desse projeto e gostaria de fazer parte dele, <a href="#comoajudar">faça sua contribuição!</a> Toda ajuda é bem-vinda e essencial para construirmos juntos a Maior Sala de Aula do Mundo.  
  Acompanhe o andamento e as etapas da construção pelo Instagram: @missoes.mariaperegrina e @escolamariaperegrina.sjrp.
</p>


      <div className={styles.optionsContainer}>
        <div className={styles.optionCard}>
          {/* Subtítulo com Yeseva One */}
          <h3 className={`${styles.cardTitle} ${yeseva.className}`}>
            Doar agora!
          </h3>

          {/* Parágrafo do card com Lato */}
          <p className={`${styles.cardDescription} ${lato.className}`}>
            Todo apoio é bem vindo e precisamos de sua ajuda. 
            Você pode ser o responsável pela construção da Maior Sala de Aula do Mundo!
          </p>

          <ul className={styles.featuresList}>
            <li><b>PIX Chave: escola@mariaperegrina.org.br</b></li>
            <li>BANCO DO BRASIL</li>
            <li>Agência: 0475-8</li>
            <li>Conta Corrente: 13757-X</li>
            <li>Associação Missionária Maria Peregrina</li>
            <li>CNPJ: 02.956.029/0001-77</li>
          </ul>

          <button className={styles.ctaButton}>
            <a
              target='_blank'
              className={`${styles.link} ${lato.className}`}
              href="https://wa.link/hygqgj"
            >
              Tire suas dúvidas!
            </a>
          </button>
        </div>

        <div className={styles.optionCard}>
          {/* Subtítulo com Yeseva One */}
          <h3 className={`${styles.cardTitle} ${yeseva.className}`}>
            Você que é empresário
          </h3>

          {/* Parágrafo do card com Lato */}
          <p className={`${styles.cardDescription} ${lato.className}`}>
            Convidamos você, empresário e empresária, que gostaram do projeto, a nos conhecer de perto! 
            Entre em contato conosco pelo celular: (17) 988117301.
          </p>

          <ul className={styles.featuresList}>
            <b><li>A Maior</li></b>
            <b><li>Sala de Aula</li></b>
            <b><li>Do Mundo</li></b>
            <li>Ajude-nos a inquietar o mundo pela educação!</li>
            <li>Tire todas as suas dúvidas, faça uma visita em nossa escola!</li>
            <li>Entre em contato:</li>
          </ul>

          <button className={styles.ctaButton}>
            <a
              target='_blank'
              className={`${styles.link} ${lato.className}`}
              href="https://wa.link/hygqgj"
            >
              Fale conosco!
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Help;
