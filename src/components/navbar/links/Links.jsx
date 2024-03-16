import React from "react";
import Link from "next/link";
import NavLInk from "./navLink/navLInk";
import styles from "./links.module.css";

const Links = () => {
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

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLInk item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLInk item={{ title: "Admin", path: "/admin" }} />}
          <button>Logout</button>
        </>
      ) : (
        <NavLInk item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
