import Link from "next/link";
import { getCategories } from "@/lib/api/catalog";
import React from "react";

const DEFAULT_ICON = "icon-frame-4";

export default async function Categories() {
  let displayCategories: { iconClass: string; title: string; delay: string; id: number }[] = [];

  try {
    const response = await getCategories({ limit: 5 });
    if (response.items.length > 0) {
      displayCategories = response.items.map((cat, i) => ({
        iconClass: DEFAULT_ICON,
        title: cat.name,
        delay: `${i * 0.1}s`,
        id: cat.id,
      }));
    }
  } catch {
    // API unavailable
  }

  if (displayCategories.length === 0) {
    return null;
  }

  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Магазин по категориям</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Найдите всё необходимое для вашего офиса.
              </p>
            </div>
            <div className="wrap-categories overflow-x-auto style-2 has-boxshadow">
              {displayCategories.map((category, index) => (
                <div
                  className="categories-item wow fadeInUp"
                  data-wow-delay={category.delay}
                  key={index}
                >
                  <div className="icon">
                    <i className={category.iconClass} />
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link
                        href={`/catalog/${category.id}`}
                        className="link"
                      >
                        {category.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
