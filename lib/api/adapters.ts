import type { Product } from "@/types/product";
import type { BranchProductDto, CategoryDto } from "./types";

const IMAGE_BASE =
  process.env.NEXT_PUBLIC_IMAGE_API_BASE_URL || "https://dev-image-s.russoft-it.ru";

const PLACEHOLDER_IMG = "/images/shop/product-1.jpg";

/** Build full image URL from externalId hash */
function imageUrl(externalIdOrUrl: string): string {
  if (externalIdOrUrl.startsWith("http")) return externalIdOrUrl;
  return `${IMAGE_BASE}/api/images/${externalIdOrUrl}`;
}


/**
 * Converts API BranchProductDto to the frontend Product interface.
 */
export function branchProductToProduct(bp: BranchProductDto): Product {
  // Resolve ALL images to full URLs, main first
  const resolved = bp.images.map((img) => ({ ...img, url: imageUrl(img.url) }));
  const mainIdx = resolved.findIndex((img) => img.type === "main");
  const allImages = mainIdx > 0
    ? [resolved[mainIdx], ...resolved.filter((_, i) => i !== mainIdx)]
    : resolved;

  const mainImage = allImages[0]?.url || PLACEHOLDER_IMG;
  const hoverImage = allImages[1]?.url || mainImage;

  return {
    id: bp.id,
    title: bp.name,
    price: bp.price,
    oldPrice: null,
    sale: null,
    imgSrc: mainImage,
    hoverImg: hoverImage,
    swatches: [],
    filterBrands: [],
    filterCategory: [],
    filterColor: [],
    filterSizes: [],
    inStock: bp.stock > 0,
    slug: bp.slug,
    description: bp.description,
    branchId: bp.branchId,
    productId: bp.productId,
    apiImages: allImages,
    categoryId: bp.categoryId,
    categoryName: bp.categoryName,
    sku: bp.sku || bp.article,
    variantGroups: bp.variantGroups,
  };
}

export function branchProductsToProducts(items: BranchProductDto[]): Product[] {
  return items.map(branchProductToProduct);
}

export interface CategoryItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  itemCount?: string;
}

export function categoryToCategoryItem(cat: CategoryDto): CategoryItem {
  const image = cat.images[0] ? imageUrl(cat.images[0].url) : PLACEHOLDER_IMG;

  return {
    id: cat.id,
    title: cat.name,
    slug: cat.slug,
    image,
  };
}
