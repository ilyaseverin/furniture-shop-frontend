"use client";

import Link from "next/link";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CurrencySelect from "../common/CurrencySelect";
import axios from "axios";

export default function Footer1() {
  const [success, setSuccess] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const headingRefs = useRef<HTMLHeadingElement[]>([]);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        { email }
      );

      if ([200, 201].includes(response.status)) {
        form.reset();
        setSuccess(true);
        handleShowMessage();
      } else {
        setSuccess(false);
        handleShowMessage();
      }
    } catch (error) {
      console.error(
        "Error:",
        axios.isAxiosError(error) ? error.response?.data : "Произошла ошибка"
      );
      setSuccess(false);
      handleShowMessage();
      form.reset();
    }
  };

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
                  <div className="footer-menu">
                    {["Информация", "Обслуживание клиентов"].map((heading, i) => (
                      <div className="footer-col-block" key={i}>
                        <h5
                          ref={(el) => {
                            if (el) headingRefs.current[i] = el;
                          }}
                          className="footer-heading text_white footer-heading-mobile"
                        >
                          {heading}
                        </h5>
                        <div className="tf-collapse-content">
                          <ul className="footer-menu-list">
                            {(i === 0
                              ? [
                                  ["О нас", "/about"],
                                  ["Наши истории", "/store-list"],
                                  ["Руководство по размерам", "/product-detail/1"],
                                  ["Связаться с нами", "/contact"],
                                ]
                              : [
                                  ["Перевозки", "/product-detail/1"],
                                  ["Возврат и возврат", "/product-detail/1"],
                                  ["политика конфиденциальности", "/term-of-use"],
                                  ["Условия использования", "/term-of-use"],
                                ]
                            ).map(([label, href], j) => (
                              <li className="text-body-default" key={j}>
                                <Link
                                  href={href}
                                  className="link footer-menu_item"
                                >
                                  {label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="footer-phone-number">
                    <h4 className="text_white number">+61 (9) 567 8765 43</h4>
                    <h4 className="text_white mail">привет@вашеимя.com</h4>
                  </div>
                </div>
              </div>

              <div className="footer-col-block footer-newsletter">
                <h3
                  className="footer-heading footer-heading-mobile text_white"
                  ref={(el) => {
                    if (el) headingRefs.current = [...headingRefs.current, el];
                  }}
                >
                  Оставайтесь в курсе еженедельных информационных бюллетеней
                </h3>
                <div className="tf-collapse-content">
                  <div
                    className={`tfSubscribeMsg footer-sub-element ${
                      showMessage ? "active" : ""
                    }`}
                  >
                    {success ? (
                      <p style={{ color: "rgb(52, 168, 83)" }}>
                        Вы успешно подписались.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>Что-то пошло не так</p>
                    )}
                  </div>
                  <form
                    onSubmit={sendEmail}
                    className="form-newsletter subscribe-form"
                  >
                    <div className="subscribe-content">
                      <fieldset className="email">
                        <input
                          type="email"
                          name="email"
                          className="subscribe-email"
                          placeholder="Введите ваш e-mail"
                          aria-required="true"
                        />
                      </fieldset>
                      <div className="button-submit">
                        <button
                          className="subscribe-button text-body-default"
                          type="submit"
                        >
                          Подписаться <i className="icon-arrow-up-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                  <ul className="tf-social-icon type-2">
                    {["Фейсбук", "x", "инстаграм", "телеграмма"].map(
                      (platform, index) => (
                        <li key={index}>
                          <a href="#" className={`social-${platform}`}>
                            <i className={`icon icon-${platform}`} />
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
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
                    © 2025 GearO. Все права защищены.
                  </p>
                </div>
                <div className="center">
                  <div className="tf-currencies">
                    <CurrencySelect boxStyle light />
                  </div>
                </div>
                <div className="tf-payment">
                  <ul>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <li key={i}>
                        <Image
                          alt={`Payment ${i}`}
                          src={`/images/payment/payment-${i}.png`}
                          width={76}
                          height={48}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
