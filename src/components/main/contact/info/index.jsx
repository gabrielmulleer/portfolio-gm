import styles from "./Info.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
// import {FaLinkedin, FaEnvelope} from 'react-icons/fa6'

export default function Networks(props){
  const {title, link, alias, icone} = props
    return (
        <div className={styles.wrapper}>
        <span>
        <FontAwesomeIcon icon={brands("linkedin")} />
        </span>
        <div>
            <h3>{title}</h3>
            <a href={link}>{alias}</a>
        </div>
        </div>
    )
}