import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logom}>Vedant Navale</div>
      <div className={styles.desc}>© All rigths reserved</div>
    </div>
  );
};

export default Footer;
