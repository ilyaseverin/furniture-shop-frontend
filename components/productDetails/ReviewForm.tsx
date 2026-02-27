"use client";
export default function ReviewForm() {
  return (
    <form
      className="form-write-review write-review-wrap"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="heading">
        <h4>Написать отзыв:</h4>
        <div className="list-rating-check">
          <input type="radio" id="star5" name="rate" defaultValue={5} />
          <label htmlFor="star5" title="текст" />
          <input type="radio" id="star4" name="rate" defaultValue={4} />
          <label htmlFor="star4" title="текст" />
          <input type="radio" id="star3" name="rate" defaultValue={3} />
          <label htmlFor="star3" title="текст" />
          <input type="radio" id="star2" name="rate" defaultValue={2} />
          <label htmlFor="star2" title="текст" />
          <input type="radio" id="star1" name="rate" defaultValue={1} />
          <label htmlFor="star1" title="текст" />
        </div>
      </div>
      <div className="mb_32">
        <div className="mb_8">Название обзора</div>
        <fieldset className="mb_20">
          <input
            className=""
            type="text"
            placeholder="Дайте вашему отзыву название"
            name="text"
            tabIndex={2}
            defaultValue=""
            aria-required="true"
            required
          />
        </fieldset>
        <div className="mb_8">Обзор</div>
        <fieldset className="d-flex mb_20">
          <textarea
            className=""
            rows={4}
            placeholder="Напишите свой комментарий здесь"
            tabIndex={2}
            aria-required="true"
            required
            defaultValue={""}
          />
        </fieldset>
        <div className="cols mb_20">
          <fieldset className="">
            <input
              className=""
              type="text"
              placeholder="Ваше имя (публично)"
              name="text"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
          <fieldset className="">
            <input
              className=""
              type="email"
              placeholder="Ваш адрес электронной почты (частный)"
              name="email"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
        </div>
        <div className="d-flex align-items-center check-save gap-12">
          <input
            type="checkbox"
            name="availability"
            className="tf-check"
            id="check1"
          />
          <label className="text-secondary text-caption-1" htmlFor="check1">
            Сохраните мое имя, адрес электронной почты и веб-сайт в этом браузере, чтобы в следующий раз я
            комментарий.
          </label>
        </div>
      </div>
      <div className="button-submit">
        <button className="tf-btn btn-onsurface radius-4" type="submit">
          Отправить отзыв
        </button>
      </div>
    </form>
  );
}
