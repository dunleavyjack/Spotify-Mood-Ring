import { NAVBAR_TEXT } from '@moodring/shared/theme/text';
import { CustomLink } from '../CustomLink/CustomLink';
import styles from './NavBar.module.scss';

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <h1>{NAVBAR_TEXT.MOOD_RING}</h1>
      <div>
        <CustomLink to="/about" displayText={NAVBAR_TEXT.ABOUT_US} />
      </div>
    </nav>
  );
}
