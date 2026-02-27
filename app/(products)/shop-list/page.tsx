import ShopCatalogStandard from "@/components/products/ShopCatalogStandard";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Магазин || GearO — интернет-магазин офисного оборудования на React и Next.js",
  description: "GearO — интернет-магазин офисного оборудования на React и Next.js",
};

export default function page() {
  return (
    <>
      <ShopCatalogStandard defaultActiveLayout={1} />
    </>
  );
}
