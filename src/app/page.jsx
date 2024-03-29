import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.maincon}>
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
        <div className={styles.headskills}>
          <h2>Skills</h2>
        </div>
        <div className={styles.skills2}>
          <Image
            src="/html.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/css.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/js.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/node-js.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/express.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/react.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/tailwind.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/logo-sm.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/mongodb.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/ts.png"
            alt=""
            height={50}
            width={50}
            className={styles.skillicon}
          ></Image>
          <Image
            src="/git.png"
            alt=""
            height={50}
            width={60}
            className={styles.skillicon}
          ></Image>
        </div>
        <div className={styles.imgcontainer}>
          <Image
            src="/mainIconsdark.svg"
            alt=""
            fill
            className={styles.img}
          ></Image>
        </div>
      </div>

      <div className={styles.skills}>
        <Image src="/html.png" alt="" height={40} width={40}></Image>
        <Image src="/css.png" alt="" height={40} width={40}></Image>
        <Image src="/js.png" alt="" height={40} width={40}></Image>
        <Image src="/node-js.png" alt="" height={50} width={40}></Image>
        <Image src="/express.png" alt="" height={40} width={40}></Image>
        <Image src="/react.png" alt="" height={40} width={40}></Image>
        <Image src="/tailwind.png" alt="" height={40} width={40}></Image>
        <Image src="/logo-sm.png" alt="" height={40} width={40}></Image>
        <Image src="/mongodb.png" alt="" height={50} width={40}></Image>
        <Image src="/ts.png" alt="" height={40} width={40}></Image>
        <Image src="/git.png" alt="" height={60} width={60}></Image>
      </div>
    </div>
  );
}
