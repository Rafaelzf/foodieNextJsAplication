import styles from "./loading-out.module.css";
function mealsLoading() {
  return <p className={styles.loading}>Fetching meals...</p>;
}

export default mealsLoading;
