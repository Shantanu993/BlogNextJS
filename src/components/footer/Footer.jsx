import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SG993</div>
      <div className={styles.text}>SG993 © All rights reserved.</div>
    </div>
  );
};

export default Footer;
