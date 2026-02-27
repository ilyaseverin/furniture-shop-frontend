import React from "react";
import SidebarNav from "./SidebarNav";
import Image from "next/image";
export default function OrderDetails() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="my-account-wrap">
          <SidebarNav />
          <div className="my-account-content">
            <div className="account-order-details">
              <div className="wd-form-order">
                <div className="order-head">
                  <figure className="img-product">
                    <Image
                      alt="продукт"
                      src="/images/shop/product-1.jpg"
                      width={900}
                      height={900}
                    />
                  </figure>
                  <div className="content">
                    <div className="badge">В ходе выполнения</div>
                    <h6 className="mt-8 fw-5">Заказ № 17493</h6>
                  </div>
                </div>
                <div className="tf-grid-layout md-col-2 gap-15">
                  <div className="item">
                    <div className="text-2 text_secondary">Элемент</div>
                    <div className="text-2 mt_4">Офисные стулья</div>
                  </div>
                  <div className="item">
                    <div className="text-2 text_secondary">Курьер</div>
                    <div className="text-2 mt_4">Эргономичный стул Pro</div>
                  </div>
                  <div className="item">
                    <div className="text-2 text_secondary">Время начала</div>
                    <div className="text-2 mt_4">
                      04 сентября 2025, 13:30:23
                    </div>
                  </div>
                  <div className="item">
                    <div className="text-2 text_secondary">Адрес</div>
                    <div className="text-2 mt_4">
                      1234 Fashion Street, офис 567, Нью-Йорк
                    </div>
                  </div>
                </div>
                <div className="widget-tabs style-2 widget-order-tab">
                  <ul className="widget-menu-tab">
                    <li className="item-title active">
                      <span className="inner text-body-default">
                        История заказов
                      </span>
                    </li>
                    <li className="item-title">
                      <span className="inner text-body-default">
                        Детали товара
                      </span>
                    </li>
                    <li className="item-title">
                      <span className="inner text-body-default">Курьер</span>
                    </li>
                    <li className="item-title">
                      <span className="inner text-body-default">Получатель</span>
                    </li>
                  </ul>
                  <div className="widget-content-tab">
                    <div className="widget-content-inner active">
                      <div className="widget-timeline">
                        <ul className="timeline">
                          <li>
                            <div className="timeline-badge success" />
                            <div className="timeline-box">
                              <a className="timeline-panel" href="#">
                                <div className="text-2 fw-6">
                                  Товар отправлен
                                </div>
                                <span>07.10.2025 16:30</span>
                              </a>
                              <p>
                                <strong>Курьерская служба: </strong>
                                FedEx World Service Center
                              </p>
                              <p>
                                <strong>Предполагаемая дата доставки: </strong>
                                12/07/2025
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-badge success" />
                            <div className="timeline-box">
                              <a className="timeline-panel" href="#">
                                <div className="text-2 fw-6">
                                  Товар отправлен
                                </div>
                                <span>07.10.2025 16:30</span>
                              </a>
                              <p>
                                <strong>Идентификационный номер : </strong>
                                2307-3215-6759
                              </p>
                              <p>
                                <strong>Склад : </strong>
                                T-Shirt 10b
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-badge" />
                            <div className="timeline-box">
                              <a className="timeline-panel" href="#">
                                <div className="text-2 fw-6">
                                  Упаковка продукта
                                </div>
                                <span>07.12.2025 16:34</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-badge" />
                            <div className="timeline-box">
                              <a className="timeline-panel" href="#">
                                <div className="text-2 fw-6">Заказ размещен</div>
                                <span>07.11.2025 14:36</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget-content-inner">
                      <div className="order-head">
                        <figure className="img-product">
                          <Image
                            alt="продукт"
                            src="/images/shop/product-1.jpg"
                            width={900}
                            height={900}
                          />
                        </figure>
                        <div className="content">
                          <div className="text-2">Эргономичный стул Pro</div>
                          <div className="mt_4">
                            <span className="">Цена :</span>
                            $219.99
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li className="d-flex justify-content-between text-2">
                          <span>Общая стоимость</span>
                          <span className="">$219.99</span>
                        </li>
                        <li className="d-flex justify-content-between text-2 mt_4 pb_8 line-bt">
                          <span>Всего скидок</span>
                          <span className="">$10</span>
                        </li>
                        <li className="d-flex justify-content-between text-2 mt_8">
                          <span>Сумма заказа</span>
                          <span className="">$209.99</span>
                        </li>
                      </ul>
                    </div>
                    <div className="widget-content-inner">
                      <p>
                        Наша курьерская служба ориентирована на быструю доставку.
                        надежные и безопасные решения для доставки, специально разработанные для удовлетворения
                        ваши потребности. Отправляете ли вы документы, посылки,
                        или более крупные партии, наша команда гарантирует, что ваши товары
                        обрабатываются с особой тщательностью и доставляются вовремя.
                        Стремясь к удовлетворению потребностей клиентов, в режиме реального времени
                        отслеживание и широкая сеть маршрутов облегчаем
                        чтобы вы могли отправлять и получать посылки как локально, так и
                        на международном уровне. Выберите нашу услугу для беспрепятственного и
                        опыт эффективной доставки.
                      </p>
                    </div>
                    <div className="widget-content-inner">
                      <p className="text-2 text-success">
                        Спасибо Ваш заказ получен
                      </p>
                      <ul className="mt_20">
                        <li>
                          Номер заказа : <span className="fw-7">#17493</span>
                        </li>
                        <li>
                          Дата :
                          <span className="fw-7">07.17.2025, 14:34</span>
                        </li>
                        <li>
                          Общий : <span className="fw-7">$18.95</span>
                        </li>
                        <li>
                          Способы оплаты:
                          <span className="fw-7">Наложенным платежом</span>
                        </li>
                      </ul>
                    </div>
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
