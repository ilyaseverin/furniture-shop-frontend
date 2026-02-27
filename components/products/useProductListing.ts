"use client";

import { initialState, reducer } from "@/reducer/filterReducer";
import type { FilterProps, Product } from "@/types/product";
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

interface UseProductListingOptions {
  defaultActiveLayout?: number;
  products: Product[];
}

interface UseProductListingResult {
  activeLayout: number;
  setActiveLayout: Dispatch<SetStateAction<number>>;
  sortedProducts: Product[];
  filterProps: FilterProps;
}

export default function useProductListing({
  defaultActiveLayout = 4,
  products,
}: UseProductListingOptions): UseProductListingResult {
  const [activeLayout, setActiveLayout] = useState(defaultActiveLayout);
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    filtered: products,
    sorted: products,
  });

  const {
    price,
    availability,
    color,
    size,
    brands,
    categories,
    filtered,
    sortingOption,
    sorted,
    currentPage,
    itemPerPage,
    activeFilterOnSale,
  } = state;

  useEffect(() => {
    const filteredCollections: Product[][] = [];

    if (brands.length > 0) {
      filteredCollections.push(
        products.filter((product) =>
          brands.every((brand) => product.filterBrands.includes(brand))
        )
      );
    }

    if (categories.length > 0) {
      filteredCollections.push(
        products.filter((product) =>
          categories.every((category) =>
            product.filterCategory.includes(category)
          )
        )
      );
    }

    if (availability !== "All") {
      filteredCollections.push(
        products.filter((product) =>
          availability === "InStock" ? product.inStock : !product.inStock
        )
      );
    }

    if (color !== "All") {
      filteredCollections.push(
        products.filter((product) => product.filterColor.includes(color))
      );
    }

    if (size !== "All" && size !== "Универсальный размер") {
      filteredCollections.push(
        products.filter((product) => product.filterSizes.includes(size))
      );
    }

    if (activeFilterOnSale) {
      filteredCollections.push(products.filter((product) => Boolean(product.oldPrice)));
    }

    filteredCollections.push(
      products.filter(
        (product) => product.price >= price[0] && product.price <= price[1]
      )
    );

    const intersection = products.filter((product) =>
      filteredCollections.every((collection) => collection.includes(product))
    );

    dispatch({ type: "SET_FILTERED", payload: intersection });
  }, [
    products,
    price,
    availability,
    color,
    size,
    brands,
    categories,
    activeFilterOnSale,
  ]);

  useEffect(() => {
    const sortedProducts = [...filtered];

    switch (sortingOption) {
      case "Цена по возрастанию":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Цена по убыванию":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "Название (А-Я)":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Название (Я-А)":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    dispatch({ type: "SET_SORTED", payload: sortedProducts });
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, [filtered, sortingOption]);

  const filterProps = useMemo<FilterProps>(
    () => ({
      price,
      availability,
      color,
      size,
      activeFilterOnSale,
      brands,
      categories,
      sortingOption,
      currentPage,
      itemPerPage,
      setPrice: (value) => dispatch({ type: "SET_PRICE", payload: value }),
      setColor: (value) =>
        dispatch({
          type: "SET_COLOR",
          payload: value === color ? "All" : value,
        }),
      setSize: (value) =>
        dispatch({
          type: "SET_SIZE",
          payload: value === size ? "All" : value,
        }),
      setAvailability: (value) =>
        dispatch({
          type: "SET_AVAILABILITY",
          payload: value === availability ? "All" : value,
        }),
      setBrands: (brand) => {
        const updated = brands.includes(brand)
          ? brands.filter((currentBrand) => currentBrand !== brand)
          : [...brands, brand];
        dispatch({ type: "SET_BRANDS", payload: updated });
      },
      removeBrand: (brand) => {
        dispatch({
          type: "SET_BRANDS",
          payload: brands.filter((currentBrand) => currentBrand !== brand),
        });
      },
      setCategories: (category) => {
        const updated = categories.includes(category)
          ? categories.filter((currentCategory) => currentCategory !== category)
          : [...categories, category];
        dispatch({ type: "SET_CATEGORIES", payload: updated });
      },
      removeCategories: (category) => {
        dispatch({
          type: "SET_CATEGORIES",
          payload: categories.filter(
            (currentCategory) => currentCategory !== category
          ),
        });
      },
      setSortingOption: (value) =>
        dispatch({ type: "SET_SORTING_OPTION", payload: value }),
      toggleFilterWithOnSale: () =>
        dispatch({ type: "TOGGLE_FILTER_ON_SALE" }),
      setCurrentPage: (value) =>
        dispatch({ type: "SET_CURRENT_PAGE", payload: value }),
      setItemPerPage: (value) => {
        dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
        dispatch({ type: "SET_ITEM_PER_PAGE", payload: value });
      },
      clearFilter: () => dispatch({ type: "CLEAR_FILTER" }),
    }),
    [
      price,
      availability,
      color,
      size,
      activeFilterOnSale,
      brands,
      categories,
      sortingOption,
      currentPage,
      itemPerPage,
    ]
  );

  return {
    activeLayout,
    setActiveLayout,
    sortedProducts: sorted,
    filterProps,
  };
}
