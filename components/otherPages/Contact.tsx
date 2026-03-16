"use client";
import React from "react";

export default function Contact() {
  return (
    <div className="main-content">
      {/* map */}
      <div className="wrap-map">
        <div id="map-contact" className="map-contact h590">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d50.8542!3d62.5933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0JXQvNCy0LA!5e0!3m2!1sru!2sru"
            width="100%"
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* /map */}
      <section className="flat-spacing">
        <div className="container">
          <div className="contact-us-content">
            <div className="row">
              <div className="col-lg-6 mb-lg-30">
                <h4 className="mb_30 wow fadeInUp">Контакты</h4>
                <div className="mb_28">
                  <h6 className="mb_8">Телефон:</h6>
                  <p className="text-body-default">
                    <a href="tel:+79009780768">+7 900 978-07-68</a>
                  </p>
                </div>
                <div className="mb_28">
                  <h6 className="mb_8">Электронная почта:</h6>
                  <p className="text-body-default">
                    <a href="mailto:support@hittashop.ru">support@hittashop.ru</a>
                  </p>
                </div>
                <div className="mb_28">
                  <h6 className="mb_8">Адрес:</h6>
                  <p className="text-body-default">
                    169200, Россия, Республика Коми, м.о. Княжпогостский, г. Емва,
                    ул. Волгоградская, д. 3, кв. 8
                  </p>
                </div>
              </div>
              {/* Форма обратной связи скрыта */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
