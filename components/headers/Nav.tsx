"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavProps = {
  textColor?: string;
};

type MenuLink = {
  href: string;
  label: string;
};

const navLinks: MenuLink[] = [
  { href: "/", label: "ГЛАВНАЯ" },
  { href: "/shop-list", label: "МАГАЗИН" },
  { href: "/blog-grid", label: "БЛОГ" },
  { href: "/contact", label: "КОНТАКТЫ" },
];

export default function Nav({ textColor = "" }: NavProps) {
  const pathname = usePathname();

  const isMenuActive = (link: MenuLink) => {
    return link.href.split("/")[1] === pathname.split("/")[1];
  };

  return (
    <>
      {navLinks.map((link) => (
        <li className="menu-item" key={link.href}>
          <Link
            href={link.href}
            className={`item-link ${isMenuActive(link) ? "active" : ""} ${textColor}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
