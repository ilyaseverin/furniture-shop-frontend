import ProductCard from "@/components/productCards/ProductCard";
import { getBranchProducts } from "@/lib/api/catalog";
import { branchProductsToProducts } from "@/lib/api/adapters";
import { getSelectedBranchId } from "@/lib/getSelectedBranchId";
import { products as staticProducts } from "@/data/products";
import type { Product } from "@/types/product";
import React from "react";

interface ProductGridProps {
  cardStyle?: number;
  branchId?: number;
  limit?: number;
  categoryId?: number;
}

export default async function ProductGrid({
  cardStyle = 1,
  branchId,
  limit = 8,
  categoryId,
}: ProductGridProps) {
  const effectiveBranchId = branchId ?? (await getSelectedBranchId());
  let displayProducts: Product[] = staticProducts as Product[];

  try {
    const response = await getBranchProducts({
      branchId: effectiveBranchId,
      limit,
      categoryId,
    });
    if (response.items.length > 0) {
      displayProducts = branchProductsToProducts(response.items);
    }
  } catch {
    // API unavailable — fall back to static data
  }

  return (
    <section className="flat-spacing-5 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Наш выбор для вас</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Свежие стили прямо сейчас! Поднимите свой внешний вид.
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
