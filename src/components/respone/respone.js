"use client";

import { useFormState } from "react-dom";
import { Response } from "@/lib/action";
import styles from './respone.module.css'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Responecmp() {

    const [state, formAction] = useFormState(Response, undefined);
    const router = useRouter();
    useEffect(() => {
        state?.success && router.push('/');
    }, [state?.success, router]);

    return (
        <>
            <form action={formAction} className={styles.form}>
                {state?.success}
                {state?.error}
                <input type="text" placeholder="Full Name" name="name" required />
                <input type="email" placeholder="Email" name="email" required />
                <input type="text" placeholder="Phone Number (optional)" name="phone" />
                <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required
                ></textarea>
                <button className={styles.btn}>Sent</button>
            </form>
        </>
    )
}

export default Responecmp