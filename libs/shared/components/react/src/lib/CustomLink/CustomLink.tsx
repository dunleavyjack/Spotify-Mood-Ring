import { Link } from 'react-router-dom';
import styles from './CustomLink.module.scss';

type CustomLinkProps = {
  to: string;
  displayText: string;
};

export const CustomLink = ({
  to,
  displayText,
}: CustomLinkProps): JSX.Element => {
  return (
    <Link to={to} className={styles.link}>
      {displayText}
    </Link>
  );
};
