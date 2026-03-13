import Image from "next/image";
import React from "react";

export default function ArticleScandinavian() {
  return (
    <div className="blog-detail-wrap">
      <div className="inner">
        <div className="heading">
          <ul className="list-tags has-bg">
            <li>
              <a href="#" className="link">
                Дизайн
              </a>
            </li>
          </ul>
          <h3>Скандинавский стиль в интерьере</h3>
          <div className="wrap-meta">
            <ul className="meta">
              <li className="text-body-1">
                <i className="icon-calendar" />
                <span>13.03.26</span>
              </li>
            </ul>
            <ul className="meta info">
              <li className="text-body-1">
                <i className="icon-clock" />2 минуты чтения
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <p className="text-secondary text-body-1 mb_12">
            Скандинавский стиль давно перестал быть просто интерьерным трендом.
            Сегодня это целая философия пространства, в которой красота рождается
            из простоты, а уют — из продуманных деталей. Его главная идея
            заключается в том, чтобы создать светлый, спокойный и функциональный
            интерьер, где приятно жить, отдыхать и работать.
          </p>
          <p className="text-secondary text-body-1">
            Основой скандинавского стиля считается светлая палитра. Белые,
            молочные, серые и бежевые оттенки визуально расширяют пространство,
            наполняют его воздухом и делают комнату более солнечной даже в
            пасмурные дни. Именно поэтому такой подход особенно хорошо подходит
            для небольших квартир и помещений, где не хватает естественного света.
          </p>
        </div>
        <div className="image-wrap">
          <Image
            className="lazyload"
            alt="Скандинавский интерьер"
            src="/images/blog/article-scandinavian.png"
            width={1275}
            height={786}
          />
        </div>
        <div className="content">
          <h4 className="mb_16">Натуральные материалы и функциональность</h4>
          <p className="text-secondary text-body-1 mb_24">
            Важную роль играют натуральные материалы. Дерево, лен, хлопок, шерсть,
            керамика и стекло делают интерьер живым и тёплым. В скандинавском доме
            редко встретишь вычурный декор или слишком яркие сочетания. Здесь
            ценятся фактуры, естественность и ощущение гармонии. Даже один плед
            крупной вязки, деревянный стол или керамическая ваза могут стать
            выразительным акцентом.
          </p>
          <p className="text-secondary text-body-1 mb_24">
            Еще одна черта стиля — функциональность. Каждый предмет должен быть не
            только красивым, но и полезным. Мебель выбирают лаконичную, удобную и
            практичную, без лишних деталей. Открытые полки, компактные системы
            хранения и минимализм в декоре помогают поддерживать порядок и ощущение
            легкости.
          </p>
          <p className="text-secondary text-body-1 mb_24">
            Особое место в таком интерьере занимает атмосфера. Скандинавский стиль
            тесно связан с ощущением тепла, спокойствия и домашнего комфорта.
            Мягкий свет, свечи, текстиль, живые растения и аккуратные детали делают
            пространство по-настоящему уютным, не перегружая его.
          </p>
          <div className="quote mb_24">
            <div className="wrap-content">
              <div className="icon">
                <i className="icon-quote" />
              </div>
              <div className="content">
                <h4 className="mb_20">
                  «Скандинавский стиль — это не про пустоту, а про осознанный выбор
                  вещей, которые делают жизнь удобнее и спокойнее. Именно поэтому
                  даже самый минималистичный интерьер в этом стиле ощущается теплым,
                  живым и по-настоящему домашним.»
                </h4>
              </div>
            </div>
          </div>
          <p className="text-secondary text-body-1">
            Секрет популярности скандинавского стиля — в его универсальности. Он
            легко адаптируется под разные вкусы: можно добавить больше уюта с
            помощью текстиля, сделать интерьер строже за счет черных акцентов или,
            наоборот, оживить его зелёными растениями. Такой стиль не устаревает,
            потому что строится не на моде, а на комфорте, свете и естественной
            красоте.
          </p>
        </div>
        <div className="bot d-flex justify-content-between gap-10 flex-wrap">
          <ul className="list-tags has-bg">
            <li className="text-body-default">Тег:</li>
            <li>
              <a href="#" className="link text-caption-2">
                Дизайн
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-between gap-16">
            <p className="text-body-default">Поделиться статьёй:</p>
            <ul className="tf-social-icon style-1">
              <li>
                <a href="#" className="social-facebook" style={{ fontWeight: 700, fontSize: 14 }}>
                  VK
                </a>
              </li>
              <li>
                <a href="#" className="social-instagram">
                  <i className="icon icon-telegram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
