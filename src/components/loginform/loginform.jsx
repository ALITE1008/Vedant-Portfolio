"use client";

import styles from "./loginform.module.css";
import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import Link from "next/link";

const Loginform = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <>
      <form className={styles.from} action={formAction}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
        {state?.error}
        <Link href="/resister">
          {"Don't have an account?"} <b>Register</b>
        </Link>
      </form>
    </>
  );
};

export default Loginform;
