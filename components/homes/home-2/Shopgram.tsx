"use client";
import Link from "next/link";
import type { Product } from "@/types/product";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

interface ShopgramProps {
  products?: Product[];
}

export default function Shopgram({ products }: ShopgramProps) {
  if (!products || products.length === 0) {
    return null;
  }
  const items = products.map((p) => ({ id: p.id, imgSrc: p.imgSrc }));

  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Галерея</h3>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="swiper tf-sw-shop-gallery md-px-15"
        loop
        centeredSlides
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 2 },
          575: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5.7,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".spd12",
        }}
      >
        {[...items, ...items].map((product, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="gallery-item hover-overlay hover-img">
              <div className="img-style">
                <Image
                  className="lazyload img-hover"
                  alt="галерея изображений"
                  src={product.imgSrc}
                  width={500}
                  height={500}
                />
              </div>
              <Link
                href={`/product-detail/${product.id}`}
                className="box-icon hover-tooltip"
              >
                <span className="icon icon-eye" />
                <span className="tooltip">Посмотреть продукт</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        <div className="sw-pagination-gallery sw-dots d-lg-none d-flex type-circle justify-content-center spd12" />
      </Swiper>
    </section>
  );
}
