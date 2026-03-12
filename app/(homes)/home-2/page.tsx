import ProductGrid from "@/components/common/ProductGrid";

import Features from "@/components/common/Features";
import Categories from "@/components/homes/home-2/Categories";
import Collections2 from "@/components/homes/home-2/Collections2";
import Hero from "@/components/homes/home-2/Hero";
import ProductCarousel from "@/components/homes/home-2/ProductCarousel";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import Testimonials from "@/components/common/Testimonials";
import Blogs from "@/components/common/Blogs";
import Shopgram from "@/components/homes/home-2/Shopgram";
import { getBranchProducts } from "@/lib/api/catalog";
import { branchProductsToProducts } from "@/lib/api/adapters";
import { getSelectedBranchId } from "@/lib/getSelectedBranchId";

import Header1 from "@/components/headers/Header1";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная 02 || GearO — интернет-магазин офисного оборудования на React и Next.js",
  description: "GearO — интернет-магазин офисного оборудования на React и Next.js",
};

export default async function page() {
  const branchId = await getSelectedBranchId();

  let carouselProducts;
  try {
    const response = await getBranchProducts({ limit: 10, branchId });
    if (response.items.length > 0) {
      carouselProducts = branchProductsToProducts(response.items);
    }
  } catch {
    // API unavailable — carousel will use static fallback
  }

  return (
    <>
      <Topbar1 />
      <Header1 />
      <Hero />
      <Categories />
      <ProductGrid cardStyle={2} />
      <Collections2 branchId={branchId} />
      <ProductCarousel products={carouselProducts} />
      <Features parentClass="flat-spacing-2 line-top-container" />
      <Testimonials parentClass="flat-spacing-2 section-testimonials" />
      <Blogs parentClass="flat-spacing-2 section-news-insight" />
      <Shopgram />
    </>
  );
}
