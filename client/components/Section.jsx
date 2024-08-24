import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from '../styles/Section.module.css';

function CampaignSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Ajuste esse valor conforme necessário
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="conheca" ref={sectionRef} className={styles.missionSection}>
      <div className={styles.quoteTop}></div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.missionTitle}>UMA EDUCAÇÃO TRANSFORMADORA</h3>
        <div className={styles.imageContainer}>
          <div className={`${styles.imageWrapper} ${styles.imageOne}`}>
            <Image
              src="/images/section/section_1.png"
              alt="Image 1"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={`${styles.imageWrapper} ${styles.imageTwo}`}>
            <Image
              src="/images/section/section_2.png"
              alt="Image 2"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={`${styles.imageWrapper} ${styles.imageThree}`}>
            <Image
              src="/images/section/section_3.png"
              alt="Image 3"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        </div>
        <h2 className={styles.mainTitle}>
          A pedagogia Maria Peregrina não exige salas de aula,
          mas apenas UMA ÚNICA SALA!
        </h2>
        <p className={styles.description}>
        A Escola Maria Peregrina está há 18 anos em São José do Rio Preto -SP e tem 20 anos de fundação. Atualmente a escola possui a necessidade de expandir para continuar seu trabalho com o desenvolvimento integral do aluno e transformação da família que é o seu primeiro aluno. Muitos alunos típicos e atípicos teve um alto desenvolvimento devido à única sala de aula: o pátio pedagógico. Por isso, temos a necessidade em construir uma nova sala de aula mais ampla e mais avançada, a fim de melhor atender nossos alunos.  
        </p>
      </div>
    </section>
  );
}

export default CampaignSection;
