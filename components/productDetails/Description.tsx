import React from "react";

export default function Description({ headingStyle2 = false }) {
  return (
    <>
      {" "}
      <div className="right">
        {headingStyle2 ? (
          <div className="mb_12">Особенности товара</div>
        ) : (
          <h6 className="mb_12">Особенности товара</h6>
        )}

        <p className="mb_8 text_secondary">
          Дышащая подвеска обеспечивает прохладу и комфорт.
        </p>
        <p className="mb_8 text_secondary">
          Три размера стульев означают максимальный комфорт для самого широкого круга пользователей.
        </p>
        <p className="text_secondary">
          Регулируемые подушечки PostureFit SL обеспечивают поддержку поясницы и стабилизируют положение тела.
          основание позвоночника.
        </p>
      </div>
      <div className="left">
        {headingStyle2 ? (
          <div className="mb_12">Размеры и вес</div>
        ) : (
          <h6 className="mb_12">Размеры и вес</h6>
        )}

        <ul className="">
          <li className="text-body-default mb_8">
            ОБЩИЙ:
            <span className="text_secondary">64,5 дюйма Ш x 38,5 дюйма x 35 дюймов В</span>
          </li>
          <li className="text-body-default mb_8">
            ВНУТРЕННИЕ СИДЕНИЯ:
            <span className="text_secondary">
              50,5"Ш x 22" Ш x 22" Г x 19,5" В
            </span>
          </li>
          <li className="text-body-default mb_8">
            РУКА:
            <span className="text_secondary">7"Шx38,5"Гx22,5"В</span>
          </li>
          <li className="text-body-default">
            НОГИ:
            <span className="text_secondary">5,5"Шx2"Гx2"В</span>
          </li>
        </ul>
      </div>
    </>
  );
}
