import styles from './Contact.module.scss';
import { FaEnvelopeOpenText, FaLinkedin } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section id='contact' className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h3 className={styles.wrapper__container_title}>Contato</h3>
        <h2>Entre em contato comigo!</h2>
        <div className={styles.wrapper__container_networks}>
          <div className={styles.wrapper__container_networks_icons}>
            <span>
              <FaLinkedin size={40} />
            </span>
            <div>
              <h3>Linkedin</h3>
              <a href='https://www.linkedin.com/in/gabrielmulleer/'>
                @gabrielmulleer
              </a>
            </div>
          </div>
          <div className={styles.wrapper__container_networks_icons}>
            <span>
              <FaEnvelopeOpenText size={40} />
            </span>
            <div>
              <h3>Email</h3>
              <a href='mailto:contatodegabrielm@gmail.com'>
                contatodegabrielm@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
