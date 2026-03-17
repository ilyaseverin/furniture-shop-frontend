"use server";

import { getBranchProductById } from "@/lib/api/catalog";
import { branchProductToProduct } from "@/lib/api/adapters";
import type { Product } from "@/types/product";

export async function fetchProductById(id: number): Promise<Product> {
  const apiProduct = await getBranchProductById(id);
  return branchProductToProduct(apiProduct);
}
