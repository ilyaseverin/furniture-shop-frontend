import ShopCatalogStandard from "@/components/products/ShopCatalogStandard";
import { getBranchProducts } from "@/lib/api/catalog";
import { branchProductsToProducts } from "@/lib/api/adapters";
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

  return (
    <>
      <ShopCatalogStandard
        defaultActiveLayout={1}
        apiProducts={apiProducts}
        categoryId={categoryId ? Number(categoryId) : undefined}
      />
    </>
  );
}
