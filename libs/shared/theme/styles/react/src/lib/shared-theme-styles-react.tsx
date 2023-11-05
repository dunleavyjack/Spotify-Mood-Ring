import styles from './shared-theme-styles-react.module.scss';

/* eslint-disable-next-line */
export interface SharedThemeStylesReactProps {}

export function SharedThemeStylesReact(props: SharedThemeStylesReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedThemeStylesReact!</h1>
    </div>
  );
}

export default SharedThemeStylesReact;
