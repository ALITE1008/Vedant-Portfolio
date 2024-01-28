import Loginform from "@/components/loginform/loginform";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.btn}>
            <Image src="/git.png" height={50} width={50} alt=""></Image>Login
            With github
          </button>
        </form>
        <Loginform />
      </div>
    </div>
  );
};

export default LoginPage;
