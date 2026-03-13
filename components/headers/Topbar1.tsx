"use client";
import Link from "next/link";

import React from "react";
import BranchSelect from "../common/BranchSelect";

export default function Topbar1() {
  return (
    <div className="tf-topbar">
      <div className="container-full">
        <div className="row">
          <div className="col-xl-4">
            <div className="topbar-left d-none d-xl-flex">
              <BranchSelect />
            </div>
          </div>
          <div className="col-xl-4" />
          <div className="col-xl-4">
            <div className="topbar-right justify-content-end d-none d-xl-flex">
              <Link href={`/about`} className="text_white text-caption-1 link">
                О нас
              </Link>
              <Link
                href={`/contact`}
                className="text_white text-caption-1 link"
              >
                Контакты
              </Link>
              <Link
                href={`/store-list`}
                className="text_white text-caption-1 link"
                style={{ display: "none" }}
              >
                Локация
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
