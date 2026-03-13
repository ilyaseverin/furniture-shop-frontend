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
                    <li>
                      <a href="#" className="social-vk">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.189 1.367 1.259 2.182 1.814.616.42 1.084.328 1.084.328l2.175-.03s1.14-.07.599-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.247.999-1.33 1.398-2.142 1.273-2.49-.12-.331-.854-.244-.854-.244l-2.449.015s-.182-.025-.316.056c-.131.079-.216.263-.216.263s-.387 1.028-.903 1.903c-1.089 1.848-1.524 1.946-1.702 1.832-.414-.265-.31-1.066-.31-1.634 0-1.777.27-2.518-.527-2.71-.265-.064-.46-.106-1.137-.113-.868-.009-1.602.003-2.017.206-.276.135-.49.436-.36.453.16.022.522.098.714.358.248.337.24 1.09.24 1.09s.143 2.093-.332 2.352c-.327.178-.774-.185-1.736-1.845-.492-.85-.864-1.79-.864-1.79s-.072-.176-.2-.27c-.154-.114-.37-.15-.37-.15l-2.327.015s-.35.01-.478.161c-.114.135-.009.414-.009.414s1.82 4.258 3.882 6.401c1.889 1.965 4.035 1.836 4.035 1.836h.972z"/>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-telegram">
                        <i className="icon icon-telegram" />
                      </a>
                    </li>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
