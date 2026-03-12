"use client";
import ProductCard from "../productCards/ProductCard";
import Pagination from "../common/Pagination";
import type { Product } from "@/types/product";

interface GridViewProps {
  products: Product[];
  cardStyle?: number;
  pagination?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  categoryId?: number;
}

export default function ProductGridView({
  products,
  pagination = true,
  cardStyle = 1,
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
  categoryId,
}: GridViewProps) {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard cardStyle={cardStyle} key={index} product={product} categoryId={categoryId} />
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
