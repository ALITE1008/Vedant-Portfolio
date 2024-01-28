import Resisterfrom from "@/components/resisterform/resisterfrom";
import styles from "./resister.module.css";

const ResisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Resisterfrom />
      </div>
    </div>
  );
};

export default ResisterPage;
