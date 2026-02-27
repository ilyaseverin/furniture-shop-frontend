import React from "react";
import Image from "next/image";
export default function Benefit() {
  return (
    <section className="flat-spacing-2 about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-style">
              <Image
                className="lazyload"
                alt="img_box-о"
                width={630}
                height={720}
                src="/images/section/box-about.jpg"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-about">
              <div className="heading-section spacing-3">
                <h3 className="wow fadeInUp">ДНК датского дизайна</h3>
                <p
                  className="text-body-1 text_secondary wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Продукты GearO отражают ценности мастерства,
                  простота, функциональность и качество материалов, которые определяют
                  наши датские корни в дизайне.
                </p>
              </div>
              <div className="benefit">
                <div
                  className="benefit-item wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="icon">
                    <i className="icon-frame-3" />
                  </div>
                  <div className="content">
                    <h4 className="title">Форма</h4>
                    <p className="text-body-default text_secondary">
                      Мы тщательно продумываем каждую деталь, придавая нашим проектам неповторимость.
                      ощущение чистой точности и целенаправленного мастерства.
                    </p>
                  </div>
                </div>
                <div
                  className="benefit-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <i className="icon-frame-2" />
                  </div>
                  <div className="content">
                    <h4 className="title">Чувствовать</h4>
                    <p className="text-body-default text_secondary">
                      Неотразимо созданный. Наши продукты интуитивно понятны
                      привлекательный и гостеприимный, апеллирующий к чувствам.
                    </p>
                  </div>
                </div>
                <div
                  className="benefit-item wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <i className="icon-frame-1" />
                  </div>
                  <div className="content">
                    <h4 className="title">Функциональность</h4>
                    <p className="text-body-default text_secondary">
                      Наши проекты целенаправленны, продолжая датский
                      Традиция дизайна, которая ценит функциональность и форму.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
