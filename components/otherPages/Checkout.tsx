"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
export default function Checkout() {
  const { cartProducts, totalPrice } = useContextElement();

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="flat-spacing tf-page-checkout">
              <div className="wrap">
                <div className="title-login">
                  <p>У вас уже есть аккаунт?</p>
                  <Link href={`/login`} className="text-button link">
                    Войти здесь
                  </Link>
                </div>
                <form
                  className="login-box"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid-2">
                    <input type="text" placeholder="Ваше имя/электронная почта" />
                    <input type="password" placeholder="Пароль" />
                  </div>
                  <button className="tf-btn btn-onsurface" type="submit">
                    Вход
                    <i className="icon-arrow-up-right" />
                  </button>
                </form>
              </div>
              <div className="wrap">
                <h5 className="title">Информация</h5>
                <form className="info-box" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid-2">
                    <input type="text" placeholder="Имя*" />
                    <input type="text" placeholder="Фамилия*" />
                  </div>
                  <div className="grid-2">
                    <input type="text" placeholder="Электронная почта*" />
                    <input type="text" placeholder="Номер телефона*" />
                  </div>
                  <div className="tf-select">
                    <select
                      className="text-title"
                      name="address[country]"
                      data-default=""
                    >
                      <option value="Choose Country/Region" data-provinces="[]">
                        Выберите страну/регион
                      </option>
                      <option
                        value="United States"
                        data-provinces="[['Alabama','Alabama'],['Alaska','Alaska'],['American Samoa','American Samoa'],['Arizona','Arizona'],['Arkansas','Arkansas'],['Armed Forces Americas','Armed Forces Americas'],['Armed Forces Europe','Armed Forces Europe'],['Armed Forces Pacific','Armed Forces Pacific'],['California','California'],['Colorado','Colorado'],['Connecticut','Connecticut'],['Delaware','Delaware'],['District of Columbia','Washington DC'],['Federated States of Micronesia','Micronesia'],['Florida','Florida'],['Georgia','Georgia'],['Guam','Guam'],['Hawaii','Hawaii'],['Idaho','Idaho'],['Illinois','Illinois'],['Indiana','Indiana'],['Iowa','Iowa'],['Kansas','Kansas'],['Kentucky','Kentucky'],['Louisiana','Louisiana'],['Maine','Maine'],['Marshall Islands','Marshall Islands'],['Maryland','Maryland'],['Massachusetts','Massachusetts'],['Michigan','Michigan'],['Minnesota','Minnesota'],['Mississippi','Mississippi'],['Missouri','Missouri'],['Montana','Montana'],['Nebraska','Nebraska'],['Nevada','Nevada'],['New Hampshire','New Hampshire'],['New Jersey','New Jersey'],['New Mexico','New Mexico'],['New York','New York'],['North Carolina','North Carolina'],['North Dakota','North Dakota'],['Northern Mariana Islands','Northern Mariana Islands'],['Ohio','Ohio'],['Oklahoma','Oklahoma'],['Oregon','Oregon'],['Palau','Palau'],['Pennsylvania','Pennsylvania'],['Puerto Rico','Puerto Rico'],['Rhode Island','Rhode Island'],['South Carolina','South Carolina'],['South Dakota','South Dakota'],['Tennessee','Tennessee'],['Texas','Texas'],['Utah','Utah'],['Vermont','Vermont'],['Virgin Islands','U.S. Virgin Islands'],['Virginia','Virginia'],['Washington','Washington'],['West Virginia','West Virginia'],['Wisconsin','Wisconsin'],['Wyoming','Wyoming']]"
                      >
                        Соединенные Штаты
                      </option>
                      <option
                        value="Australia"
                        data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]"
                      >
                        Австралия
                      </option>
                      <option value="Austria" data-provinces="[]">
                        Австрия
                      </option>
                      <option value="Belgium" data-provinces="[]">
                        Бельгия
                      </option>
                      <option
                        value="Canada"
                        data-provinces="[['Alberta','Alberta'],['British Columbia','British Columbia'],['Manitoba','Manitoba'],['New Brunswick','New Brunswick'],['Newfoundland and Labrador','Newfoundland and Labrador'],['Northwest Territories','Northwest Territories'],['Nova Scotia','Nova Scotia'],['Nunavut','Nunavut'],['Ontario','Ontario'],['Prince Edward Island','Prince Edward Island'],['Quebec','Quebec'],['Saskatchewan','Saskatchewan'],['Yukon','Yukon']]"
                      >
                        Канада
                      </option>
                      <option value="Czech Republic" data-provinces="[]">
                        Чехия
                      </option>
                      <option value="Denmark" data-provinces="[]">
                        Дания
                      </option>
                      <option value="Finland" data-provinces="[]">
                        Финляндия
                      </option>
                      <option value="France" data-provinces="[]">
                        Франция
                      </option>
                      <option value="Germany" data-provinces="[]">
                        Германия
                      </option>
                      <option
                        value="Hong Kong"
                        data-provinces="[['Hong Kong Island','Hong Kong Island'],['Kowloon','Kowloon'],['New Territories','New Territories']]"
                      >
                        САР Гонконг
                      </option>
                      <option
                        value="Ireland"
                        data-provinces="[['Carlow','Carlow'],['Cavan','Cavan'],['Clare','Clare'],['Cork','Cork'],['Donegal','Donegal'],['Dublin','Dublin'],['Galway','Galway'],['Kerry','Kerry'],['Kildare','Kildare'],['Kilkenny','Kilkenny'],['Laois','Laois'],['Leitrim','Leitrim'],['Limerick','Limerick'],['Longford','Longford'],['Louth','Louth'],['Mayo','Mayo'],['Meath','Meath'],['Monaghan','Monaghan'],['Offaly','Offaly'],['Roscommon','Roscommon'],['Sligo','Sligo'],['Tipperary','Tipperary'],['Waterford','Waterford'],['Westmeath','Westmeath'],['Wexford','Wexford'],['Wicklow','Wicklow']]"
                      >
                        Ирландия
                      </option>
                      <option value="Israel" data-provinces="[]">
                        Израиль
                      </option>
                      <option
                        value="Italy"
                        data-provinces="[['Agrigento','Agrigento'],['Alessandria','Alessandria'],['Ancona','Ancona'],['Aosta','Aosta Valley'],['Arezzo','Arezzo'],['Ascoli Piceno','Ascoli Piceno'],['Asti','Asti'],['Avellino','Avellino'],['Bari','Bari'],['Barletta-Andria-Trani','Barletta-Andria-Trani'],['Belluno','Belluno'],['Benevento','Benevento'],['Bergamo','Bergamo'],['Biella','Biella'],['Bologna','Bologna'],['Bolzano','South Tyrol'],['Brescia','Brescia'],['Brindisi','Brindisi'],['Cagliari','Cagliari'],['Caltanissetta','Caltanissetta'],['Campobasso','Campobasso'],['Carbonia-Iglesias','Carbonia-Iglesias'],['Caserta','Caserta'],['Catania','Catania'],['Catanzaro','Catanzaro'],['Chieti','Chieti'],['Como','Como'],['Cosenza','Cosenza'],['Cremona','Cremona'],['Crotone','Crotone'],['Cuneo','Cuneo'],['Enna','Enna'],['Fermo','Fermo'],['Ferrara','Ferrara'],['Firenze','Florence'],['Foggia','Foggia'],['ForlГ¬-Cesena','ForlГ¬-Cesena'],['Frosinone','Frosinone'],['Genova','Genoa'],['Gorizia','Gorizia'],['Grosseto','Grosseto'],['Imperia','Imperia'],['Isernia','Isernia'],['L'Aquila','LвЂ™Aquila'],['La Spezia','La Spezia'],['Latina','Latina'],['Lecce','Lecce'],['Lecco','Lecco'],['Livorno','Livorno'],['Lodi','Lodi'],['Lucca','Lucca'],['Macerata','Macerata'],['Mantova','Mantua'],['Massa-Carrara','Massa and Carrara'],['Matera','Matera'],['Medio Campidano','Medio Campidano'],['Messina','Messina'],['Milano','Milan'],['Modena','Modena'],['Monza e Brianza','Monza and Brianza'],['Napoli','Naples'],['Novara','Novara'],['Nuoro','Nuoro'],['Ogliastra','Ogliastra'],['Olbia-Tempio','Olbia-Tempio'],['Oristano','Oristano'],['Padova','Padua'],['Palermo','Palermo'],['Parma','Parma'],['Pavia','Pavia'],['Perugia','Perugia'],['Pesaro e Urbino','Pesaro and Urbino'],['Pescara','Pescara'],['Piacenza','Piacenza'],['Pisa','Pisa'],['Pistoia','Pistoia'],['Pordenone','Pordenone'],['Potenza','Potenza'],['Prato','Prato'],['Ragusa','Ragusa'],['Ravenna','Ravenna'],['Reggio Calabria','Reggio Calabria'],['Reggio Emilia','Reggio Emilia'],['Rieti','Rieti'],['Rimini','Rimini'],['Roma','Rome'],['Rovigo','Rovigo'],['Salerno','Salerno'],['Sassari','Sassari'],['Savona','Savona'],['Siena','Siena'],['Siracusa','Syracuse'],['Sondrio','Sondrio'],['Taranto','Taranto'],['Teramo','Teramo'],['Terni','Terni'],['Torino','Turin'],['Trapani','Trapani'],['Trento','Trentino'],['Treviso','Treviso'],['Trieste','Trieste'],['Udine','Udine'],['Varese','Varese'],['Venezia','Venice'],['Verbano-Cusio-Ossola','Verbano-Cusio-Ossola'],['Vercelli','Vercelli'],['Verona','Verona'],['Vibo Valentia','Vibo Valentia'],['Vicenza','Vicenza'],['Viterbo','Viterbo']]"
                      >
                        Италия
                      </option>
                      <option
                        value="Japan"
                        data-provinces="[['Aichi','Aichi'],['Akita','Akita'],['Aomori','Aomori'],['Chiba','Chiba'],['Ehime','Ehime'],['Fukui','Fukui'],['Fukuoka','Fukuoka'],['Fukushima','Fukushima'],['Gifu','Gifu'],['Gunma','Gunma'],['Hiroshima','Hiroshima'],['HokkaidЕЌ','Hokkaido'],['HyЕЌgo','Hyogo'],['Ibaraki','Ibaraki'],['Ishikawa','Ishikawa'],['Iwate','Iwate'],['Kagawa','Kagawa'],['Kagoshima','Kagoshima'],['Kanagawa','Kanagawa'],['Kumamoto','Kumamoto'],['KyЕЌto','Kyoto'],['KЕЌchi','Kochi'],['Mie','Mie'],['Miyagi','Miyagi'],['Miyazaki','Miyazaki'],['Nagano','Nagano'],['Nagasaki','Nagasaki'],['Nara','Nara'],['Niigata','Niigata'],['Okayama','Okayama'],['Okinawa','Okinawa'],['Saga','Saga'],['Saitama','Saitama'],['Shiga','Shiga'],['Shimane','Shimane'],['Shizuoka','Shizuoka'],['Tochigi','Tochigi'],['Tokushima','Tokushima'],['Tottori','Tottori'],['Toyama','Toyama'],['TЕЌkyЕЌ','Tokyo'],['Wakayama','Wakayama'],['Yamagata','Yamagata'],['Yamaguchi','Yamaguchi'],['Yamanashi','Yamanashi'],['ЕЊita','Oita'],['ЕЊsaka','Osaka']]"
                      >
                        Япония
                      </option>
                      <option
                        value="Malaysia"
                        data-provinces="[['Johor','Johor'],['Kedah','Kedah'],['Kelantan','Kelantan'],['Kuala Lumpur','Kuala Lumpur'],['Labuan','Labuan'],['Melaka','Malacca'],['Negeri Sembilan','Negeri Sembilan'],['Pahang','Pahang'],['Penang','Penang'],['Perak','Perak'],['Perlis','Perlis'],['Putrajaya','Putrajaya'],['Sabah','Sabah'],['Sarawak','Sarawak'],['Selangor','Selangor'],['Terengganu','Terengganu']]"
                      >
                        Малайзия
                      </option>
                      <option value="Netherlands" data-provinces="[]">
                        Нидерланды
                      </option>
                      <option
                        value="New Zealand"
                        data-provinces="[['Auckland','Auckland'],['Bay of Plenty','Bay of Plenty'],['Canterbury','Canterbury'],['Chatham Islands','Chatham Islands'],['Gisborne','Gisborne'],['Hawke's Bay','HawkeвЂ™s Bay'],['Manawatu-Wanganui','ManawatЕ«-Whanganui'],['Marlborough','Marlborough'],['Nelson','Nelson'],['Northland','Northland'],['Otago','Otago'],['Southland','Southland'],['Taranaki','Taranaki'],['Tasman','Tasman'],['Waikato','Waikato'],['Wellington','Wellington'],['West Coast','West Coast']]"
                      >
                        Новая Зеландия
                      </option>
                      <option value="Norway" data-provinces="[]">
                        Норвегия
                      </option>
                      <option value="Poland" data-provinces="[]">
                        Польша
                      </option>
                      <option
                        value="Portugal"
                        data-provinces="[['Aveiro','Aveiro'],['AГ§ores','Azores'],['Beja','Beja'],['Braga','Braga'],['BraganГ§a','BraganГ§a'],['Castelo Branco','Castelo Branco'],['Coimbra','Coimbra'],['Faro','Faro'],['Guarda','Guarda'],['Leiria','Leiria'],['Lisboa','Lisbon'],['Madeira','Madeira'],['Portalegre','Portalegre'],['Porto','Porto'],['SantarГ©m','SantarГ©m'],['SetГєbal','SetГєbal'],['Viana do Castelo','Viana do Castelo'],['Vila Real','Vila Real'],['Viseu','Viseu'],['Г‰vora','Г‰vora']]"
                      >
                        Португалия
                      </option>
                      <option value="Singapore" data-provinces="[]">
                        Сингапур
                      </option>
                      <option
                        value="South Korea"
                        data-provinces="[['Busan','Busan'],['Chungbuk','North Chungcheong'],['Chungnam','South Chungcheong'],['Daegu','Daegu'],['Daejeon','Daejeon'],['Gangwon','Gangwon'],['Gwangju','Gwangju City'],['Gyeongbuk','North Gyeongsang'],['Gyeonggi','Gyeonggi'],['Gyeongnam','South Gyeongsang'],['Incheon','Incheon'],['Jeju','Jeju'],['Jeonbuk','North Jeolla'],['Jeonnam','South Jeolla'],['Sejong','Sejong'],['Seoul','Seoul'],['Ulsan','Ulsan']]"
                      >
                        Южная Корея
                      </option>
                      <option
                        value="Spain"
                        data-provinces="[['A CoruГ±a','A CoruГ±a'],['Albacete','Albacete'],['Alicante','Alicante'],['AlmerГ­a','AlmerГ­a'],['Asturias','Asturias Province'],['Badajoz','Badajoz'],['Balears','Balears Province'],['Barcelona','Barcelona'],['Burgos','Burgos'],['Cantabria','Cantabria Province'],['CastellГіn','CastellГіn'],['Ceuta','Ceuta'],['Ciudad Real','Ciudad Real'],['Cuenca','Cuenca'],['CГЎceres','CГЎceres'],['CГЎdiz','CГЎdiz'],['CГіrdoba','CГіrdoba'],['Girona','Girona'],['Granada','Granada'],['Guadalajara','Guadalajara'],['GuipГєzcoa','Gipuzkoa'],['Huelva','Huelva'],['Huesca','Huesca'],['JaГ©n','JaГ©n'],['La Rioja','La Rioja Province'],['Las Palmas','Las Palmas'],['LeГіn','LeГіn'],['Lleida','Lleida'],['Lugo','Lugo'],['Madrid','Madrid Province'],['Melilla','Melilla'],['Murcia','Murcia'],['MГЎlaga','MГЎlaga'],['Navarra','Navarra'],['Ourense','Ourense'],['Palencia','Palencia'],['Pontevedra','Pontevedra'],['Salamanca','Salamanca'],['Santa Cruz de Tenerife','Santa Cruz de Tenerife'],['Segovia','Segovia'],['Sevilla','Seville'],['Soria','Soria'],['Tarragona','Tarragona'],['Teruel','Teruel'],['Toledo','Toledo'],['Valencia','Valencia'],['Valladolid','Valladolid'],['Vizcaya','Biscay'],['Zamora','Zamora'],['Zaragoza','Zaragoza'],['ГЃlava','ГЃlava'],['ГЃvila','ГЃvila']]"
                      >
                        Испания
                      </option>
                      <option value="Sweden" data-provinces="[]">
                        Швеция
                      </option>
                      <option value="Switzerland" data-provinces="[]">
                        Швейцария
                      </option>
                      <option
                        value="United Arab Emirates"
                        data-provinces="[['Abu Dhabi','Abu Dhabi'],['Ajman','Ajman'],['Dubai','Dubai'],['Fujairah','Fujairah'],['Ras al-Khaimah','Ras al-Khaimah'],['Sharjah','Sharjah'],['Umm al-Quwain','Umm al-Quwain']]"
                      >
                        Объединенные Арабские Эмираты
                      </option>
                      <option
                        value="United Kingdom"
                        data-provinces="[['British Forces','British Forces'],['England','England'],['Northern Ireland','Northern Ireland'],['Scotland','Scotland'],['Wales','Wales']]"
                      >
                        Великобритания
                      </option>
                      <option value="Vietnam" data-provinces="[]">
                        Вьетнам
                      </option>
                    </select>
                  </div>
                  <div className="grid-2">
                    <input type="text" placeholder="Город*" />
                    <input type="text" placeholder="Улица,..." />
                  </div>
                  <div className="grid-2">
                    <div className="tf-select">
                      <select className="text-title" data-default="">
                        <option value="Choose State">Выберите штат</option>
                        <option value="California">Калифорния</option>
                        <option value="Alabama">Алабам</option>
                        <option value="Alaska">Аляска</option>
                        <option value="Arizona">Аризона</option>
                        <option value="Arkansas">Арканзас</option>
                        <option value="Florida">Флорида</option>
                        <option value="Georgia">Грузия</option>
                        <option value="Hawaii">Гавайи</option>
                        <option value="Washington">Вашингтон</option>
                        <option value="Texas">Техас</option>
                        <option value="Iowa">Айова</option>
                        <option value="Nevada">Невада</option>
                        <option value="Illinois">Иллинойс</option>
                      </select>
                    </div>
                    <input type="text" placeholder="Почтовый индекс*" />
                  </div>
                  <textarea placeholder="Напишите заметку..." defaultValue={""} />
                </form>
              </div>
              <div className="wrap">
                <h5 className="title">Выберите вариант оплаты:</h5>
                <form
                  className="form-payment"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="payment-box" id="payment-box">
                    <div className="payment-item payment-choose-card active">
                      <label
                        htmlFor="credit-card-method"
                        className="payment-header"
                        data-bs-toggle="collapse"
                        data-bs-target="#credit-card-payment"
                        aria-controls="credit-card-payment"
                      >
                        <input
                          type="radio"
                          name="payment-method"
                          className="tf-check-rounded"
                          id="credit-card-method"
                          defaultChecked
                        />
                        <span className="text-title">Кредитная карта</span>
                      </label>
                      <div
                        id="credit-card-payment"
                        className="collapse show"
                        data-bs-parent="#payment-box"
                      >
                        <div className="payment-body">
                          <p className="text-secondary">
                            Произведите оплату непосредственно на наш банковский счет.
                            Ваш заказ не будет отправлен до тех пор, пока на нем не поступят средства.
                            очищены на нашем счете.
                          </p>
                          <div className="input-payment-box">
                            <input type="text" placeholder="Имя на карте*" />
                            <div className="ip-card">
                              <input type="text" placeholder="Номера карт*" />
                              <div className="list-card">
                                <Image
                                  width={48}
                                  height={16}
                                  alt="карта"
                                  src="/images/payment/payment-7.png"
                                />
                                <Image
                                  width={21}
                                  height={16}
                                  alt="карта"
                                  src="/images/payment/payment-8.png"
                                />
                                <Image
                                  width={22}
                                  height={16}
                                  alt="карта"
                                  src="/images/payment/payment-9.png"
                                />
                                <Image
                                  width={24}
                                  height={16}
                                  alt="карта"
                                  src="/images/payment/payment-10.png"
                                />
                              </div>
                            </div>
                            <div className="grid-2">
                              <input type="date" />
                              <input type="text" placeholder="Код CVV*" />
                            </div>
                          </div>
                          <div className="check-save">
                            <input
                              type="checkbox"
                              className="tf-check"
                              id="check-card"
                              defaultChecked
                            />
                            <label htmlFor="check-card">
                              Сохранить данные карты
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="payment-item">
                      <label
                        htmlFor="delivery-method"
                        className="payment-header collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#delivery-payment"
                        aria-controls="delivery-payment"
                      >
                        <input
                          type="radio"
                          name="payment-method"
                          className="tf-check-rounded"
                          id="delivery-method"
                        />
                        <span className="text-title">Наложенным платежом</span>
                      </label>
                      <div
                        id="delivery-payment"
                        className="collapse"
                        data-bs-parent="#payment-box"
                      />
                    </div>
                    <div className="payment-item">
                      <label
                        htmlFor="apple-method"
                        className="payment-header collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#apple-payment"
                        aria-controls="apple-payment"
                      >
                        <input
                          type="radio"
                          name="payment-method"
                          className="tf-check-rounded"
                          id="apple-method"
                        />
                        <span className="text-title apple-pay-title">
                          <Image
                            alt="яблоко"
                            src="/images/payment/applePay.png"
                            width={13}
                            height={18}
                          />
                          Apple Pay
                        </span>
                      </label>
                      <div
                        id="apple-payment"
                        className="collapse"
                        data-bs-parent="#payment-box"
                      />
                    </div>
                    <div className="payment-item paypal-item">
                      <label
                        htmlFor="paypal-method"
                        className="payment-header collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#paypal-method-payment"
                        aria-controls="paypal-method-payment"
                      >
                        <input
                          type="radio"
                          name="payment-method"
                          className="tf-check-rounded"
                          id="paypal-method"
                        />
                        <span className="paypal-title">
                          <Image
                            alt="яблоко"
                            src="/images/payment/paypal.png"
                            width={60}
                            height={16}
                          />
                        </span>
                      </label>
                      <div
                        id="paypal-method-payment"
                        className="collapse"
                        data-bs-parent="#payment-box"
                      />
                    </div>
                  </div>
                  <button className="tf-btn btn-onsurface">
                    Оплата
                    <i className="icon-arrow-up-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-1">
            <div className="line-separation" />
          </div>
          <div className="col-xl-5">
            <div className="flat-spacing flat-sidebar-checkout">
              <div className="sidebar-checkout-content">
                <h5 className="title">Корзина</h5>
                {!cartProducts.length ? (
                  <div className="mx-4 my-4 text-center">
                    <div>Ваша корзина пуста</div>
                    <Link
                      href={`/shop-list`}
                      className="tf-btn  btn-white has-border mt-2 mx-auto"
                    >
                      Смотреть товары
                    </Link>
                  </div>
                ) : (
                  <div className="list-product">
                    {cartProducts.map((product, i) => (
                      <div key={i} className="item-product">
                        <Link
                          href={`/product-detail/${product.id}`}
                          className="img-product"
                        >
                          <Image
                            alt="img-продукт"
                            src={product.imgSrc}
                            width={600}
                            height={600}
                          />
                        </Link>
                        <div className="content-box">
                          <div className="info">
                            <Link
                              href={`/product-detail/${product.id}`}
                              className="name-product link text-title"
                            >
                              {product.title}
                            </Link>
                            <div className="variant text-caption-1">
                              Серый, размер C
                            </div>
                          </div>
                          <div className="total-price text-button">
                            <span className="count">{product.quantity}</span>Х
                            <span className="price">
                              ₽{product.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="sec-discount">
                  <div className="ip-discount-code">
                    <input type="text" placeholder="Введите код скидки" />
                    <button className="tf-btn btn-onsurface">Применить код</button>
                  </div>
                  <p className="text-body-default">
                    Код скидки используется только для заказов на общую сумму
                    товары стоимостью более 500,00 ₽
                  </p>
                </div>
                <div className="sec-total-price">
                  <div className="top">
                    <div className="item d-flex align-items-center justify-content-between text-button">
                      <span>Доставка</span>
                      <span>Бесплатно</span>
                    </div>
                    <div className="item d-flex align-items-center justify-content-between text-button">
                      <span>Скидки</span>
                      <span>-₽80.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <h5 className="d-flex justify-content-between">
                      <span>Итого</span>
                      <span className="total-price-checkout">
                        ₽{totalPrice.toFixed(2)}
                      </span>
                    </h5>
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

