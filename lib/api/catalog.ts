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

const BASE_URL = process.env.NEXT_PUBLIC_CATALOG_API_BASE_URL;

const fetchOpts: RequestInit = { cache: "no-store" };

function buildUrl(path: string, params?: Record<string, unknown>): string {
  const url = new URL(path, BASE_URL);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    }
  }
  return url.toString();
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, fetchOpts);
  if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);
  return res.json();
}

// ===== Categories =====

export async function getCategories(
  params?: CategoriesQuery
): Promise<PaginatedResponse<CategoryDto>> {
  return fetchJson(buildUrl("/api/categories", params as Record<string, unknown>));
}

export async function getCategoryById(id: number): Promise<CategoryDto> {
  return fetchJson(buildUrl(`/api/categories/${id}`));
}

// ===== Branches =====

export async function getBranches(
  params?: BranchesQuery
): Promise<PaginatedResponse<BranchDto>> {
  return fetchJson(buildUrl("/api/branches", params as Record<string, unknown>));
}

export async function getBranchById(id: number): Promise<BranchDto> {
  return fetchJson(buildUrl(`/api/branches/${id}`));
}

// ===== Branch Products =====

export async function getBranchProducts(
  params?: BranchProductsQuery
): Promise<PaginatedResponse<BranchProductDto>> {
  return fetchJson(buildUrl("/api/branch-products", params as Record<string, unknown>));
}

export async function getBranchProductById(
  id: number
): Promise<BranchProductDto> {
  return fetchJson(buildUrl(`/api/branch-products/${id}`));
}

export async function getBranchProductBySlug(
  slug: string,
  branchId: number
): Promise<BranchProductDto> {
  return fetchJson(buildUrl("/api/branch-products/by-slug", { slug, branchId }));
}

// ===== Variant Groups =====

export async function getProductVariantGroups(
  productId: number
): Promise<ProductVariantGroupDto[]> {
  return fetchJson(buildUrl(`/api/products/${productId}/variant-groups`));
}

export async function getProductVariantPrice(
  productId: number,
  optionIds?: number[]
): Promise<ProductVariantPriceDto> {
  const url = new URL(`/api/products/${productId}/variant-groups/price`, BASE_URL);
  if (optionIds) {
    for (const id of optionIds) {
      url.searchParams.append("optionIds", String(id));
    }
  }
  return fetchJson(url.toString());
}

// ===== Collections =====

export async function getCollection(
  collectionId: number,
  branchId: number,
  retries = 2
): Promise<PublicCollectionDto> {
  const url = buildUrl(`/api/collections/${collectionId}/branches/${branchId}`);
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fetchJson<PublicCollectionDto>(url);
    } catch (err) {
      if (attempt === retries) throw err;
    }
  }
  throw new Error("unreachable");
}
