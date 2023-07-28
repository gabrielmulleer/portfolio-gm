import Social from '../main/intro/social';
import social from '../main/intro/social/social.json';
import styles from './Footer.module.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>Copyright@2023.</p>
      <span>
        <FaLinkedin size={30} />
        <FaGithub size={30} />
        {/* {social.map((item)=>{
              return <Social key={item.id} {...item}/>
          })} */}
      </span>
    </footer>
  );
}
