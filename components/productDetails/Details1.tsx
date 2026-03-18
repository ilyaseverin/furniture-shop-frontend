"use client";
import { useState, useCallback } from "react";
import Slider1 from "./sliders/Slider1";
import VariantGroups from "./VariantGroups";
import { renderMultiline } from "@/lib/renderText";
import type { Product } from "@/types/product";
import type { ProductVariantPriceDto } from "@/lib/api/types";

interface ProductCardProps {
  product: Product;
}

export default function Details1({ product }: ProductCardProps) {
  const slideItems = product.apiImages?.length
    ? product.apiImages.map((img) => ({
        src: img.url,
        color: img.type,
        width: 900,
        height: 900,
      }))
    : undefined;

  const [selectedColor, setSelectedColor] = useState("");
  const [displayPrice, setDisplayPrice] = useState(product.price);

  const handleVariantPriceChange = useCallback(
    (priceData: ProductVariantPriceDto) => {
      setDisplayPrice(priceData.finalPrice);
    },
    []
  );

  const discountPercent =
    product.oldPrice && product.oldPrice > displayPrice
      ? Math.round(((product.oldPrice - displayPrice) / product.oldPrice) * 100)
      : null;

  return (
    <section className="flat-spacing product-details">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="tf-product-media-wrap sticky-top">
              <div className="thumbs-slider">
                <Slider1
                  activeColor={selectedColor}
                  firstItem={product.imgSrc}
                  setActiveColor={setSelectedColor}
                  {...(slideItems ? { slideItems } : {})}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="sticky-top">
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-heading">
                    <div className="tf-product-info-name">
                      <h3 className="name">{product.title}</h3>
                    </div>
                    <div className="tf-product-info-desc">
                      <div className="tf-product-info-price">
                        <h5 className="price-on-sale">
                          {displayPrice.toFixed(2)} ₽
                        </h5>
                        {product.oldPrice && (
                          <div className="compare-at-price">
                            {product.oldPrice.toFixed(2)} ₽
                          </div>
                        )}
                        {discountPercent && (
                          <div className="badges-on-sale text-btn-uppercase">
                            -{discountPercent}%
                          </div>
                        )}
                      </div>
                      {(product.shortDescription || product.description) && (
                        <p>{renderMultiline(product.shortDescription || product.description || "")}</p>
                      )}
                    </div>
                  </div>
                  <div className="tf-product-info-choose-option gap-19">
                    {product.variantGroups && product.variantGroups.length > 0 && (
                      <VariantGroups
                        productId={product.productId}
                        variantGroups={product.variantGroups}
                        onPriceChange={handleVariantPriceChange}
                      />
                    )}
                    <ul className="tf-product-info-sku">
                      {product.sku && (
                        <li>
                          <p className="text-caption-1">Артикул:</p>
                          <p className="text-caption-1 text-1">
                            {product.sku}
                          </p>
                        </li>
                      )}
                      <li>
                        <p className="text-caption-1">Наличие:</p>
                        <p className="text-caption-1 text-1">
                          {product.inStock ? "В наличии" : "Нет в наличии"}
                        </p>
                      </li>
                      {product.categoryName && (
                        <li>
                          <p className="text-caption-1">Категории:</p>
                          <p className="text-caption-1">
                            <a
                              href={
                                product.categoryId
                                  ? `/shop-list?categoryId=${product.categoryId}`
                                  : "#"
                              }
                              className="text-1 link"
                            >
                              {product.categoryName}
                            </a>
                          </p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
