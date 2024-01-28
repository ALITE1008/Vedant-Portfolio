"use client";
import { useState } from "react";
import styles from "./links.module.css";
import Navlinks from "./navLinks/navlinks";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const Links = ({ session }) => {
  const [open, setopen] = useState(false);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Projects",
      path: "/blog",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <Navlinks items={link} key={link.title} />;
        })}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <Navlinks items={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.active}>Logout</button>
            </form>
          </>
        ) : (
          <Navlinks items={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt=""
        height={30}
        width={30}
        onClick={() => setopen((prev) => !prev)}
        className={open ? styles.btn2 : styles.btn}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => {
            return <Navlinks items={link} key={link.title} />;
          })}
          {session ? (
            <>
              {isAdmin && (
                <Navlinks items={{ title: "Admin", path: "/admin" }} />
              )}
              <button className={styles.active}>Logout</button>
            </>
          ) : (
            <Navlinks items={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
