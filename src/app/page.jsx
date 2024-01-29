import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h1 className={styles.title}>Hi!</h1>
        <h1 className={styles.title}>I am Vedant Mohan Navale </h1>
        <h1 className={styles.title}>Full Stack Web Developer</h1>
        <p className={styles.desc}></p>
        <div className={styles.buttons}>
          <Link href="/blog">
            <button className={styles.button}>Projects</button>
          </Link>
          <Link href="/contact">
            <button className={styles.button2}>Contact</button>
          </Link>
        </div>
        <div className={styles.brand}>
          <div>
            <Link href="https://www.linkedin.com/in/vedant-navale-062067257/">
              <Image
                src="/linkedin_logo.jpeg"
                alt=""
                height={30}
                width={30}
              ></Image>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/ALITE1008">
              <Image
                src="/github-mark-white.png"
                alt=""
                height={30}
                width={30}
              ></Image>
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/v_vedant_n/">
              <Image
                src="/Instagram_Glyph_Gradient.png"
                alt=""
                height={30}
                width={30}
              ></Image>
            </Link>
          </div>
          <div>
            <Link href="https://flowcv.com/resume/i713864qvs">
              <Image
                src="/icons8-resume-64.png"
                alt=""
                height={40}
                width={40}
              ></Image>
            </Link>
          </div>
          <div>
            <Link href="https://www.codechef.com/users/navalevedant31">
              <Image
                src="/icons8-codechef.svg"
                alt=""
                height={40}
                width={40}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.imgcontainer}>
        <Image src="/hero.gif" alt="" fill className={styles.img}></Image>
      </div>
    </div>
  );
}
