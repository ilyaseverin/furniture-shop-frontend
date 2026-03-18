"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcumbProps {
  pageTitle?: string;
  pageName?: string;
  parentPage?: string;
  imgSrc?: string;
  /** Full breadcrumb chain (overrides parentPage/pageName when provided) */
  breadcrumbs?: BreadcrumbItem[];
}

export default function Breadcumb({
  pageTitle = "О нас",
  pageName = "О нас",
  parentPage = "Pages",
  imgSrc = "/images/page-title/page-title-6.jpg",
  breadcrumbs,
}: BreadcumbProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxRef.current) {
      import("jarallax").then(({ jarallax }) => {
        jarallax(parallaxRef.current!, {
          speed: 0.8,
          imgSize: "cover",
          imgPosition: "50% 50%",
          imgRepeat: "no-repeat",
        });
      });
    }
  }, []);

  // Build breadcrumb items: either from explicit array or legacy props
  const items: BreadcrumbItem[] = breadcrumbs ?? [
    ...(parentPage ? [{ label: parentPage }] : []),
    { label: pageName },
  ];

  return (
    <div className="page-title relative">
      <div
        ref={parallaxRef}
        className="paralaximg"
        data-parallax="scroll"
        style={{ backgroundImage: `url(${imgSrc})`, backgroundPosition: "center center" }}
      />
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="title">{pageTitle}</h3>
              <ul className="breadcrumb">
                <li>
                  <Link href="/">Главная</Link>
                </li>
                {items.map((item, i) => (
                  <li key={i}>
                    {item.href && i < items.length - 1 ? (
                      <Link href={item.href}>{item.label}</Link>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
