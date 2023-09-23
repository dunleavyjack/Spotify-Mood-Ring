import styles from './services.module.scss';

/* eslint-disable-next-line */
export interface ServicesProps {}

export function Services(props: ServicesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Services!</h1>
    </div>
  );
}

export default Services;
