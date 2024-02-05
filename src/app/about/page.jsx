import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About page  ",
  description: "about me",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textcon}>
        <h2 className={styles.title}>About </h2>
        <h3 className={styles.subtitle}>Who i am?</h3>
        <p className={styles.desc}>
          There are many people living in world having different personalities.
          This is the personality which makes everyone unique and different from
          others. We can never see two people of exactly same personality. It
          never changes and decided the quality of a person. I am taking the
          example of me. I am so special in this world and have unique
          personality than others. I am very responsible and sympathetic person.
          I always help others and try my best to solve their problems. I am
          self-centred man have not have any enemy in this world. I always talk
          to others very happily with smiling face. I am a very simple student
          in my school and attend each class. I try my best to keep up with this
          world as daily i feel left behind.
        </p>
      </div>
      <div className={styles.imgcon}>
        <Image
          src="/about.png"
          alt=""
          height={400}
          width={450}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
