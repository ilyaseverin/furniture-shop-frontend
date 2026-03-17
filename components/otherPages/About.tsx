"use client";
import { swiperSlides } from "@/data/features";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

export default function About() {
  return (
    <section className="flat-spacing-2 about-us-main pb-0">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="heading-section text-center spacing-2">
              <h1 className="wow fadeInUp">Мы Hitta</h1>
              <p
                className="text-body-1 text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Мы создаем функциональную мебель, которая улучшает то, как люди
                живут, работают и отдыхают. Уже более 70 лет мы сотрудничаем с
                ведущими дизайнерами мира, чтобы делать решения, известные
                модульностью, практичностью и высоким качеством.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="img-wrap">
              <Image
                className="lazyload effect-paralax"
                src="/images/section/section-about.jpg"
                data-=""
                alt=""
                width={1935}
                height={1089}
              />
            </div>
            <div className="main-content">
              <div className="left">
                <h3 className="mb_11 wow fadeInUp">Наша миссия</h3>
                <p
                  className="text_secondary text-body-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Создавать возможности для роста через образование, вовлечение
                  сообщества и инновационные решения. Наша миссия — улучшать
                  жизнь людей в Одише, продвигая позитивные социальные
                  изменения, расширяя доступ к ресурсам и поддерживая
                  справедливое развитие по всему региону.
                </p>
              </div>
              <div className="right">
                <h3 className="mb_11 wow fadeInUp">Наше видение</h3>
                <p
                  className="text_secondary text-body-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Раскрывать потенциал жителей Одиши, продвигая устойчивое
                  развитие, сохраняя культурное наследие и поддерживая
                  инновации. Наше видение — построить процветающее сообщество,
                  где экономический рост и социальный прогресс идут рука об
                  руку, обеспечивая более светлое будущее для всех.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Swiper
              dir="ltr"
              className="swiper tf-sw-iconbox"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd22",
              }}
            >
              {swiperSlides.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="tf-box-icon">
                    <div className="icon">
                      <i className={slide.iconClass} />
                    </div>
                    <div className="content">
                      <h5 className="title">{slide.title}</h5>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-pagination-iconbox sw-dots type-circle d-flex justify-content-center spd22" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
