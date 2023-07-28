import styles from './Menu.module.scss';
import { FaX } from 'react-icons/fa6';
import classNames from 'classnames';

export default function Menu({ active }) {
  const closeSideBar = () => {
    active(false);
  };
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__dropdown}>
        <li onClick={closeSideBar}>
          <a href='#home'>Home</a>
        </li>
        <li onClick={closeSideBar}>
          <a href='#about'>About</a>
        </li>
        <li onClick={closeSideBar}>
          <a href='#projects'>Projetos</a>
        </li>
        <li onClick={closeSideBar}>
          <a href='#contact'>Contato</a>
        </li>
      </ul>
      <div className={styles.menu__icon}>
        <FaX size={36} onClick={closeSideBar} />
      </div>
    </nav>
  );
}
