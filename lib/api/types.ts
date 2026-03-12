// ===== Pagination =====

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  meta: PaginationMeta;
  items: T[];
}

// ===== Images =====

export interface ImageDto {
  url: string;
  type: string; // "main" | "gallery" | "banner" etc.
}

// ===== Categories =====

export interface CategoryDto {
  id: number;
  name: string;
  fullName: string;
  slug: string;
  description: string;
  parentId: number | null;
  images: ImageDto[];
}

// ===== Branches =====

export interface BranchDto {
  id: number;
  name: string;
  description?: string;
  address: string;
  city?: string;
  region?: string;
  phone?: string;
  email?: string;
  workingHours?: string;
  latitude?: number;
  longitude?: number;
  bannerImage?: string;
}

// ===== Variant Groups =====

export interface ProductVariantOptionDto {
  id: number;
  name: string;
  priceDelta: number;
  sortOrder: number;
}

export interface ProductVariantGroupDto {
  id: number;
  name: string;
  isRequired: boolean;
  sortOrder: number;
  options: ProductVariantOptionDto[];
}

export interface ProductVariantPriceDto {
  productId: number;
  basePrice: number;
  optionsPrice: number;
  finalPrice: number;
  selectedOptions: ProductVariantOptionDto[];
}

// ===== Branch Products =====

export interface BranchProductDto {
  id: number;
  branchId: number;
  productId: number;
  price: number;
  stock: number;
  name: string;
  description?: string;
  slug: string;
  images: ImageDto[];
  categoryId: number;
  categoryName?: string;
  sku?: string;
  article?: string;
  variantGroups?: ProductVariantGroupDto[];
}

// ===== Collections =====

export interface PublicCollectionDto {
  id: number;
  title: string;
  description?: string;
  products: BranchProductDto[];
}

// ===== Query params =====

export interface CategoriesQuery {
  name?: string;
  description?: string;
  parentId?: number;
  page?: number;
  limit?: number;
}

export interface BranchProductsQuery {
  branchId?: number;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  name?: string;
  description?: string;
  categoryId?: number;
  page?: number;
  limit?: number;
}

export interface BranchesQuery {
  page?: number;
  limit?: number;
}
