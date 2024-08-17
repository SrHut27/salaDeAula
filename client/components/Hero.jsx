import styles from "../styles/Hero.module.css";
import Image from "next/image";

const Hero = () => {
    const points = Array.from({ length: 60 });

    return (
        <div className={styles.body}>
            {points.map((_, index) => {
                const sizeClass = index % 3 === 0 ? styles.large : index % 3 === 1 ? styles.medium : styles.small;
                const colorClass = index % 4 === 0 ? styles.white : styles.brown;
                const topPosition = `${Math.random() * 100}%`;
                const leftPosition = `${Math.random() * 100}%`;
                const animationDuration = `${10 + Math.random() * 20}s`;

                return (
                    <div
                        key={index}
                        className={`${styles.point} ${sizeClass} ${colorClass}`}
                        style={{ top: topPosition, left: leftPosition, animationDuration }}
                    ></div>
                );
            })}

            <div className={styles.heroKidContainer}>
                <div className={styles.heroText}>
                    <span className={styles.line1}>A maior</span><br />
                    <span className={styles.line2}>sala de aula</span><br />
                    <span className={styles.line3}>do mundo</span>
                </div>
                <Image 
                    src="/images/hero_kid.png"
                    alt="Hero Kid" 
                    className={styles.heroKid}
                    layout="intrinsic" 
                    objectFit="contain"
                    width={500}  
                    height={500}
                />
                <Image 
                    src="/images/hero_foguetinho.png"
                    alt="Hero Foguetinho" 
                    className={styles.heroFoguetinho}
                    layout="intrinsic" 
                    objectFit="contain"
                    width={150}  
                    height={150}
                />
            </div>
        </div>
    );
};

export default Hero;
