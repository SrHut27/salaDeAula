import styles from '../styles/Help.module.css';

const Help = () => {
  return (
    <section id='comoajudar' className={styles.helpSection}>
      <h2 className={styles.sectionTitle}>Faça parte desse projeto!</h2>
      <h1 className={styles.mainTitle}>Precisamos da sua ajuda</h1>
      <p className={styles.description}>
        Se você gostou desse projeto e gostaria de fazer parte dele{' '}
        <a href="#comoajudar">Faça sua contribuição!</a> 
        <br />
        No instagram @missoes.mariaperegrina @escolamariaperegrina.sjrp
        Você vai acompanhar todo projeto e as etapas de construção.
      </p>


      <div className={styles.optionsContainer}>
        <div className={styles.optionCard}>
          <h3 className={styles.cardTitle}>Doar agora!</h3>
          <p className={styles.cardDescription}>
            Todo apoio é bem vindo e precisamos de sua ajuda. Você pode ser o responsável pela construção da Maior Sala de Aula do Mundo!
          </p>
          <ul className={styles.featuresList}>
            <li> <b> PIX Chave: escola@mariaperegrina.org.br</b></li>
            <li>BANCO DO BRASIL</li>
            <li>Agência: 0475-8</li>
            <li>Conta Corrente: 13757-X</li>
            <li>Associação Missionária Maria Peregrina </li>
            <li>CNPJ: 02.956.029/0001-77 </li>
          </ul>
          <button className={styles.ctaButton}><a target='_blank' className={styles.link} href="https://wa.link/hygqgj">Tire suas dúvidas!</a></button>
        </div>
        <div className={styles.optionCard}>
          <h3 className={styles.cardTitle}>Você que é empresário</h3>
          <p className={styles.cardDescription}>
            Convidamos você, empresário e empresária, que gostaram do projeto, a nos conhecer de perto! Entre em contato conosco pelo celular: (17) 988117301.
          </p>
          <ul className={styles.featuresList}>
            <b><li>A Maior</li></b>
            <b><li>Sala de Aula</li></b>
            <b><li>Do Mundo</li></b>
            <li>Ajude-nos a inquietar o mundo pela educação!</li>
            <li>Tire todas as suas dúvidas, faça uma visita em nossa escola!</li>
            <li>Entre em contato:</li>
          </ul>
          <button className={styles.ctaButton}><a target='_blank' className={styles.link} href="https://wa.link/hygqgj">Fale conosco!</a></button>
        </div>
      </div>
    </section>
  );
};

export default Help;
