import { NAVBAR } from '@moodring/shared/theme/text';
import { CustomLink } from '../CustomLink/CustomLink';
import styles from './NavBar.module.scss';

export const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__centered}>{NAVBAR.MOOD_RING}</h1>
      <div className={styles.nav__right}>
        <CustomLink to="/about" displayText={NAVBAR.ABOUT_US} />
      </div>
    </nav>
  );
};
