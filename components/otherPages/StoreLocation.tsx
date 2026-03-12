import React from "react";
import Image from "next/image";

interface StoreItem {
  id?: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  imgSrc: string;
  workingHours?: string;
  latitude?: number;
  longitude?: number;
}

interface StoreLocationProps {
  stores: StoreItem[];
}

export default function StoreLocation({ stores }: StoreLocationProps) {
  return (
    <section className="flat-spacing pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="swiper tf-sw-tablet"
              data-preview={1}
              data-space={15}
              data-screen={768}
            >
              <div className="swiper-wrapper tf-grid-layout-md wrap-box-location md-col-3">
                {stores.map((store, index) => {
                  const mapUrl =
                    store.latitude && store.longitude
                      ? `https://www.google.com/maps?q=${store.latitude},${store.longitude}`
                      : "#";

                  return (
                    <div className="swiper-slide" key={store.id ?? index}>
                      <div className="location-item hover-img">
                        <a href={mapUrl} className="img-style" target={mapUrl !== "#" ? "_blank" : undefined} rel="noopener noreferrer">
                          <Image
                            className="lazyload"
                            data-src={store.imgSrc}
                            alt={store.name}
                            src={store.imgSrc}
                            width={390}
                            height={520}
                          />
                        </a>
                        <div className="content">
                          <h5>{store.name}</h5>
                          <div className="info">
                            <div className="text-body-default">
                              {store.address}
                            </div>
                            {store.phone && (
                              <div className="text-body-default">
                                Телефон: {store.phone}
                              </div>
                            )}
                            {store.email && (
                              <div className="text-body-default">
                                Электронная почта:{" "}
                                <a href={`mailto:${store.email}`} className="link">
                                  {store.email}
                                </a>
                              </div>
                            )}
                            {store.workingHours && (
                              <div className="text-body-default">
                                Часы работы: {store.workingHours}
                              </div>
                            )}
                          </div>
                          <a
                            href={mapUrl}
                            className="btn-line mx-auto"
                            target={mapUrl !== "#" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                          >
                            Проложить маршрут
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="sw-pagination-tb sw-dots d-block d-md-none type-circle d-flex justify-content-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
