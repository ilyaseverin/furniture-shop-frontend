"use client";

export default function QuestionMadal() {
  return (
    <div
      className="modal modalCentered fade tf-product-modal modal-part-content"
      id="ask_question"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Задать вопрос</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="overflow-y-auto">
            <form className="" onSubmit={(e) => e.preventDefault()}>
              <fieldset className="">
                <label>Имя *</label>
                <input
                  type="text"
                  placeholder=""
                  className=""
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <fieldset className="">
                <label>Электронная почта *</label>
                <input
                  type="email"
                  placeholder=""
                  className=""
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <fieldset className="">
                <label>Номер телефона</label>
                <input
                  type="number"
                  placeholder=""
                  className=""
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <fieldset className="">
                <label>Сообщение</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder=""
                  className=""
                  tabIndex={2}
                  aria-required="true"
                  required
                  defaultValue={""}
                />
              </fieldset>
              <button
                type="submit"
                className="tf-btn btn-onsurface radius-4 w-100"
              >
                Отправлять
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
