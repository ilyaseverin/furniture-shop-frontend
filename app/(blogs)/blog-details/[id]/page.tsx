import BlogDetails from "@/components/blogs/BlogDetails";
import ArticleScandinavian from "@/components/blogs/ArticleScandinavian";
import ArticleHitta from "@/components/blogs/ArticleHitta";
import Shopgram from "@/components/homes/home-2/Shopgram";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import type { Metadata } from "next";
import Breadcumb from "@/components/blogs/Breadcumb";
import { allBlogs } from "@/data/blogs";
import { getCollection } from "@/lib/api/catalog";
import { branchProductsToProducts } from "@/lib/api/adapters";
import { getSelectedBranchId } from "@/lib/getSelectedBranchId";
import type { Product } from "@/types/product";

export const metadata: Metadata = {
  title:
    "Детали блога || GearO — интернет-магазин офисного оборудования на React и Next.js",
  description: "GearO — интернет-магазин офисного оборудования на React и Next.js",
};

const COLLECTION_INSTAGRAM_ID = Number(process.env.NEXT_PUBLIC_COLLECTION_INSTAGRAM_ID) || 3;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = Number(id);

  let galleryProducts: Product[] | undefined;
  try {
    const branchId = await getSelectedBranchId();
    if (branchId) {
      const collection = await getCollection(COLLECTION_INSTAGRAM_ID, branchId);
      if (collection.products?.length) {
        galleryProducts = branchProductsToProducts(collection.products);
      }
    }
  } catch {
    // gallery unavailable
  }

  // Article 1: Scandinavian style
  if (numericId === 1) {
    return (
      <>
        <Topbar1 />
        <Header1 />
        <div className="main-content">
          <Breadcumb bgImage="/images/blog/poster.png" />
          <ArticleScandinavian />
          <Shopgram products={galleryProducts} />
        </div>
      </>
    );
  }

  // Article 2: Hitta
  if (numericId === 2) {
    return (
      <>
        <Topbar1 />
        <Header1 />
        <div className="main-content">
          <Breadcumb bgImage="/images/blog/poster-hitta.png" />
          <ArticleHitta />
          <Shopgram products={galleryProducts} />
        </div>
      </>
    );
  }

  // Other articles: default template
  const blog = allBlogs.find((p) => p.id === numericId);

  return (
    <>
      <Topbar1 />
      <Header1 />
      <div className="main-content">
        {blog ? (
          <>
            <Breadcumb />
            <BlogDetails blog={blog} />
            <Shopgram products={galleryProducts} />
          </>
        ) : (
          <div
            className="text-center py-5 my-5"
            style={{ minHeight: "calc(100vh - 650px)" }}
          >
            <h2 className="text-2xl font-semibold text-red-500">
              Блог не найден
            </h2>
            <p className="mt-2 text-gray-600">
              Блог, который вы ищете, не существует.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
