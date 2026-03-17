"use client";

import React, { useEffect, useRef } from "react";

export default function Footer1() {
  const headingRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const headings = headingRefs.current;

    const toggleOpen = (event: Event) => {
      if (window.innerWidth < 992) {
        const target = event.target as HTMLElement;
        const parent = target.closest<HTMLElement>(".footer-col-block");
        if (!parent) return;

        const content = parent.querySelector<HTMLElement>(
          ".tf-collapse-content"
        );
        if (!content) return;

        if (parent.classList.contains("open")) {
          parent.classList.remove("open");
          content.style.height = "0px";
        } else {
          parent.classList.add("open");
          content.style.height = content.scrollHeight + 10 + "px";
        }
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []);

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-body">
              <div className="footer-left">
                <div className="footer-infor flex-grow-1">
                  <div className="footer-phone-number">
                    <h4 className="text_white number">
                      <a href="tel:+79009780768" className="text_white">+7 900 978-07-68</a>
                    </h4>
                    <h4 className="text_white mail">
                      <a href="mailto:support@hittashop.ru" className="text_white">support@hittashop.ru</a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="footer-newsletter">
                <div className="footer-menu">
                  <div className="footer-col-block">
                    <h5
                      ref={(el) => {
                        if (el) headingRefs.current[0] = el;
                      }}
                      className="footer-heading text_white footer-heading-mobile"
                    >
                      Документы
                    </h5>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        {[
                          ["Публичная оферта", "/documents/Публичная оферта hittashop.pdf"],
                          ["Политика обработки персональных данных", "/documents/Политика обработки персональных данных.pdf"],
                          ["Согласие на обработку персональных данных", "/documents/Согласие на обработку персональных данных.pdf"],
                          ["Правила возврата и рекламации", "/documents/Правила возврата товара и рассмотрения рекламаций.pdf"],
                        ].map(([label, href], j) => (
                          <li className="text-body-default" key={j}>
                            <a
                              href={href}
                              className="link footer-menu_item"
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="tf-social-icon type-2">
                  <li>
                    <a href="#" className="social-vk" style={{ display: "flex", alignItems: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-telegram" style={{ display: "flex", alignItems: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-wrap">
                <div className="left">
                  <p className="text-body-default text_white">
                    © 2025 Hitta. Все права защищены.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
