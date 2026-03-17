import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Order from "@/components/otherPages/Order";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заказ || Hitta",
  description: "Hitta — малые архитектурные формы в скандинавском стиле",
};

export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-4.jpg"
        pageName="Заказ"
        pageTitle="Заказ"
        parentPage=""
      />
      <Order />
    </>
  );
}
