"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";

// Assuming the product structure
interface Product {
  id: number;
  slug?: string;
  title: string;
  imgSrc: string;
  price: number;
}

export default function Compare() {
  const {
    compareItem,
    addProductToCart,
    isAddedToCartProducts,
  }: {
    compareItem: (number | string)[];
    addProductToCart: (id: number) => void;
    isAddedToCartProducts: (id: number) => boolean;
  } = useContextElement();

  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const filteredItems = allProducts.filter((elm) =>
      compareItem.includes(elm.id)
    );
    setItems([...filteredItems]);
  }, [compareItem]);

  return (
    <div className="modal fade modal-compare" id="compare">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="modal"
          />
          <div className="tf-compare-table">
            <div className="tf-compare-row tf-compare-grid">
              <div className="tf-compare-col d-md-block d-none" />
              {items.length ? (
                <>
                  {items.map((product, i) => (
                    <div key={i} className="tf-compare-col">
                      <div className="tf-compare-item">
                        <Link
                          className="tf-compare-image"
                          href={`/product-detail/${product.slug || product.id}`}
                        >
                          <Image
                            className="lazyload"
                            alt="img-сравнить"
                            src={product.imgSrc}
                            width={600}
                            height={600}
                          />
                        </Link>
                        <div className="tf-compare-content">
                          <Link
                            className="link text-title text-line-clamp-1"
                            href={`/product-detail/${product.slug || product.id}`}
                          >
                            {product.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="tf-compare-inner">
                  <div className="text-center">
                    Для сравнения пока не добавлено ни одного товара. Просмотрите продукты, чтобы найти предметы
                    вы хотели бы сравнить.
                  </div>
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Рейтинг</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field tf-compare-rate"
                >
                  <div className="list-star">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <span key={idx} className="icon icon-star" />
                      ))}
                  </div>
                  <span>(134 отзыва)</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Цена</h6>
              </div>
              {items.map((product, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="price">{product.price.toFixed(2)} ₽</span>
                </div>
              ))}
            </div>

            {/* Type */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Тип</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="type">Стол</span>
                </div>
              ))}
            </div>

            {/* Brand */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Бренд</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="brand">-</span>
                </div>
              ))}
            </div>

            {/* Size */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Размер</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="size">Размер А, Размер Б</span>
                </div>
              ))}
            </div>

            {/* Color */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Цвет</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <div className="list-compare-color justify-content-center">
                    <span className="item bg-color-beige1" />
                    <span className="item bg-color-grey" />
                    <span className="item bg-color-grey" />
                  </div>
                </div>
              ))}
            </div>

            {/* Material */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Материал</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="size">Хлопок</span>
                </div>
              ))}
            </div>

            {/* Add to Cart */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Добавить в корзину</h6>
              </div>
              {items.map((product, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field tf-compare-viewcart text-center"
                >
                  <a
                    href="#"
                    className="btn-view-cart"
                    onClick={(e) => {
                      e.preventDefault();
                      addProductToCart(product.id);
                    }}
                  >
                    {isAddedToCartProducts(product.id)
                      ? "Уже добавлено"
                      : "В корзину "}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
