import Products1 from "@/components/common/Products1";

import Features from "@/components/common/Features";
import Categories from "@/components/homes/home-2/Categories";
import Collections2 from "@/components/homes/home-2/Collections2";
import Hero from "@/components/homes/home-2/Hero";
import Products2 from "@/components/homes/home-2/Products2";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import Testimonials from "@/components/common/Testimonials";
import Blogs from "@/components/common/Blogs";
import Shopgram from "@/components/homes/home-2/Shopgram";

import Header1 from "@/components/headers/Header1";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная 02 || GearO — интернет-магазин офисного оборудования на React и Next.js",
  description: "GearO — интернет-магазин офисного оборудования на React и Next.js",
};

export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Hero />
      <Categories />
      <Products1 cardStyle={2} />
      <Collections2 />
      <Products2 />
      <Features parentClass="flat-spacing-2 line-top-container" />
      <Testimonials parentClass="flat-spacing-2 section-testimonials" />
      <Blogs parentClass="flat-spacing-2 section-news-insight" />
      <Shopgram />
    </>
  );
}


