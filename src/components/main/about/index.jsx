import styles from './About.module.scss';

export default function About() {
  return (
    <section id='about' className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container_img}>
          <img src='/assets/img/about.jpg' alt='' />
        </div>
        <div className={styles.wrapper__container_content}>
          <h3>About Me</h3>
          <h2>Um desenvolvedor Fullstack Jr. com sede de conhecimento!</h2>
          <p>
            Formado pelo{' '}
            <a href='https://desenvolve.grupoboticario.com.br/'>
              Programa Desenvolve
            </a>{' '}
            na trilha de Fullstack, possuo habilidades em <strong>HTML</strong>,{' '}
            <strong>CSS</strong>, <strong>Javascript</strong>,{' '}
            <strong>React</strong>, <strong>Sass</strong>, conhecimentos de{' '}
            <strong>Typescript</strong>, <strong>Jest</strong>,{' '}
            <strong>Banco de dados relacional e não relacional</strong>. Minhas
            competências incluem trabalho em equipe, dedicação, proatividade,
            organização, resolução de problemas, entre outras. Sempre em busca
            de novos desafios e aprendizados, estou comprometido em entregar
            resultados de qualidade e contribuir para o crescimento de projetos
            e equipes. Vamos juntos em busca de novas conquistas
          </p>
        </div>
      </div>
    </section>
  );
}
