"use client";
import ProductCard2 from "../productCards/ProductCard2";
import Pagination from "../common/Pagination";
import type { Product } from "@/types/product";

interface ListProps {
  products: Product[];
  pagination?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  categoryId?: number;
}

export default function ProductListView({
  products,
  pagination = true,
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
  categoryId,
}: ListProps) {
  return (
    <>
      {products.map((product, i) => (
        <ProductCard2 product={product} key={i} categoryId={categoryId} />
      ))}
      {pagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}
