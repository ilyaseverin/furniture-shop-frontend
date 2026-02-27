"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type MenuLink = {
  href: string;
  label: string;
};

const mobileNavLinks: MenuLink[] = [
  { href: "/", label: "Главная" },
  { href: "/shop-list", label: "Магазин" },
  { href: "/blog-grid", label: "Блог" },
  { href: "/contact", label: "Контакты" },
];

export default function MobileMenu() {
  const pathname = usePathname();

  const isMenuActive = (link: MenuLink) => {
    return link.href.split("/")[1] === pathname.split("/")[1];
  };

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Закрывать"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            {mobileNavLinks.map((link) => (
              <li
                key={link.href}
                className={`nav-mb-item ${isMenuActive(link) ? "active" : ""}`}
              >
                <Link href={link.href} className="mb-menu-link">
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
