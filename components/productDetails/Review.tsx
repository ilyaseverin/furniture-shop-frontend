import React from "react";

export default function Review({ headingStyle2 = false }) {
  return (
    <>
      <div className="tab-reviews-heading">
        <div className="top">
          <div className="text-center">
            <div className="number text-display">4.9</div>
            <div className="list-star">
              <i className="icon icon-star" />
              <i className="icon icon-star" />
              <i className="icon icon-star" />
              <i className="icon icon-star" />
              <i className="icon icon-star" />
            </div>
            <p>(168 оценок)</p>
          </div>
          <div className="rating-score">
            <div className="item">
              <div className="number-1 text-caption-1">5</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "94.67%" }} />
              </div>
              <div className="number-2 text-caption-1">59</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">4</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "60%" }} />
              </div>
              <div className="number-2 text-caption-1">46</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">3</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "0%" }} />
              </div>
              <div className="number-2 text-caption-1">0</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">2</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "0%" }} />
              </div>
              <div className="number-2 text-caption-1">0</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">1</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "0%" }} />
              </div>
              <div className="number-2 text-caption-1">0</div>
            </div>
          </div>
        </div>
        <div>
          <div className="tf-btn btn-white has-border radius-4 btn-comment-review btn-cancel-review">
            Отменить отзыв
          </div>
          <div className="tf-btn btn-white has-border radius-4 btn-comment-review btn-write-review">
            Написать отзыв
          </div>
        </div>
      </div>
      <div className="reply-comment style-1 cancel-review-wrap">
        <div className="d-flex mb_24 gap-20 align-items-center justify-content-between flex-wrap">
          <h4 className="">03 комментария</h4>
          <div className="d-flex align-items-center gap-12">
            <div className="text-caption-1">Сортировать по:</div>
            <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
              <div className="btn-select">
                <span className="text-sort-value">Сначала новые</span>
                <span className="icon icon-down" />
              </div>
              <div className="dropdown-menu">
                <div className="select-item active">
                  <span className="text-value-item">Сначала новые</span>
                </div>
                <div className="select-item">
                  <span className="text-value-item">Самый старый</span>
                </div>
                <div className="select-item">
                  <span className="text-value-item">Самый популярный</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reply-comment-wrap">
          <div className="reply-comment-item">
            <div className="user">
              <div className="image">
                <img
                  alt=""
                  src="/images/avatar/user-default.jpg"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                {headingStyle2 ? (
                  <div>
                    <a href="#" className="link">
                      Одежда превосходного качества, превосходящая ожидания.
                    </a>
                  </div>
                ) : (
                  <h6>
                    <a href="#" className="link">
                      Одежда превосходного качества, превосходящая ожидания.
                    </a>
                  </h6>
                )}

                <div className="day text-secondary-2 text-caption-1">
                  1 день назад    -
                </div>
              </div>
            </div>
            <p className="text-secondary">
              Отличная тема – мы искали тему с большим количеством встроенных
              функции и гибкость, и это было идеально. Мы ожидали, что нам понадобится
              нанять разработчика, чтобы добавить несколько последних штрихов. Но мы
              на самом деле удалось сделать все самим. У нас был один маленький
              запрос и оказанная поддержка были быстрыми и полезными.
            </p>
          </div>
          <div className="reply-comment-item type-reply">
            <div className="user">
              <div className="image">
                <img
                  alt=""
                  src="/images/avatar/admin-default.jpg"
                  width={104}
                  height={104}
                />
              </div>
              <div>
                {headingStyle2 ? (
                  <div>
                    <a href="#" className="link">
                      Ответ от Hitta
                    </a>
                  </div>
                ) : (
                  <h6>
                    <a href="#" className="link">
                      Ответ от Hitta
                    </a>
                  </h6>
                )}

                <div className="day text-secondary-2 text-caption-1">
                  1 день назад    -
                </div>
              </div>
            </div>
            <p className="text-secondary">
              Нам нравится это слышать! Больше всего в Hitta нам нравится то, как
              во многом это дает владельцам магазинов, таким как вы, возможность построить красивый
              сайт без необходимости нанимать разработчика :) Спасибо за это
              фантастический обзор!
            </p>
          </div>
          <div className="reply-comment-item">
            <div className="user">
              <div className="image">
                <img
                  alt=""
                  src="/images/avatar/user-default.jpg"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                {headingStyle2 ? (
                  <div>
                    <a href="#" className="link">
                      Одежда превосходного качества, превосходящая ожидания.
                    </a>
                  </div>
                ) : (
                  <h6>
                    <a href="#" className="link">
                      Одежда превосходного качества, превосходящая ожидания.
                    </a>
                  </h6>
                )}

                <div className="day text-secondary-2 text-caption-1">
                  1 день назад    -
                </div>
              </div>
            </div>
            <p className="text-secondary">
              Отличная тема – мы искали тему с большим количеством встроенных
              функции и гибкость, и это было идеально. Мы ожидали, что нам понадобится
              нанять разработчика, чтобы добавить несколько последних штрихов. Но мы
              на самом деле удалось сделать все самим. У нас был один маленький
              запрос и оказанная поддержка были быстрыми и полезными.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
