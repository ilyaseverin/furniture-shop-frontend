import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions1 from "@/components/productDetails/Descriptions1";
import Details1 from "@/components/productDetails/Details1";
import Shopgram from "@/components/homes/home-2/Shopgram";
import {
  getBranchProductBySlug,
  getCollection,
  getCategoryById,
} from "@/lib/api/catalog";
import {
  branchProductToProduct,
  branchProductsToProducts,
} from "@/lib/api/adapters";
import { getSelectedBranchId } from "@/lib/getSelectedBranchId";
import type { Product } from "@/types/product";
import { notFound } from "next/navigation";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Детали товара || Hitta",
  description: "Hitta — малые архитектурные формы в скандинавском стиле",
};

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ categoryId?: string }>;
}) {
  const { slug } = await params;
  const { categoryId: categoryIdParam } = await searchParams;

  const COLLECTION_INSTAGRAM_ID = Number(process.env.NEXT_PUBLIC_COLLECTION_INSTAGRAM_ID) || 3;

  let product: Product;
  let category: { id: number; name: string; slug: string } | null = null;
  let galleryProducts: Product[] | undefined;

  try {
    const branchId = await getSelectedBranchId();
    if (!branchId) {
      notFound();
    }
    const apiProduct = await getBranchProductBySlug(slug, branchId);
    product = branchProductToProduct(apiProduct);

    if (apiProduct.categoryId && apiProduct.categoryName) {
      category = {
        id: apiProduct.categoryId,
        name: apiProduct.categoryName,
        slug: "",
      };
    } else if (categoryIdParam) {
      const cat = await getCategoryById(Number(categoryIdParam));
      category = { id: cat.id, name: cat.name, slug: cat.slug };
    }

    try {
      const galleryCollection = await getCollection(COLLECTION_INSTAGRAM_ID, apiProduct.branchId);
      if (galleryCollection.products?.length) {
        galleryProducts = branchProductsToProducts(galleryCollection.products);
      }
    } catch {
      // gallery collection unavailable
    }
  } catch {
    notFound();
  }

  return (
    <>
      <Breadcumb product={product} category={category} />
      <Details1 product={product} />
      <Descriptions1 product={product} />
      <Shopgram products={galleryProducts} />
    </>
  );
}
