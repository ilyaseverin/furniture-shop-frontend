import Link from "next/link";
import React from "react";

interface BreadcumbProps {
  product: {
    id: number;
    title: string;
  };
  category?: {
    id: number;
    name: string;
    slug: string;
  } | null;
}

export default function Breadcumb({ product, category }: BreadcumbProps) {
  return (
    <div className="tf-breadcrumb">
      <div className="container">
        <div className="tf-breadcrumb-wrap">
          <div className="tf-breadcrumb-list">
            <Link href="/" className="text text-caption-1">
              Главная
            </Link>
            <i className="icon icon-right" />
            {category ? (
              <Link
                href={`/shop-list?categoryId=${category.id}`}
                className="text text-caption-1"
              >
                {category.name}
              </Link>
            ) : (
              <Link href="/shop-list" className="text text-caption-1">
                Каталог
              </Link>
            )}
            <i className="icon icon-right" />
            <span className="text_secondary2 text-caption-1">
              {product.title}
            </span>
          </div>
          <div className="tf-breadcrumb-prev-next">
            <Link href="/shop-list" className="tf-breadcrumb-back">
              <i className="icon icon-squaresfour" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
