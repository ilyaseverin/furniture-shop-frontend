import React from "react";
import Image from "next/image";
export default function Collections3({ parentClass = "flat-spacing-2 pt-0" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div
          className="swiper tf-sw-mobile"
          data-screen={767}
          data-preview={1}
          data-space={15}
        >
          <div className="swiper-wrapper grid-cls-v2">
            <div className="swiper-slide item2">
              <div className="collection-position style-2 spacing-1">
                <a href={`#`} className="img-style">
                  <Image
                    className="lazyload effect-paralax"
                    data-src="/images/banner/banner-7.jpg"
                    alt="banner-cls"
                    src="/images/banner/banner-7.jpg"
                    width={1890}
                    height={900}
                  />
                </a>
                <div className="content cls-content">
                  <div className="cls-heading">
                    <h4 className="text_white wow fadeInUp" data-wow-delay="0s">
                      Upgrade Your Workspace
                    </h4>
                    <p
                      className="text_white wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      Modern office lighting
                    </p>
                  </div>
                  <a
                    href={`#`}
                    className="btn-line btn-line-white wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <span> Shop Lighting </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide item3">
              <div className="collection-position style-2 spacing-1">
                <a href={`#`} className="img-style">
                  <Image
                    className="lazyload effect-paralax"
                    data-src="/images/banner/banner-8.jpg"
                    alt="banner-cls"
                    src="/images/banner/banner-8.jpg"
                    width={1890}
                    height={900}
                  />
                </a>
                <div className="content cls-content">
                  <div className="cls-heading">
                    <h4 className="text_white wow fadeInUp" data-wow-delay="0s">
                      Elevate Your Office
                    </h4>
                    <p
                      className="text_white wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      Stylish office decor
                    </p>
                  </div>
                  <a
                    href={`#`}
                    className="btn-line btn-line-white wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <span> Discover Decor </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sw-pagination-mb sw-dots type-circle justify-content-center d-md-none d-flex" />
        </div>
      </div>
    </section>
  );
}
