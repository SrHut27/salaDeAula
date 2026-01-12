import Image from "next/image";
import styles from '../styles/PosSection.module.css';
import { Yeseva_One } from 'next/font/google';

// Importando a fonte Yeseva One
const yeseva = Yeseva_One({
  subsets: ['latin'],
  weight: '400', // único peso disponível
});

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
        
        {/* Aqui aplicamos Yeseva One no título */}
        <h2 className={`${styles.title} ${yeseva.className}`}>
          A maior sala de aula não é apenas um grande lugar. É o lugar para caber a todos!
        </h2>
        
        <p className={styles.description}>
          Pensado para acolher alunos da educação infantil e básica, as aulas de música, esporta e cultura, a maior sala de aula do mundo é um espaço para todos e para além da imaginação.
        </p>

        <div className={styles.links}>
          <a href="#comoajudar" className={styles.link}>
            Você pode fazer parte dessa construção!
          </a>
        </div>
      </div>
    </section>
  );
}

export default PosSection;
