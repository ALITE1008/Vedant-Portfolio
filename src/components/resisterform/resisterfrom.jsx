"use client";

import { register } from "@/lib/action";
import styles from "./resisterform.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Resisterfrom() {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.from} action={formAction}>
      <input type="text" placeholder="Username" name="username" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <input
        type="password"
        placeholder="Repeat Password"
        name="passwordRepeat"
        required
      />
      <button>Resister</button>
      <span className={styles.label}>{state?.error}</span>
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
}

export default Resisterfrom;
