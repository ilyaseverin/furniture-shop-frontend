"use client";

import { colors } from "@/data/productFilterOptions";
import type { FilterProps } from "@/types/product";
import React from "react";

interface FilterMetaProps {
  allProps: FilterProps;
  productLength: number;
}

const isAllFilterValue = (value: string) => value === "All" || value === "Все";

const getColorClassName = (colorName: string) =>
  colors.find((colorOption) => colorOption.name === colorName)?.className ?? "";

export default function FilterMeta({ allProps, productLength }: FilterMetaProps) {
  const hasFiltered =
    !isAllFilterValue(allProps.availability) ||
    !isAllFilterValue(allProps.size) ||
    !isAllFilterValue(allProps.color) ||
    allProps.activeFilterOnSale ||
    allProps.brands.length > 0 ||
    allProps.categories.length > 0;

  const selectedColorClassName = getColorClassName(allProps.color);

  return (
    <div
      className="meta-filter-shop"
      style={hasFiltered ? { display: "flex" } : { display: "none" }}
    >
      <div id="product-count-grid" className="count-text">
        <span className="count">{productLength}</span> Найдено товаров
      </div>

      <div id="applied-filters">
        {!isAllFilterValue(allProps.availability) ? (
          <span className="filter-tag" onClick={() => allProps.setAvailability("All")}>
            {allProps.availability}
            <span className="remove-tag icon-close" />
          </span>
        ) : null}

        {allProps.activeFilterOnSale ? (
          <span className="filter-tag" onClick={() => allProps.toggleFilterWithOnSale()}>
            Со скидкой
            <span className="remove-tag icon-close" />
          </span>
        ) : null}

        {!isAllFilterValue(allProps.size) ? (
          <span className="filter-tag" onClick={() => allProps.setSize("All")}>
            {allProps.size}
            <span className="remove-tag icon-close" />
          </span>
        ) : null}

        {!isAllFilterValue(allProps.color) ? (
          <span className="filter-tag color-tag" onClick={() => allProps.setColor("All")}>
            <span className={`color ${selectedColorClassName}`} />
            {allProps.color}
            <span className="remove-tag icon-close" />
          </span>
        ) : null}

        {allProps.brands.length > 0 ? (
          <React.Fragment>
            {allProps.brands.map((brand, index) => (
              <span
                key={index}
                className="filter-tag"
                onClick={() => allProps.removeBrand(brand)}
              >
                {brand}
                <span className="remove-tag icon-close" />
              </span>
            ))}
          </React.Fragment>
        ) : null}

        {allProps.categories.length > 0 ? (
          <React.Fragment>
            {allProps.categories.map((category, index) => (
              <span
                key={index}
                className="filter-tag"
                onClick={() => allProps.removeCategories(category)}
              >
                {category}
                <span className="remove-tag icon-close" />
              </span>
            ))}
          </React.Fragment>
        ) : null}
      </div>

      {hasFiltered ? (
        <button
          id="remove-all"
          className="remove-all-filters text-btn-uppercase"
          onClick={allProps.clearFilter}
        >
          УДАЛИТЬ ВСЕ <i className="icon icon-close" />
        </button>
      ) : null}
    </div>
  );
}
