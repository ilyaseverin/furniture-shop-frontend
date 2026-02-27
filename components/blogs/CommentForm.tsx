"use client";

export default function CommentForm() {
  return (
    <div className="leave-comment">
      <h4 className="leave-comment-heading mb_24">Оставить комментарий</h4>
      <form className="form-leave-comment" onSubmit={(e) => e.preventDefault()}>
        <div className="wrap">
          <div className="cols">
            <fieldset className="">
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
            <fieldset className="">
              <input
                className=""
                type="email"
                placeholder="Ваш email*"
                name="email"
                tabIndex={2}
                defaultValue=""
                aria-required="true"
                required
              />
            </fieldset>
          </div>
          <fieldset className="">
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
        </div>
        <div className="button-submit">
          <button className="tf-btn btn-onsurface" type="submit">
            Оставить отзыв <i className="icon-arrow-up-right" />
          </button>
        </div>
      </form>
    </div>
  );
}
