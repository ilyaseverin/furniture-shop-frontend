import axios from "axios";
import type {
  BranchDto,
  BranchProductDto,
  BranchProductsQuery,
  BranchesQuery,
  CategoriesQuery,
  CategoryDto,
  PaginatedResponse,
  ProductVariantGroupDto,
  ProductVariantPriceDto,
  PublicCollectionDto,
} from "./types";

const catalogApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CATALOG_API_BASE_URL,
});

// ===== Categories =====

export async function getCategories(
  params?: CategoriesQuery
): Promise<PaginatedResponse<CategoryDto>> {
  const { data } = await catalogApi.get("/api/categories", { params });
  return data;
}

export async function getCategoryById(id: number): Promise<CategoryDto> {
  const { data } = await catalogApi.get(`/api/categories/${id}`);
  return data;
}

// ===== Branches =====

export async function getBranches(
  params?: BranchesQuery
): Promise<PaginatedResponse<BranchDto>> {
  const { data } = await catalogApi.get("/api/branches", { params });
  return data;
}

export async function getBranchById(id: number): Promise<BranchDto> {
  const { data } = await catalogApi.get(`/api/branches/${id}`);
  return data;
}

// ===== Branch Products =====

export async function getBranchProducts(
  params?: BranchProductsQuery
): Promise<PaginatedResponse<BranchProductDto>> {
  const { data } = await catalogApi.get("/api/branch-products", { params });
  return data;
}

export async function getBranchProductById(
  id: number
): Promise<BranchProductDto> {
  const { data } = await catalogApi.get(`/api/branch-products/${id}`);
  return data;
}

export async function getBranchProductBySlug(
  slug: string,
  branchId: number
): Promise<BranchProductDto> {
  const { data } = await catalogApi.get("/api/branch-products/by-slug", {
    params: { slug, branchId },
  });
  return data;
}

// ===== Variant Groups =====

export async function getProductVariantGroups(
  productId: number
): Promise<ProductVariantGroupDto[]> {
  const { data } = await catalogApi.get(
    `/api/products/${productId}/variant-groups`
  );
  return data;
}

export async function getProductVariantPrice(
  productId: number,
  optionIds?: number[]
): Promise<ProductVariantPriceDto> {
  const { data } = await catalogApi.get(
    `/api/products/${productId}/variant-groups/price`,
    { params: { optionIds } }
  );
  return data;
}

// ===== Collections =====

export async function getCollection(
  collectionId: number,
  branchId: number,
  retries = 2
): Promise<PublicCollectionDto> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const { data } = await catalogApi.get(
        `/api/collections/${collectionId}/branches/${branchId}`
      );
      return data;
    } catch (err) {
      if (attempt === retries) throw err;
    }
  }
  throw new Error("unreachable");
}
