import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Faqs from "@/components/otherPages/Faqs";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вопросы и ответы || Hitta",
  description: "Hitta — малые архитектурные формы в скандинавском стиле",
};

export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-7.jpg"
        pageName="Вопросы и ответы"
        pageTitle="Вопросы и ответы"
      />

      <Faqs />
    </>
  );
}
