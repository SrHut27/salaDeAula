import React from 'react';
import styles from '../styles/Features.module.css';
import Image from "next/image";

const Features = () => {
    return (
        <section id='sala' className={styles.features_section}>
            <div className={styles.background}></div>
            <div className={styles.features_content}>
                {/* Coluna 1 */}
                <div className={styles.column}>
                    <div className={styles.text_title}>
                        <span className={styles.column1_title}>ENTENDA O PROJETO</span>
                    </div>
                    <div className={styles.text_content}>
                        Entenda um pouco sobre a estrutura e mais sobre a funcionalidade da maior sala de aula do mundo.
                    </div>
    
                </div>

                {/* Coluna 2 */}
                <div className={styles.column}>
                    <div className={styles.text_content}>
                    Com 1.300 m2, maximizará o potencial de transformação na vida dos jovens, crianças e suas famílias na comunidade. Contando com um enorme palco para palestras, teatros e dança, haverá também, uma praça de alimentação, com uma cozinha-restaurante e um avançado complexo de salas de música. Agregando ao projeto a Maior Sala de Aula do Mundo haverá também um amplo conjunto de
                    banheiros-vestiários para nossas atividades esportivas como judô, jazz, Mountain Bike e educação física, sem contar nossos eventos que particularmente proporcionamos.
                    </div>
                    <div className={styles.text_title}>
                        <span className={styles.line1}>A MAIOR</span> <br />
                        <span className={styles.line2}>SALA</span> <br />
                        <span className={styles.line3}>DE AULA</span> <br />
                        <span className={styles.line4}>DO MUNDO</span>
                    </div>
                </div>

                {/* Coluna 3 */}
                <div className={styles.column}>
                    <div className={styles.column_image}>
                        <Image 
                            src="/images/features/predio.jpg" 
                            alt="Imagem Coluna 3" 
                            width={150} 
                            height={150} 
                            layout="responsive" 
                            className={styles.rounded_image}
                        />
                    </div>
                    <div className={styles.text_title_right}>
                        <span className={styles.line1}>MEZA</span> <br />
                        <span className={styles.line1}>NINO</span>
                    </div>
                    <div className={styles.text_content_right}>
                        Teatro <br />
                        Sala de Música <br />
                        Restaurante <br />
                        Cozinha <br />
                        Vestiário esportivo
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
