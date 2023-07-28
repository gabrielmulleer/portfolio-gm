import styles from './Project.module.scss';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function Project(props) {
  const { titulo, descricao, stacks, links, img, direction } = props;
  const stack = [...stacks];
  const link = [links];
  return (
    <div dir={direction} className={styles.container}>
      <div className={styles.container__img}>
        <a href=''>
          <img src={img}></img>
        </a>
      </div>

      <div className={styles.container__info}>
        <h3>{titulo}</h3>
        <p className={styles.container__info_description}>{descricao}</p>
        <div className={styles.container__info_stacks}>
          {stack.map((item) => (
            <p key={item.toString()}>{item}</p>
          ))}
        </div>
        <div className={styles.container__info_links}>
          <a href={links[0]}>
            Code <FaGithub />
          </a>
          <a href={links[1]}>
            Live Site <FaArrowUpRightFromSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
