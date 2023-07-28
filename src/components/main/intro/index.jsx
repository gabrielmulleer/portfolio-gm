import Stacks from './stacks';
import styles from './Intro.module.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Intro() {
  return (
    <section id='home' className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container_picture}></div>
        <div className={styles.wrapper__container_content}>
          <h1 className={styles.wrapper__container_content_title}>
            Fullstack Developer Jr.
          </h1>
          <p className={styles.wrapper__container_content_description}>
            Bem-vindo(a) ao meu portfólio! Sou Gabriel, um desenvolvedor
            Fullstack Jr. apaixonado por tecnologia, buscando compartilhar minha
            jornada e projetos que refletem minha dedicação e habilidades em
            criar soluções inovadoras
          </p>
          <span>
            <a
              aria-label='linkedin'
              href='https://www.linkedin.com/in/gabrielmulleer'
              rel='noreferrer'
              target='_blank'
            >
              <FaLinkedin size={40} />
            </a>
            <a
              aria-label='github'
              href='https://github.com/gabrielmulleer/'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={40} />
            </a>
          </span>
        </div>
      </div>

      <Stacks />
    </section>
  );
}
