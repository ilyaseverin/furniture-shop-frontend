import React from "react";

export default function SeliveryReturn() {
  return (
    <div
      className="modal modalCentered fade tf-product-modal modal-part-content"
      id="delivery_return"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Доставка и доставка</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="overflow-y-auto">
            <div className="tf-product-popup-delivery">
              <div className="title">Доставка</div>
              <p className="text-paragraph">
                Все заказы отправляются службой UPS Express.
              </p>
              <p className="text-paragraph">
                Всегда бесплатная доставка для заказов на сумму более 250 долларов США.
              </p>
              <p className="text-paragraph">
                Все заказы отправляются с номером отслеживания UPS.
              </p>
            </div>
            <div className="tf-product-popup-delivery">
              <div className="title">Возврат</div>
              <p className="text-paragraph">
                Товары, возвращенные в течение 14 дней с даты первоначальной отправки в
                такое же, как новое состояние, будет иметь право на полный возврат средств или
                магазинный кредит.
              </p>
              <p className="text-paragraph">
                Возврат средств будет произведен обратно в исходную форму оплаты.
                использован для покупки.
              </p>
              <p className="text-paragraph">
                Клиент несет ответственность за стоимость доставки при возврате.
                и стоимость доставки/обработки первоначальной покупки составляет
                невозвратный.
              </p>
              <p className="text-paragraph">
                Все товары распродажи являются окончательными покупками.
              </p>
            </div>
            <div className="tf-product-popup-delivery">
              <div className="title">Помощь</div>
              <p className="text-paragraph">
                Позвоните нам, если у вас есть какие-либо другие вопросы и/или проблемы.
              </p>
              <p className="text-paragraph">
                Электронная почта:
                <a href="mailto:contact@domain.com">
                  <span className="__cf_email__">контакт@домен.com</span>
                </a>
              </p>
              <p className="text-paragraph mb-0">Телефон: +1 (23) 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
