"use client";

import type { Product } from "@/types/product";
import FilterMeta from "./FilterMeta";
import FilterModal from "./FilterModal";
import GridView from "./GridView";
import LayoutHandler from "./LayoutHandler";
import Listview from "./Listview";
import Sorting from "./Sorting";
import useProductListing from "./useProductListing";

interface ShopCatalogStandardProps {
  parentClass?: string;
  defaultActiveLayout?: number;
  isFullLayout?: boolean;
  cardStyle?: number;
  apiProducts?: Product[];
  categoryId?: number;
}

export default function ShopCatalogStandard({
  parentClass = "flat-spacing",
  defaultActiveLayout = 4,
  isFullLayout = false,
  cardStyle = 1,
  apiProducts,
  categoryId,
}: ShopCatalogStandardProps) {
  const products = apiProducts ?? [];

  if (products.length === 0) {
    return (
      <section className={parentClass}>
        <div className={`container${isFullLayout ? "-full" : ""}`}>
          <div className="text-center py-5">
            <h5>Товары не найдены</h5>
            <p className="text-body-default text_secondary">
              В этой категории пока нет товаров
            </p>
          </div>
        </div>
      </section>
    );
  }

  const { activeLayout, setActiveLayout, sortedProducts, filterProps } =
    useProductListing({
      defaultActiveLayout,
      products,
    });

  const { currentPage, itemPerPage, setCurrentPage } = filterProps;
  const totalPages = Math.ceil(sortedProducts.length / itemPerPage);
  const startIdx = (currentPage - 1) * itemPerPage;
  const pageProducts = sortedProducts.slice(startIdx, startIdx + itemPerPage);

  return (
    <>
      <section className={parentClass}>
        <div className={`container${isFullLayout ? "-full" : ""}`}>
          <div className="tf-shop-control">
            <div className="tf-control-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="filterShop"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Фильтры</span>
              </a>
              <div
                onClick={filterProps.toggleFilterWithOnSale}
                className={`d-none d-lg-flex shop-sale-text ${
                  filterProps.activeFilterOnSale ? "active" : ""
                }`}
              >
                <i className="icon icon-checkcircle" />
                <p className="text-caption-1">Только товары со скидкой</p>
              </div>
            </div>
            <ul className="tf-control-layout">
              <LayoutHandler
                setActiveLayout={setActiveLayout}
                activeLayout={activeLayout}
              />
            </ul>
            <div className="tf-control-sorting">
              <p className="d-none d-lg-block text-caption-1">Сортировать по:</p>
              <Sorting allProps={filterProps} />
            </div>
          </div>
          <div className="wrapper-control-shop">
            <FilterMeta productLength={sortedProducts.length} allProps={filterProps} />
            {activeLayout === 1 ? (
              <div className="tf-list-layout wrapper-shop" id="listLayout">
                <Listview
                  products={pageProducts}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  categoryId={categoryId}
                />
              </div>
            ) : (
              <div
                className={`tf-grid-layout wrapper-shop tf-col-${activeLayout}`}
                id="gridLayout"
              >
                <GridView
                  cardStyle={cardStyle}
                  products={pageProducts}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  categoryId={categoryId}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <FilterModal allProps={filterProps} />
    </>
  );
}
