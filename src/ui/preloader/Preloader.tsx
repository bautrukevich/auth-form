import styles from "./preloader.module.css";

export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__container}>
        <span className={styles.preloader__round} />
      </div>
    </div>
  );
};
