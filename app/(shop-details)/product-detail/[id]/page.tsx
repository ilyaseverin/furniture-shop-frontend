import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions1 from "@/components/productDetails/Descriptions1";
import Details1 from "@/components/productDetails/Details1";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import StickyProduct from "@/components/productDetails/StickyProduct";
import { allProducts } from "@/data/products";
import {
  getBranchProductById,
  getBranchProducts,
  getCategoryById,
} from "@/lib/api/catalog";
import {
  branchProductToProduct,
  branchProductsToProducts,
} from "@/lib/api/adapters";
import type { Product } from "@/types/product";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Детали товара || GearO — интернет-магазин офисного оборудования на React и Next.js",
  description:
    "GearO — интернет-магазин офисного оборудования на React и Next.js",
};

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ categoryId?: string }>;
}) {
  const { id } = await params;
  const { categoryId: categoryIdParam } = await searchParams;
  const numericId = Number(id);

  let product: Product;
  let relatedProducts: Product[] | undefined;
  let category: { id: number; name: string; slug: string } | null = null;

  try {
    const apiProduct = await getBranchProductById(numericId);
    product = branchProductToProduct(apiProduct);

    // Use category from product DTO if available (no extra request needed)
    if (apiProduct.categoryId && apiProduct.categoryName) {
      category = {
        id: apiProduct.categoryId,
        name: apiProduct.categoryName,
        slug: "",
      };
    } else if (categoryIdParam) {
      // Fallback: fetch category from URL param
      const cat = await getCategoryById(Number(categoryIdParam));
      category = { id: cat.id, name: cat.name, slug: cat.slug };
    }

    const relatedData = await getBranchProducts({
      branchId: apiProduct.branchId,
      limit: 4,
    });
    relatedProducts = branchProductsToProducts(
      relatedData.items.filter((p) => p.id !== apiProduct.id)
    );
  } catch {
    product = (allProducts.filter((p) => p.id == id)[0] || allProducts[0]) as unknown as Product;
  }

  return (
    <>
      <Breadcumb product={product} category={category} />
      <Details1 product={product} />
      <Descriptions1 />
      <RelatedProducts relatedProducts={relatedProducts} />
      <StickyProduct />
    </>
  );
}
