"use client";
import Link from "next/link";
import React from "react";

export default function Order() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap tracking-wrap">
          <div className="left">
            <div className="heading">
              <h4 className="mb_8">Отслеживание заказов</h4>
              <p>
                Чтобы отслеживать свой заказ, введите идентификатор заказа в поле ниже.
                и нажмите кнопку «Отследить». Это было дано вам на вашем
                квитанцию и в электронном письме с подтверждением, которое вы должны были получить.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="form-login">
              <div className="wrap">
                <fieldset>
                  <input type="text" placeholder="Имя пользователя или электронная почта*" />
                </fieldset>
                <fieldset>
                  <input type="text" placeholder="Электронная почта для выставления счетов*" />
                </fieldset>
              </div>
              <div className="button-submit">
                <button className="tf-btn btn-onsurface" type="submit">
                  <span className="text">Отслеживание заказов</span>
                </button>
              </div>
            </form>
          </div>
          <div className="right">
            <h4 className="mb_8">У вас уже есть аккаунт?</h4>
            <p className="text-secondary">
              Добро пожаловать. Войдите, чтобы получить доступ к своему персонализированному опыту,
              сохраненные настройки и многое другое. Мы очень рады, что вы с нами
              снова!
            </p>
            <Link href={`/login`} className="tf-btn btn-onsurface">
              <span className="text">Вход</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
