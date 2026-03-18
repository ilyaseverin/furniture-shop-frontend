import type { Product } from "@/types/product";
import type { BranchProductDto, CategoryDto } from "./types";

const IMAGE_BASE =
  process.env.NEXT_PUBLIC_IMAGE_API_BASE_URL || "https://dev-image-s.russoft-it.ru";

const PLACEHOLDER_IMG = "/images/shop/product-1.jpg";

/** Find image by type, fallback to "main" */
export function getImageByType(
  images: { url: string; type: string; title?: string; description?: string }[] | undefined,
  type: string
) {
  if (!images || images.length === 0) return undefined;
  return images.find((img) => img.type === type) || images.find((img) => img.type === "main") || images[0];
}

/** Build full image URL from externalId hash */
export function imageUrl(externalIdOrUrl: string): string {
  if (externalIdOrUrl.startsWith("http")) return externalIdOrUrl;
  return `${IMAGE_BASE}/api/images/${externalIdOrUrl}`;
}


/**
 * Converts API BranchProductDto to the frontend Product interface.
 */
export function branchProductToProduct(bp: BranchProductDto): Product {
  // Resolve ALL images to full URLs, main first
  const resolved = bp.images.map((img) => ({ ...img, url: imageUrl(img.url), title: img.title, description: img.description }));
  const mainIdx = resolved.findIndex((img) => img.type === "main");
  const allImages = mainIdx > 0
    ? [resolved[mainIdx], ...resolved.filter((_, i) => i !== mainIdx)]
    : resolved;

  const mainImage = allImages.find((img) => img.type === "main")?.url || allImages[0]?.url || PLACEHOLDER_IMG;
  const hoverCandidate = allImages.find((img) => img.type === "hover")
    || allImages.find((img) => img.type !== "main")
    || null;
  const hoverImage = hoverCandidate?.url || mainImage;

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
    shortDescription: bp.shortDescription,
    technicalDescription: bp.technicalDescription,
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
  icon?: string;
  parentId?: number | null;
}

export function categoryToCategoryItem(cat: CategoryDto): CategoryItem {
  const mainImg = getImageByType(cat.images, "main");
  const image = mainImg ? imageUrl(mainImg.url) : PLACEHOLDER_IMG;

  return {
    id: cat.id,
    title: cat.name,
    slug: cat.slug,
    image,
    icon: cat.icon,
    parentId: cat.parentId,
  };
}
