import React from "react";
import styles from "./navLink.module.css";
import Link from "next/link";

const NavLInk = ({ item }) => {
  return (
    <Link href={item.path} key={item.path} className={styles.navLink}>
      {item.title}
    </Link>
  );
};

export default NavLInk;
