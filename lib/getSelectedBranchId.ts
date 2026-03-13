import { cache } from "react";
import { cookies } from "next/headers";
import { getBranches } from "./api/catalog";
import type { BranchDto } from "./api/types";

// React.cache deduplicates this call within a single server render pass
export const getCachedBranches = cache(async (): Promise<BranchDto[]> => {
  try {
    const { items } = await getBranches({ limit: 50 });
    return items;
  } catch {
    return [];
  }
});

export async function getSelectedBranchId(): Promise<number | undefined> {
  const cookieStore = await cookies();
  const value = cookieStore.get("selectedBranchId")?.value;

  if (value) {
    return Number(value);
  }

  const branches = await getCachedBranches();
  return branches[0]?.id;
}
