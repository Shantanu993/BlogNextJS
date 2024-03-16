import React from "react";
import Link from "next/link";
import NavLInk from "./navLink/navLInk";

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

  return (
    <div>
      {links.map((link) => (
        <NavLInk item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
