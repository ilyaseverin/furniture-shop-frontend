import React from "react";

export default function Shipping({ headingStyle2 = false }) {
  return (
    <>
      <div className="w-100">
        {headingStyle2 ? (
          <div className="text-btn-uppercase mb_12">Мы прикроем твою спину</div>
        ) : (
          <h6 className="text-btn-uppercase mb_12">Мы прикроем твою спину</h6>
        )}

        <p className="mb_12">
          Одна плата за доставку в большинство мест (см. раздел «Заказы и доставка»).
          страница)
        </p>
        <p className="">
          Бесплатный возврат в течение 14 дней (за исключением окончательной продажи и изготовления на заказ).
          предметы, маски для лица и некоторые продукты, содержащие опасные или
          легковоспламеняющиеся материалы, такие как ароматизаторы и аэрозоли)
        </p>
      </div>
      <div className="w-100">
        {headingStyle2 ? (
          <div className="text-btn-uppercase mb_12">
            Информация об импортных пошлинах
          </div>
        ) : (
          <h6 className="text-btn-uppercase mb_12">
            Информация об импортных пошлинах
          </h6>
        )}

        <p>
          Давайте займемся беготней. Стоимость доставки включена в стоимость товара.
          цена при доставке во все страны ЕС (кроме Канарских островов)
          острова), а также Великобритания, США, Канада, материковый Китай,
          Австралия, Новая Зеландия, Пуэрто-Рико, Швейцария, Сингапур, Республика
          Кореи, Кувейта, Мексики, Катара, Индии, Норвегии, Саудовской Аравии, Тайваня.
          Регион, Таиланд, ОАЭ, Япония, Бразилия, остров Мэн, Сан-Марино,
          Колумбия, Чили, Аргентина, Египет, Ливан, САР Гонконг, Бахрейн и
          Турция. Все импортные пошлины включены в ваш заказ – цена, которую вы
          видите, это цена, которую вы платите.
        </p>
      </div>
      <div className="w-100">
        {headingStyle2 ? (
          <div className="text-btn-uppercase mb_12">Предполагаемая доставка</div>
        ) : (
          <h6 className="text-btn-uppercase mb_12">Предполагаемая доставка</h6>
        )}

        <p className="mb_6 font-2">Экспресс: 10 мая – 17 мая</p>
        <p className="font-2">Отправка из США</p>
      </div>
      <div className="w-100">
        {headingStyle2 ? (
          <div className="text-btn-uppercase mb_12">Нужна дополнительная информация?</div>
        ) : (
          <h6 className="text-btn-uppercase mb_12">Нужна дополнительная информация?</h6>
        )}

        <div>
          <a
            href="#"
            className="link text-secondary text-decoration-underline mb_6"
          >
            Заказы и доставка
          </a>
        </div>
        <div>
          <a
            href="#"
            className="link text-secondary text-decoration-underline mb_6"
          >
            Возврат и возмещение
          </a>
        </div>
        <div>
          <a href="#" className="link text-secondary text-decoration-underline">
            Пошлины и налоги
          </a>
        </div>
      </div>
    </>
  );
}
