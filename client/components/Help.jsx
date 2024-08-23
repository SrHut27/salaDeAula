import styles from '../styles/Help.module.css';

const Help = () => {
  return (
    <section id='comoajudar' className={styles.helpSection}>
      <h2 className={styles.sectionTitle}>Faça parte desse projeto!</h2>
      <h1 className={styles.mainTitle}>Precisamos da sua ajuda</h1>
      <p className={styles.description}>
        Se você gostou desse projeto e gostaria de fazer parte dele{' '}
        <a href="844-283-4530">Clique aqui</a> e faça sua doação!
      </p>
      <div className={styles.optionsContainer}>
        <div className={styles.optionCard}>
          <img src="/images/instant_workspace.png" alt="Instant Workspace" className={styles.icon} />
          <h3 className={styles.cardTitle}>Instant Workspace</h3>
          <p className={styles.cardDescription}>
            Best for everyone. Simply search our network, find a workspace, and make your reservation, instantly.
          </p>
          <ul className={styles.featuresList}>
            <li>On-demand hot desks</li>
            <li>Meeting rooms</li>
            <li>Private offices</li>
            <li>Pay-as-you-go</li>
            <li>No commitment</li>
          </ul>
          <button className={styles.ctaButton}>Find a Space</button>
        </div>
        <div className={styles.optionCard}>
          <img src="/images/deskpass_teams.png" alt="Deskpass Teams" className={styles.icon} />
          <h3 className={styles.cardTitle}>Você que é empresário</h3>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio soluta eos maiores, voluptatibus reprehenderit error et impedit officiis quas veniam voluptatem velit corporis vel, perspiciatis perferendis placeat suscipit minus.
          </p>
          <ul className={styles.featuresList}>
            <li>Everything in Instant Workspace +</li>
            <li>Utilization based pricing</li>
            <li>Admin dashboard with budget controls</li>
            <li>Consolidated billing</li>
            <li>Live reporting and usage insights</li>
          </ul>
          <button className={styles.ctaButton}><a href=""></a>Fale conosco</button>
        </div>
      </div>
    </section>
  );
};

export default Help;
