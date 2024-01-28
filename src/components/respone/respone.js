"use client";

import { useFormState } from "react-dom";
import { Response } from "@/lib/action";
import styles from './respone.module.css'

function Responecmp() {

    const [state, formAction] = useFormState(Response, undefined);

    return (
        <>
            <form action={formAction} className={styles.form}>
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
            {state?.error}
        </>
    )
}

export default Responecmp