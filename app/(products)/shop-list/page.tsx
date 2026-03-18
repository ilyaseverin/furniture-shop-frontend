import Breadcumb from "@/components/common/Breadcumb";
import ShopCatalogStandard from "@/components/products/ShopCatalogStandard";
import { getBranchProducts, getCategoryById } from "@/lib/api/catalog";
import { branchProductsToProducts, getImageByType, imageUrl } from "@/lib/api/adapters";
import { getSelectedBranchId } from "@/lib/getSelectedBranchId";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Магазин || Hitta",
  description: "Hitta — малые архитектурные формы в скандинавском стиле",
};

interface PageProps {
  searchParams: Promise<{ categoryId?: string }>;
}

export default async function page({ searchParams }: PageProps) {
  const { categoryId } = await searchParams;
  const branchId = await getSelectedBranchId();

  let apiProducts;
  let bannerSrc = "/images/page-title/page-title-9.jpg";
  let categoryName = "Магазин";

  try {
    const response = await getBranchProducts({
      limit: 25,
      branchId,
      categoryId: categoryId ? Number(categoryId) : undefined,
    });
    if (response.items.length > 0) {
      apiProducts = branchProductsToProducts(response.items);
    }
  } catch {
    // API unavailable — component will use static fallback
  }

  if (categoryId) {
    try {
      const category = await getCategoryById(Number(categoryId));
      categoryName = category.name;
      const bgImg = getImageByType(category.images, "background");
      if (bgImg) {
        bannerSrc = imageUrl(bgImg.url);
      }
    } catch {
      // category fetch failed
    }
  }

  return (
    <>
      <Breadcumb
        imgSrc={bannerSrc}
        pageName={categoryName}
        pageTitle={categoryName}
        parentPage="Каталог"
      />
      <ShopCatalogStandard
        defaultActiveLayout={1}
        apiProducts={apiProducts}
        categoryId={categoryId ? Number(categoryId) : undefined}
      />
    </>
  );
}
