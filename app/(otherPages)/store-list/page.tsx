import Breadcumb from "@/components/common/Breadcumb";
import Features3 from "@/components/common/Features3";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import StoreLocation from "@/components/otherPages/StoreLocation";
import { getBranches } from "@/lib/api/catalog";
import { storeLocations as fallbackStores } from "@/data/storeLocations";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Список магазинов || Hitta",
  description: "Hitta — малые архитектурные формы в скандинавском стиле",
};

export default async function page() {
  let stores;

  try {
    const { items } = await getBranches({ limit: 50 });
    stores = items.map((branch) => ({
      id: branch.id,
      name: branch.name,
      address: branch.address,
      phone: branch.phone || "",
      email: branch.email || "",
      imgSrc: branch.bannerImage || "/images/banner/banner-location-1.jpg",
      workingHours: branch.workingHours,
      latitude: branch.latitude,
      longitude: branch.longitude,
    }));
  } catch {
    stores = fallbackStores;
  }

  return (
    <>
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-8.jpg"
        pageName="Список магазинов"
        pageTitle="Список магазинов"
      />
      <StoreLocation stores={stores} />
      <Features3 parentClass="flat-spacing" />
    </>
  );
}
