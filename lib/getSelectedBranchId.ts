import { cookies } from "next/headers";

export async function getSelectedBranchId(): Promise<number | undefined> {
  const cookieStore = await cookies();
  const value = cookieStore.get("selectedBranchId")?.value;
  return value ? Number(value) : undefined;
}
