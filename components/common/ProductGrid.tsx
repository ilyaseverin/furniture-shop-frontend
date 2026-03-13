import ProductCard from "@/components/productCards/ProductCard";
import { getCollection, getBranchProducts } from "@/lib/api/catalog";
import { branchProductsToProducts } from "@/lib/api/adapters";
import { getSelectedBranchId } from "@/lib/getSelectedBranchId";
import type { Product } from "@/types/product";
import React from "react";

interface ProductGridProps {
  cardStyle?: number;
  branchId?: number;
  limit?: number;
  categoryId?: number;
  collectionId?: number;
}

export default async function ProductGrid({
  cardStyle = 1,
  branchId,
  limit = 8,
  categoryId,
  collectionId,
}: ProductGridProps) {
  const effectiveBranchId = branchId ?? (await getSelectedBranchId());
  let displayProducts: Product[] = [];
  let sectionTitle = "Наш выбор для вас";

  try {
    if (collectionId && effectiveBranchId) {
      const collection = await getCollection(collectionId, effectiveBranchId);
      if (collection.products.length > 0) {
        displayProducts = branchProductsToProducts(collection.products);
      }
      if (collection.title) {
        sectionTitle = collection.title;
      }
    } else {
      const response = await getBranchProducts({
        branchId: effectiveBranchId,
        limit,
        categoryId,
      });
      if (response.items.length > 0) {
        displayProducts = branchProductsToProducts(response.items);
      }
    }
  } catch {
    // API unavailable
  }

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <section className="flat-spacing-5 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">{sectionTitle}</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Качественное оборудование для вашего рабочего пространства.
              </p>
            </div>
            <div className="tf-grid-layout tf-col-2 lg-col-4">
              {displayProducts.map((product, index) => (
                <ProductCard
                  cardStyle={cardStyle}
                  product={product}
                  key={product.id ?? index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
