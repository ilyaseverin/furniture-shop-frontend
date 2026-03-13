"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  EffectCoverflow,
  EffectCreative,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Product } from "@/types/product";
import { Swiper as SwiperClass } from "swiper/types";

interface HeroProps {
  products?: Product[];
}

export default function Hero({ products }: HeroProps) {
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType>(null);
  type SwiperType = SwiperClass | null;

  if (!products || products.length === 0) {
    return null;
  }

  const thumbItems = products.map((p) => ({
    id: p.id,
    imgSrc: p.imgSrc,
    width: 600,
    height: 600,
    title: p.title,
    price: p.price,
  }));

  const mainSlides = products.map((p) => ({
    id: p.id,
    image: p.imgSrc,
    title: <>{p.title}</>,
    description: `₽${p.price.toFixed(2)}`,
  }));

  return (
    <div className="tf-slideshow style-2 slider-effect-fade slider-home2">
      <Swiper
        dir="ltr"
        className="swiper slider-home2-thumbs"
        modules={[Pagination, Navigation, EffectCreative, Thumbs]}
        {...{
          spaceBetween: 0,
          observer: true,
          observeParents: true,
          allowTouchMove: false,
          navigation: {
            nextEl: ".slider-home2-next",
            prevEl: ".slider-home2-prev",
          },
          pagination: {
            el: ".slider-home2-pagination",
            clickable: true,
          },
          thumbs: {
            swiper: thumbSwiper,
          },

          effect: "creative",
          speed: 1000,
          cardsEffect: {
            perSlideOffset: -60,
            perSlideRotate: 0,
            rotate: !1,
            slideShadows: !1,
          },
          breakpoints: {
            0: {
              creativeEffect: {
                limitProgress: 1,
                prev: {
                  translate: [-38, 0, 0],
                  scale: 0.82,
                },
                next: {
                  translate: [-38, 0, 0],
                  scale: 0.82,
                },
              },
            },
            767: {
              creativeEffect: {
                limitProgress: 1,
                prev: {
                  translate: [-85, 0, 0],
                  scale: 0.82,
                },
                next: {
                  translate: [-85, 0, 0],
                  scale: 0.82,
                },
              },
            },
            992: {
              creativeEffect: {
                limitProgress: 1,
                prev: {
                  translate: [-20, 0, 0],
                  scale: 0.82,
                },
                next: {
                  translate: [-50, 0, 0],
                  scale: 0.82,
                },
              },
            },
          },
        }}
      >
        {thumbItems.map((item, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="thumbs-item">
              <div className="image">
                <Image
                  className="lazyload"
                  data-src={item.imgSrc}
                  alt=""
                  src={item.imgSrc}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <div className="content">
                <Link
                  href={`/product-detail/${item.id}`}
                  className="text-title title text_white"
                >
                  {item.title}
                </Link>
                <div className="text-button text_white">
                  ₽{item.price.toFixed(2)}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        dir="ltr"
        className="swiper slider-home2-main slider-effect-fade"
        modules={[EffectCreative, EffectCoverflow, FreeMode, Thumbs]}
        onSwiper={setThumbSwiper}
        {...{
          slidesPerView: 1,
          freeMode: true,
          watchSlidesProgress: true,
          allowTouchMove: false,
          observer: true,
          observeParents: true,
          speed: 1000,
          effect: "creative",
          creativeEffect: {
            prev: {
              shadow: !0,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          },
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
        }}
      >
        {mainSlides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="wrap-slider">
              <div className="img-style">
                <Image
                  className="lazyload"
                  data-src={slide.image}
                  alt="баннер-cls"
                  src={slide.image}
                  width={1920}
                  height={847}
                />
              </div>
              <div className="box-content">
                <div className="box-title">
                  <div className="text-white text-display fade-item fade-1">
                    {slide.title}
                  </div>
                  <p className="text-body-1 text_white fade-item fade-item-2">
                    {slide.description}
                  </p>
                </div>
                <div className="fade-item fade-item-3">
                  <Link href={`/product-detail/${slide.id}`} className="tf-btn btn-white mx-auto">
                    Перейти к товару <i className="icon-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-navigation">
        <div className="sw-button swiper-button-prev line-default slider-home2-prev" />
        <div className="sw-button swiper-button-next line-default slider-home2-next" />
      </div>
      <div className="sw-dots slider-home2-pagination type-circle no-border justify-content-center" />
    </div>
  );
}
