import Responecmp from "@/components/respone/respone";
import styles from "./contact.module.css";
import Image from "next/image";

export const metadata = {
  title: " Contact Page page",
  description: "projects",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Responecmp />
      <div className={styles.imgcontainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default ContactPage;
