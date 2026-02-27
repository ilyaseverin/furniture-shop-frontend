import React from "react";

export default function ReturnPolicies({ headingStyle2 = false }) {
  return (
    <>
      {" "}
      {headingStyle2 ? (
        <div className="mb_12">Политика возврата</div>
      ) : (
        <h6 className="mb_12">Политика возврата</h6>
      )}
      <p className="mb_12 text_secondary">
        В GearO мы отвечаем за качество нашей продукции. Если ты не
        полностью удовлетворены вашей покупкой, мы предлагаем беспроблемный возврат
        в течение 30 дней с момента доставки.
      </p>
      {headingStyle2 ? (
        <div className="mb_12">Простой обмен или возврат</div>
      ) : (
        <h6 className="mb_12">Простой обмен или возврат</h6>
      )}
      <ul className="list-text type-disc mb_12 gap-6">
        <li className="text_secondary">
          Обменяйте товар на другой размер, цвет или стиль или получите
          полный возврат средств.
        </li>
        <li className="text_secondary">
          Все возвращаемые товары должны быть непоношенными, в оригинальной упаковке и иметь
          с прикрепленными тегами.
        </li>
      </ul>
      {headingStyle2 ? (
        <div className="mb_12">Простой процесс</div>
      ) : (
        <h6 className="mb_12">Простой процесс</h6>
      )}
      <ul className="list-text type-number">
        <li className="text_secondary">
          Инициируйте возврат онлайн или свяжитесь с нашей службой поддержки клиентов для получения
          помощь.
        </li>
        <li className="text_secondary">
          Надежно упакуйте товар и приложите оригинальную упаковочную накладную.
        </li>
        <li className="text_secondary">
          Отправьте возврат нам, используя нашу этикетку предоплаченной доставки.
        </li>
        <li className="text_secondary">
          После получения ваш возврат будет обработан незамедлительно.
        </li>
      </ul>
      <p className="text_secondary">
        По любым вопросам или проблемам, связанным с возвратом, не стесняйтесь обращаться к нам.
        нашей специальной команде обслуживания клиентов. Ваше удовлетворение - это наша
        приоритет.
      </p>
    </>
  );
}
