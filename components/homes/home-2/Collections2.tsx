import { bannerData } from "@/data/collections";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Collections2() {
  const banners = bannerData.map((b, i) => ({
    imgSrc: b.imgSrc,
    title: b.title,
    description: b.description,
    linkText: b.linkText,
    href: `/blog-details/${i + 1}`,
  }));

  return (
    <section>
      <div className="flat-img-with-text-5">
        {banners.map((banner, index) => (
          <div className="collection-position hover-img style-6" key={index}>
            <div className="img-style">
              <Image
                className="lazyload effect-paralax"
                data-src={banner.imgSrc}
                alt={banner.title}
                src={banner.imgSrc}
                width={950}
                height={640}
              />
            </div>
            <div className="content cls-content w-full">
              <div className="cls-heading gap-8 mb_22">
                <h3>
                  <Link href={banner.href} className="link text_white wow fadeInUp">
                    {banner.title}
                  </Link>
                </h3>
                {banner.description && (
                  <p
                    className="text_white text-body-default wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    {banner.description}
                  </p>
                )}
              </div>
              <Link href={banner.href} className="tf-btn btn-white mx-auto">
                <span>{banner.linkText}</span>
                <i className="icon-arrow-up-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
