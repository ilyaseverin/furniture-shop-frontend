import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getCategories, getCategoryById } from "@/lib/api/catalog";
import { categoryToCategoryItem } from "@/lib/api/adapters";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const category = await getCategoryById(Number(id));
    return {
      title: `${category.name} || Hitta`,
      description: category.description || `Подкатегории ${category.name}`,
    };
  } catch {
    return { title: "Каталог || Hitta" };
  }
}

export default async function SubcategoriesPage({ params }: PageProps) {
  const { id } = await params;
  const parentId = Number(id);

  let parentName = "";
  let subcategories: { id: number; title: string; slug: string; image: string }[] = [];

  try {
    const [parentCategory, response] = await Promise.all([
      getCategoryById(parentId),
      getCategories({ parentId, limit: 50 }),
    ]);

    parentName = parentCategory.name;

    if (response.items.length > 0) {
      subcategories = response.items.map(categoryToCategoryItem);
    }
  } catch {
    // API unavailable
  }

  // No subcategories — redirect straight to products
  if (subcategories.length === 0) {
    redirect(`/shop-list?categoryId=${parentId}`);
  }

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center">
          <h3>{parentName}</h3>
          <p className="text-body-default text_secondary">
            Выберите подкатегорию
          </p>
        </div>
        <div className="tf-grid-layout-md wrap-box-location md-col-3">
          {subcategories.map((cat) => (
            <div key={cat.id}>
              <div className="location-item hover-img">
                <Link href={`/shop-list?categoryId=${cat.id}`} className="img-style">
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
                    <Link href={`/shop-list?categoryId=${cat.id}`} className="link">
                      {cat.title}
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
