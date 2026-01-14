import styles from "../styles/NovoSection.module.css";
import Image from "next/image";


export default function NovoSection() {
  return (
    <section className={styles.novaSection}>
      {/* Coluna esquerda: carrossel */}
      <div className={styles.carousel}>
        {/* Aqui você pode colocar o componente de carrossel */}
          <Image src="/images/mosaico1.png" // coloque suas imagens na pasta public/images 
          alt="Foto 1" 
          width={900} 
          height={500} />
      </div>

      {/* Coluna direita: texto */}
      <div className={styles.content}>
        <h1>1ª Etapa - Concluída</h1>
        <h3>Você faz parte desse progresso!</h3>
        <p>
          A 1ª etapa de construção da Maior Sala de Aula do Mundo consistiu na
          fundação, elevação dos pilares e cobertura desse espaço pensado para
          acolher a todos!
        </p>
        <p>
          Com esse avanço, alcançamos 35% do nosso projeto, temos um espaço
          coberto e seguro para promover uma educação inovadora.
        </p>
        <p>
          Mas ainda estamos em construção, você pode nos ajudar a transformar
          esse espaço?
        </p>
      </div>
    </section>
  );
}
