"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLInk from "./navLink/navLInk";
import styles from "./links.module.css";

const links = [
  {
    title: "Homepage",
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
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLInk item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLInk item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLInk item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <button className={styles.menu} onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLInk item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
