import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Register from "@/components/otherPages/Register";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация || GearO — интернет-магазин офисного оборудования на React и Next.js",
  description: "GearO — интернет-магазин офисного оборудования на React и Next.js",
};

export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-5.jpg"
        pageName="Счет"
        pageTitle="Зарегистрироваться"
        parentPage=""
      />
      <Register />
    </>
  );
}
