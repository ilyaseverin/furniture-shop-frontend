"use server";

import {
  getProductVariantGroups,
  getProductVariantPrice,
} from "@/lib/api/catalog";
import type {
  ProductVariantGroupDto,
  ProductVariantPriceDto,
} from "@/lib/api/types";

export async function fetchVariantGroups(
  productId: number
): Promise<ProductVariantGroupDto[]> {
  return getProductVariantGroups(productId);
}

export async function fetchVariantPrice(
  productId: number,
  optionIds: number[]
): Promise<ProductVariantPriceDto> {
  return getProductVariantPrice(productId, optionIds);
}
