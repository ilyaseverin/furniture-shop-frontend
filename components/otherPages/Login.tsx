"use client";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Вход</h4>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="form-login form-has-password"
            >
              <div className="wrap">
                <fieldset className="">
                  <input
                    className=""
                    type="email"
                    placeholder="Имя пользователя или электронная почта*"
                    name="email"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="position-relative password-item">
                  <input
                    className="input-password"
                    type="password"
                    placeholder="Пароль*"
                    name="password"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                  <span className="toggle-password unshow">
                    <i className="icon-eye-hide" />
                  </span>
                </fieldset>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input
                        defaultChecked
                        className=""
                        type="checkbox"
                        id="login-form_agree"
                        name="agree_checkbox"
                      />
                      <div>
                        <i className="icon-check" />
                      </div>
                    </div>
                    <label htmlFor="login-form_agree">Запомнить меня </label>
                  </div>
                  <a href="#" className="text-button forget-password link">
                    Забыли пароль?
                  </a>
                </div>
              </div>
              <div className="button-submit">
                <button className="tf-btn btn-onsurface" type="submit">
                  Вход
                </button>
              </div>
            </form>
          </div>
          <div className="right">
            <h4 className="mb_8">Новый клиент</h4>
            <p className="text-secondary text-body-default">
              Станьте частью нашей растущей семьи новых клиентов! Присоединяйтесь к нам сегодня и
              откройте мир эксклюзивных преимуществ, предложений и персонализированных
              опыты.
            </p>
            <Link href={`/register`} className="tf-btn btn-onsurface">
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
