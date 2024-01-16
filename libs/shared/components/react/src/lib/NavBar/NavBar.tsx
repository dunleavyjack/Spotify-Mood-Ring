import { NAVBAR } from '@moodring/shared/theme/text';
import { CustomLink } from '../CustomLink/CustomLink';
import styles from './NavBar.module.scss';

export const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <h1>{NAVBAR.MOOD_RING}</h1>
      <div>
        <CustomLink to="/about" displayText={NAVBAR.ABOUT_US} />
      </div>
    </nav>
  );
};
