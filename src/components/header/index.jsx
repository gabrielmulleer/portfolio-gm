import Menu from './menu';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [active, setActive] = useState(false);
  const [isVisible, setVisible] = useState(window.innerWidth >= 900);

  // adiciona um escutador de eventos para identificar a largura da tela
  useEffect(() => {
    const attVisible = () => {
      setVisible(window.innerWidth >= 900);
    };
    window.addEventListener('resize', attVisible);
    return () => {
      window.removeEventListener('resize', attVisible);
    };
  }, []);

  // altera o meu state ao clicar no botão do menu
  const showSideBar = () => {
    setActive(!active);
  };

  return (
    <header className={styles.wrapper}>
      <h3 className={styles.wrapper__title}>Gabriel.M</h3>
      <FaBars size={36} onClick={showSideBar} />
      {(isVisible || active) && <Menu active={setActive} />}
    </header>
  );
}
