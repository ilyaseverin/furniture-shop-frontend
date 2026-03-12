"use client";

import React, { useState, useRef, useEffect } from "react";
import { useBranch } from "@/context/BranchContext";

export default function BranchSelect() {
  const { branches, selectedBranchId, setSelectedBranchId, selectedBranch } =
    useBranch();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (branches.length === 0) {
    return null;
  }

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text_white text-caption-1"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: 0,
        }}
      >
        <i className="icon icon-pin" style={{ fontSize: "14px" }} />
        <span>{selectedBranch?.name ?? "Выберите филиал"}</span>
        <i
          className="icon icon-down"
          style={{
            fontSize: "10px",
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {open && (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            background: "#fff",
            border: "1px solid #e5e5e5",
            borderRadius: "4px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            listStyle: "none",
            padding: "4px 0",
            margin: 0,
            minWidth: "220px",
            zIndex: 1000,
          }}
        >
          {branches.map((branch) => (
            <li key={branch.id}>
              <button
                type="button"
                onClick={() => {
                  if (branch.id !== selectedBranchId) {
                    setSelectedBranchId(branch.id);
                  }
                  setOpen(false);
                }}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px 16px",
                  border: "none",
                  background:
                    branch.id === selectedBranchId
                      ? "#f5f5f5"
                      : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "13px",
                  color: "#333",
                  fontWeight: branch.id === selectedBranchId ? 600 : 400,
                }}
              >
                <div>{branch.name}</div>
                {branch.address && (
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#999",
                      marginTop: "2px",
                    }}
                  >
                    {branch.address}
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
