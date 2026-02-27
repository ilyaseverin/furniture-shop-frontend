"use client";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Регистрация</h4>
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
                <fieldset className="position-relative password-item">
                  <input
                    className="input-password"
                    type="password"
                    placeholder="Подтвердите пароль*"
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
                <div className="d-flex align-items-center">
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
                    <label
                      className="text-secondary-2"
                      htmlFor="login-form_agree"
                    >
                      Я согласен на
                    </label>
                  </div>
                  <Link href={`/term-of-use`} title="Условия использования">
                    Условия использования
                  </Link>
                </div>
              </div>
              <div className="button-submit">
                <button className="tf-btn btn-onsurface" type="submit">
                  Регистрация
                </button>
              </div>
            </form>
          </div>
          <div className="right">
            <h4 className="mb_8">У вас уже есть аккаунт?</h4>
            <p className="text-secondary text-body-default">
              Добро пожаловать. Войдите, чтобы получить доступ к своему персонализированному опыту,
              сохраненные настройки и многое другое. Мы очень рады, что вы с нами
              снова!
            </p>
            <Link href={`/login`} className="tf-btn btn-onsurface">
              {" "}
              Вход{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
