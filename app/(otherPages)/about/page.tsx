import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import About from "@/components/otherPages/About";
import Benefit from "@/components/otherPages/Benefit";
import Team from "@/components/otherPages/Team";
import Testimonials from "@/components/otherPages/Testimonials";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас || Hitta",
  description: "Hitta — малые архитектурные формы в скандинавском стиле",
};

export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Breadcumb />
      <About />
      <Benefit />
      <Testimonials />
      <Team />
    </>
  );
}
