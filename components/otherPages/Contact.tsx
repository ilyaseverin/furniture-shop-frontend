"use client";
import React from "react";
import OpenLayersMap from "@/components/common/OpenLayersMap";

export default function Contact() {
  return (
    <div className="main-content">
      {/* map */}
      <div className="wrap-map">
        <div id="map-contact" className="map-contact h590">
          <OpenLayersMap latitude={62.5933} longitude={50.8542} zoom={15} />
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
