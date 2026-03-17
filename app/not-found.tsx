import Link from "next/link";
import Topbar1 from "@/components/headers/Topbar1";
import Header1 from "@/components/headers/Header1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена || Hitta",
  description: "Hitta — малые архитектурные формы в скандинавском стиле",
};

export default function NotFound() {
  return (
    <>
    <Topbar1 />
    <Header1 />
    <section className="flat-spacing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h1 className="mb_30">404</h1>
            <h4 className="mb_16">Страница не найдена</h4>
            <p className="text-secondary mb_30">
              Запрашиваемая страница не существует или была перемещена.
            </p>
            <Link href="/" className="tf-btn btn-fill">
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
