import styles from "../styles/Hero.module.css";
import Image from "next/image";

const Hero = () => {
    const points = Array.from({ length: 120 });

    return (
        <div id="hero" className={styles.body}>
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
             <div className={styles.heroPhrases}>
                <div className={styles.heroPhrase1}>Para caber o mundo todo</div>
                <div className={styles.heroPhrase2}><a className={styles.heroPhrase2} href="#comoajudar">Ajude-nos a inquietar o mundo<br />pela educação!</a></div>
            </div>
            <div className={styles.heroKidContainer}>
                <div className={styles.heroText}>
                    <span className={styles.line1}>A maior</span><br />
                    <span className={styles.line2}>sala de aula</span><br />
                    <span className={styles.line3}>
                        do mundo
                        <span className={styles.starAndRocketContainer}>
                            {/* Add star images with pulsating animation */}
                            <Image
                                src="/images/hero_star.png"
                                alt="Hero Star 1"
                                className={`${styles.heroStar} ${styles.star1}`}
                                layout="intrinsic"
                                objectFit="contain"
                                width={25}
                                height={25}
                            />
                            <Image
                                src="/images/hero_star.png"
                                alt="Hero Star 2"
                                className={`${styles.heroStar} ${styles.star2}`}
                                layout="intrinsic"
                                objectFit="contain"
                                width={25}
                                height={25}
                            />
                            <Image
                                src="/images/hero_star.png"
                                alt="Hero Star 3"
                                className={`${styles.heroStar} ${styles.star3}`}
                                layout="intrinsic"
                                objectFit="contain"
                                width={25}
                                height={25}
                            />
                            <Image 
                                src="/images/hero_foguetinho.png"
                                alt="Hero Foguetinho" 
                                className={styles.heroFoguetinho}
                                layout="intrinsic" 
                                objectFit="contain"
                                width={50}  
                                height={50}
                            />
                        </span>
                    </span>
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
            </div>
            <Image
                src="/images/hero_lua.png"
                alt="Hero Lua"
                className={styles.heroLua}
                layout="intrinsic"
                objectFit="contain"
                width={100}
                height={100}
            />
            <Image
                src="/images/hero_planet.png"
                alt="Hero Planet"
                className={styles.heroPlanet}
                layout="intrinsic"
                objectFit="contain"
                width={100}
                height={100}
            />

        </div>
    );
};


export default Hero;
