import React from "react";
import styles from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLInk = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      key={item.path}
      className={`${styles.navLink} ${
        pathName === item.title && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLInk;
