import { bannerData } from "@/data/collections";
import { getCollection } from "@/lib/api/catalog";
import { branchProductsToProducts } from "@/lib/api/adapters";
import type { Product } from "@/types/product";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HARDCODED_COLLECTION_ID = 1;

interface Collections2Props {
  branchId?: number;
}

export default async function Collections2({ branchId }: Collections2Props) {
  let collectionTitle: string | null = null;
  let collectionDescription: string | null = null;
  let collectionProducts: Product[] = [];

  if (branchId) {
    try {
      const collection = await getCollection(HARDCODED_COLLECTION_ID, branchId);
      collectionTitle = collection.title;
      collectionDescription = collection.description ?? null;
      collectionProducts = branchProductsToProducts(collection.products);
    } catch {
      // Collection not available — fall back to static banners
    }
  }

  // If we got collection data from API, show collection with products
  if (collectionTitle && collectionProducts.length > 0) {
    return (
      <section className="flat-spacing-5">
        <div className="container">
          <div className="heading-section text-center">
            <h3 className="wow fadeInUp">{collectionTitle}</h3>
            {collectionDescription && (
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                {collectionDescription}
              </p>
            )}
          </div>
          <div className="tf-grid-layout tf-col-2 lg-col-4">
            {collectionProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="card-product style-2">
                <div className="card-product-wrapper">
                  <Link
                    href={`/product-detail/${product.id}`}
                    className="product-img"
                  >
                    <Image
                      className="lazyload img-product"
                      src={product.imgSrc}
                      alt={product.title}
                      width={360}
                      height={360}
                    />
                    <Image
                      className="lazyload img-hover"
                      src={product.hoverImg}
                      alt={product.title}
                      width={360}
                      height={360}
                    />
                  </Link>
                </div>
                <div className="card-product-info">
                  <Link
                    href={`/product-detail/${product.id}`}
                    className="title link"
                  >
                    {product.title}
                  </Link>
                  <span className="price">${product.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Fallback: static banners
  return (
    <section>
      <div className="flat-img-with-text-5">
        {bannerData.map((banner, index) => (
          <div className="collection-position hover-img style-6" key={index}>
            <div className="img-style">
              <Image
                className="lazyload effect-paralax"
                data-src={banner.imgSrc}
                alt="баннер-cls"
                src={banner.imgSrc}
                width={950}
                height={640}
              />
            </div>
            <div className="content cls-content w-full">
              <div className="cls-heading gap-8 mb_22">
                <h3>
                  <a href={"#"} className="link text_white wow fadeInUp">
                    {banner.title}
                  </a>
                </h3>
                <p
                  className="text_white text-body-default wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {banner.description}
                </p>
              </div>
              <a href={"#"} className="tf-btn btn-white mx-auto">
                <span>{banner.linkText}</span>
                <i className="icon-arrow-up-right" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
