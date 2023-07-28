import Project from './project';
import styles from './Portfolio.module.scss';
export default function Portfolio() {
  return (
    <section id='projects' className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h3 className={styles.wrapper__container_title}>Portifolio</h3>
        <h2>Cada projeto é uma peça única de desenvolvimento</h2>
        <div className={styles.wrapper__container_projects}>
          <Project
            direction='ltr'
            img='https://source.unsplash.com/random/300x300?r=1'
            titulo='Projeto 1'
            descricao='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi culpa doloribus adipisci. Aperiam, culpa corporis? Asperiores voluptate natus est molestiae consectetur, totam officiis rem aut molestias nam repudiandae officia accusantium!'
            stacks={['HTML', 'CSS', 'JavaScript']}
            links={['https://github.com/gabrielmulleer/', '#']}
          />
          <Project
            direction='rtl'
            img='https://source.unsplash.com/random/300x300?r=2'
            titulo='Projeto 2'
            descricao='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi culpa doloribus adipisci. Aperiam, culpa corporis? Asperiores voluptate natus est molestiae consectetur, totam officiis rem aut molestias nam repudiandae officia accusantium!'
            stacks={['ReactJs', 'TypeScript']}
            links={['https://github.com/gabrielmulleer/', '#']}
          />
        </div>
      </div>
    </section>
  );
}
