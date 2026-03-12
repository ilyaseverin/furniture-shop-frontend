import Link from "next/link";
import { categories2 } from "@/data/collections";
import { getCategories } from "@/lib/api/catalog";
import React from "react";

const ICON_MAP: Record<string, string> = {
  default: "icon-frame-4",
};

export default async function Categories() {
  let displayCategories = categories2;

  try {
    const response = await getCategories({ limit: 5 });
    if (response.items.length > 0) {
      displayCategories = response.items.map((cat, i) => ({
        iconClass: categories2[i]?.iconClass || ICON_MAP.default,
        title: cat.name,
        itemCount: "",
        delay: `${i * 0.1}s`,
        slug: cat.slug,
        id: cat.id,
      }));
    }
  } catch {
    // API unavailable — use static fallback
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
                Свежие стили прямо сейчас! Поднимите свой внешний вид.
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
                        href={
                          "id" in category
                            ? `/shop-list?categoryId=${category.id}`
                            : "/shop-list"
                        }
                        className="link"
                      >
                        {category.title}
                      </Link>
                    </h5>
                    {category.itemCount && (
                      <p className="text-body-default text_secondary">
                        {category.itemCount}
                      </p>
                    )}
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
