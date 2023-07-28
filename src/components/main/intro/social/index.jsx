import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Social(props) {
  const { title, icone, link, id } = props;

  return (
    <a
      aria-label={title.toLowerCase()}
      href={link}
      rel='noreferrer'
      target='_blank'
    >
      <FontAwesomeIcon icon={solid('play')} />
    </a>
  );
}
