import Image from "next/image";
import styles from '../styles/PosSection.module.css';

function PosSection() {
  return (
    <section id="amaiorsala" className={styles.posSection}>
      <div className={styles.leftContent}>
        <div className={styles.backgroundImage}>
          <Image 
            src="/images/possection/bg-variety.png" 
            alt="Background Image" 
            layout="responsive" 
            width={500} 
            height={500} 
          />
        </div>
      </div>
      <div className={styles.rightContent}>
        <h3 className={styles.subtitle}>Uma única sala para todos!</h3>
        <h2 className={styles.title}>A maior sala de aula não é apenas um grande lugar. É um lugar para caber a todos!</h2>
        <p className={styles.description}>
          Pensado em acolher alunos da educação básica, música, esporte, cultura... um espaço para todos. Para além da imaginação!
        </p>
        <div className={styles.links}>
          <a href="#comoajudar" className={styles.link}>E você pode fazer parte dessa construção!</a>
        </div>
      </div>
    </section>
  );
}

export default PosSection;
