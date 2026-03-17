import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/lib/api/catalog";
import { categoryToCategoryItem } from "@/lib/api/adapters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог || Hitta",
  description: "Каталог категорий Hitta",
};

export default async function CatalogPage() {
  let categories: { id: number; title: string; slug: string; image: string; hasChildren?: boolean }[] = [];

  try {
    const response = await getCategories({ limit: 50 });
    const rootCategories = response.items.filter((cat) => cat.parentId === null || cat.parentId === 0);

    const childParentIds = new Set(
      response.items.filter((cat) => cat.parentId !== null && cat.parentId !== 0).map((cat) => cat.parentId)
    );

    categories = rootCategories.map((cat) => ({
      ...categoryToCategoryItem(cat),
      hasChildren: childParentIds.has(cat.id),
    }));
  } catch {
    // API unavailable
  }

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center">
          <h3>Каталог</h3>
          <p className="text-body-default text_secondary">
            Выберите категорию
          </p>
        </div>
        {categories.length === 0 ? (
          <div className="text-center text_secondary">Категории не найдены</div>
        ) : (
          <div className="tf-grid-layout-md wrap-box-location md-col-3">
            {categories.map((cat) => (
              <div key={cat.id}>
                <div className="location-item hover-img">
                  <Link
                    href={cat.hasChildren ? `/catalog/${cat.id}` : `/shop-list?categoryId=${cat.id}`}
                    className="img-style"
                  >
                    <Image
                      className="lazyload"
                      src={cat.image}
                      alt={cat.title}
                      width={390}
                      height={520}
                    />
                  </Link>
                  <div className="content">
                    <h5>
                      <Link
                        href={cat.hasChildren ? `/catalog/${cat.id}` : `/shop-list?categoryId=${cat.id}`}
                        className="link"
                      >
                        {cat.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
