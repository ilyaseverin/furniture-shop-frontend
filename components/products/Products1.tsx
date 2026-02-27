"use client";
import LayoutHandler from "./LayoutHandler";
import Sorting from "./Sorting";
import GridView from "./GridView";
import { productMain } from "@/data/products";
import FilterMeta from "./FilterMeta";
import FilterModal from "./FilterModal";
import Listview from "./Listview";
import useProductListing from "./useProductListing";

interface ShopCatalogStandardProps {
  parentClass?: string;
  defaultActiveLayout?: number;
  isFullLayout?: boolean;
  cardStyle?: number;
}

export default function ShopCatalogStandard({
  parentClass = "flat-spacing",
  defaultActiveLayout = 4,
  isFullLayout = false,
  cardStyle = 1,
}: ShopCatalogStandardProps) {
  const { activeLayout, setActiveLayout, sortedProducts, filterProps } =
    useProductListing({
      defaultActiveLayout,
      products: productMain,
    });

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
                <span className="text">Filters</span>
              </a>
              <div
                onClick={filterProps.toggleFilterWithOnSale}
                className={`d-none d-lg-flex shop-sale-text ${
                  filterProps.activeFilterOnSale ? "active" : ""
                }`}
              >
                <i className="icon icon-checkcircle" />
                <p className="text-caption-1">Shop sale items only</p>
              </div>
            </div>
            <ul className="tf-control-layout">
              <LayoutHandler
                setActiveLayout={setActiveLayout}
                activeLayout={activeLayout}
              />
            </ul>
            <div className="tf-control-sorting">
              <p className="d-none d-lg-block text-caption-1">Sort by:</p>
              <Sorting allProps={filterProps} />
            </div>
          </div>
          <div className="wrapper-control-shop">
            <FilterMeta
              productLength={sortedProducts.length}
              allProps={filterProps}
            />
            {activeLayout === 1 ? (
              <div className="tf-list-layout wrapper-shop" id="listLayout">
                <Listview products={sortedProducts} />
              </div>
            ) : (
              <div
                className={`tf-grid-layout wrapper-shop tf-col-${activeLayout}`}
                id="gridLayout"
              >
                <GridView cardStyle={cardStyle} products={sortedProducts} />
              </div>
            )}
          </div>
        </div>
      </section>
      <FilterModal allProps={filterProps} />
    </>
  );
}
