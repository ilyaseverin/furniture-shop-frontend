import ProductGrid from "@/components/common/ProductGrid";

import Features from "@/components/common/Features";
import Categories from "@/components/homes/home-2/Categories";
import Collections2 from "@/components/homes/home-2/Collections2";
import Hero from "@/components/homes/home-2/Hero";
import ProductCarousel from "@/components/homes/home-2/ProductCarousel";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import Blogs from "@/components/common/Blogs";
import Shopgram from "@/components/homes/home-2/Shopgram";
import { getCollection } from "@/lib/api/catalog";
import { branchProductsToProducts } from "@/lib/api/adapters";
import { getSelectedBranchId } from "@/lib/getSelectedBranchId";

import Header1 from "@/components/headers/Header1";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная || Hitta",
  description: "Hitta — малые архитектурные формы в скандинавском стиле",
};

const COLLECTION_HERO_ID = Number(process.env.NEXT_PUBLIC_COLLECTION_HERO_ID) || 1;
const COLLECTION_PICKS_ID = Number(process.env.NEXT_PUBLIC_COLLECTION_PICKS_ID) || 2;
const COLLECTION_INSTAGRAM_ID = Number(process.env.NEXT_PUBLIC_COLLECTION_INSTAGRAM_ID) || 3;
const COLLECTION_CAROUSEL_ID = Number(process.env.NEXT_PUBLIC_COLLECTION_CAROUSEL_ID) || 4;

export default async function page() {
  const branchId = await getSelectedBranchId();

  // Load collections in parallel (only if branchId is available)
  const [heroResult, carouselResult, instagramResult] = branchId
    ? await Promise.allSettled([
        getCollection(COLLECTION_HERO_ID, branchId),
        getCollection(COLLECTION_CAROUSEL_ID, branchId),
        getCollection(COLLECTION_INSTAGRAM_ID, branchId),
      ])
    : [
        { status: "rejected" as const, reason: "no branch" },
        { status: "rejected" as const, reason: "no branch" },
        { status: "rejected" as const, reason: "no branch" },
      ];

  const heroCollection = heroResult.status === "fulfilled" ? heroResult.value : undefined;
  const carouselCollection = carouselResult.status === "fulfilled" ? carouselResult.value : undefined;
  const instagramCollection = instagramResult.status === "fulfilled" ? instagramResult.value : undefined;

  const heroProducts = heroCollection?.products?.length
    ? branchProductsToProducts(heroCollection.products)
    : undefined;

  const carouselProducts = carouselCollection?.products?.length
    ? branchProductsToProducts(carouselCollection.products)
    : undefined;

  const carouselTitle = carouselCollection?.title || undefined;

  const instagramProducts = instagramCollection?.products?.length
    ? branchProductsToProducts(instagramCollection.products)
    : undefined;

  return (
    <>
      <Topbar1 />
      <Header1 />
      <Hero products={heroProducts} />
      <Categories />
      <ProductGrid cardStyle={2} collectionId={COLLECTION_PICKS_ID} branchId={branchId} />
      <Collections2 />
      <ProductCarousel products={carouselProducts} title={carouselTitle} />
      <Features parentClass="flat-spacing-2 line-top-container section-testimonials" />
      <div style={{ display: "none" }}>
        <Blogs parentClass="flat-spacing-2 section-news-insight" />
      </div>
      <Shopgram products={instagramProducts} />
    </>
  );
}
