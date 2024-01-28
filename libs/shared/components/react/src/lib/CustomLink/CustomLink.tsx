import { Link } from 'react-router-dom';
import styles from './CustomLink.module.scss';

type CustomLinkProps = {
  to: string;
  displayText: string;
};

export function CustomLink({ to, displayText }: CustomLinkProps) {
  return (
    <Link to={to} className={styles.link}>
      {displayText}
    </Link>
  );
}
