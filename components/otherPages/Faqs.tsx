"use client";
import React from "react";

export default function Faqs() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="page-faqs-wrap">
              <div className="list-faqs">
                <div>
                  <h4 className="faqs-title">Как купить</h4>
                  <ul
                    className="accordion-product-wrap style-faqs"
                    id="accordion-faq-1"
                  >
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-1"
                        className="accordion-title current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-1"
                      >
                        <h6>Как мне разместить заказ?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-1"
                        className="collapse show"
                        data-bs-parent="#accordion-faq-1"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-2"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-2"
                      >
                        <h6>Могу ли я покупать товары без создания учетной записи?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-2"
                        className="collapse"
                        data-bs-parent="#accordion-faq-1"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-3"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-3"
                      >
                        <h6>Защищена ли моя платежная информация?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-3"
                        className="collapse"
                        data-bs-parent="#accordion-faq-1"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-4"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-4"
                      >
                        <h6>Какие способы оплаты вы принимаете?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-4"
                        className="collapse"
                        data-bs-parent="#accordion-faq-1"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-5"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-5"
                      >
                        <h6>Могу ли я изменить свой заказ после его размещения?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-5"
                        className="collapse"
                        data-bs-parent="#accordion-faq-1"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="faqs-title">Обмены и возвраты</h4>
                  <ul
                    className="accordion-product-wrap style-faqs"
                    id="accordion-faq-2"
                  >
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-faq-2-1"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-faq-2-1"
                      >
                        <h6>Какова ваша политика обмена?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-faq-2-1"
                        className="collapse"
                        data-bs-parent="#accordion-faq-2"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-faq-2-2"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-faq-2-2"
                      >
                        <h6>Как мне обменять товар?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-faq-2-2"
                        className="collapse"
                        data-bs-parent="#accordion-faq-2"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-faq-2-3"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-faq-2-3"
                      >
                        <h6>
                          Нужно ли мне платить за обратную доставку при обмене?
                        </h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-faq-2-3"
                        className="collapse"
                        data-bs-parent="#accordion-faq-2"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-faq-2-4"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-faq-2-4"
                      >
                        <h6>Сколько времени занимает процесс обмена?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-faq-2-4"
                        className="collapse"
                        data-bs-parent="#accordion-faq-2"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="faqs-title">Вопросы о возврате средств</h4>
                  <ul
                    className="accordion-product-wrap style-faqs"
                    id="accordion-faq-3"
                  >
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-faq-3-1"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-faq-3-1"
                      >
                        <h6>Какова ваша политика возврата?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-faq-3-1"
                        className="collapse"
                        data-bs-parent="#accordion-faq-3"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-faq-3-2"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-faq-3-2"
                      >
                        <h6>Сколько времени потребуется, чтобы получить возмещение?</h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-faq-3-2"
                        className="collapse"
                        data-bs-parent="#accordion-faq-3"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion-product-item">
                      <a
                        href="#accordion-faq-3-3"
                        className="accordion-title collapsed current"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="accordion-faq-3-3"
                      >
                        <h6>
                          Как я узнаю, что мой возврат был обработан?
                        </h6>
                        <i className="icon-down" />
                      </a>
                      <div
                        id="accordion-faq-3-3"
                        className="collapse"
                        data-bs-parent="#accordion-faq-3"
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-secondary text-body-1">
                            Для оформления заказа просмотрите наш каталог продукции,
                            выберите нужные элементы и добавьте их в свой
                            тележка. Когда будете готовы, перейдите к оформлению заказа и предоставьте
                            ваши данные о доставке и оплате, а также подтвердите
                            заказ.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="ask-question sticky-top">
              <div className="ask-question-wrap">
                <h5 className="mb_4">Задайте свой вопрос</h5>
                <p className="mb_20 text-secondary">
                  Спросите что угодно, мы здесь, чтобы помочь
                </p>
                <form
                  className="form-leave-comment"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <fieldset className="mb_18">
                    <div className="text-caption-1 mb_8">Имя</div>
                    <input
                      className=""
                      type="text"
                      placeholder="Ваше имя*"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="mb_18">
                    <div className="text-caption-1 mb_8">
                      Как мы можем вам помочь?
                    </div>
                    <div className="tf-select">
                      <select className="">
                        <option>Обмены и возвраты</option>
                        <option>Другой</option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset className="mb_14">
                    <div className="text-caption-1 mb_8">Сообщение</div>
                    <textarea
                      className=""
                      rows={4}
                      placeholder="Ваше сообщение*"
                      tabIndex={2}
                      aria-required="true"
                      required
                      defaultValue={""}
                    />
                  </fieldset>
                  <div className="button-submit">
                    <a href="#" className="tf-btn btn-onsurface w-full mx-auto">
                      Отправить запрос <i className="icon-arrow-up-right" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
