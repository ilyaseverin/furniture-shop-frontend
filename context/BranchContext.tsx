"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import type { BranchDto } from "@/lib/api/types";

interface BranchContextType {
  branches: BranchDto[];
  selectedBranchId: number | null;
  setSelectedBranchId: (id: number) => void;
  selectedBranch: BranchDto | null;
}

const BranchCtx = createContext<BranchContextType | undefined>(undefined);

export function useBranch() {
  const ctx = useContext(BranchCtx);
  if (!ctx) throw new Error("useBranch must be used within BranchProvider");
  return ctx;
}

const COOKIE_NAME = "selectedBranchId";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

interface BranchProviderProps {
  children: ReactNode;
  initialBranches: BranchDto[];
}

export default function BranchProvider({
  children,
  initialBranches,
}: BranchProviderProps) {
  const router = useRouter();
  const [branches] = useState<BranchDto[]>(initialBranches);

  const [selectedBranchId, setSelectedBranchIdState] = useState<number | null>(
    () => {
      const saved = getCookie(COOKIE_NAME);
      const savedId = saved ? Number(saved) : null;
      if (savedId && initialBranches.some((b) => b.id === savedId)) {
        return savedId;
      }
      return initialBranches[0]?.id ?? null;
    }
  );

  // Sync cookie on first render if no cookie was set
  useEffect(() => {
    if (selectedBranchId !== null && !getCookie(COOKIE_NAME)) {
      setCookie(COOKIE_NAME, String(selectedBranchId));
    }
  }, [selectedBranchId]);

  const setSelectedBranchId = (id: number) => {
    setSelectedBranchIdState(id);
    setCookie(COOKIE_NAME, String(id));
    // Re-render server components with new branchId (no full page reload)
    router.refresh();
  };

  const selectedBranch =
    branches.find((b) => b.id === selectedBranchId) ?? null;

  return (
    <BranchCtx.Provider
      value={{
        branches,
        selectedBranchId,
        setSelectedBranchId,
        selectedBranch,
      }}
    >
      {children}
    </BranchCtx.Provider>
  );
}
