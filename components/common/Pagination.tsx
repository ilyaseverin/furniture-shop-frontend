"use client";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <ul className="wg-pagination justify-content-center">
      {currentPage > 1 && (
        <li>
          <a
            href="#"
            className="pagination-item text-button"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(currentPage - 1);
            }}
          >
            <i className="icon-left" />
          </a>
        </li>
      )}
      {pages.map((page) => (
        <li key={page} className={currentPage === page ? "active" : ""}>
          {currentPage === page ? (
            <div className="pagination-item text-button">{page}</div>
          ) : (
            <a
              href="#"
              className="pagination-item text-button"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
            >
              {page}
            </a>
          )}
        </li>
      ))}
      {currentPage < totalPages && (
        <li>
          <a
            href="#"
            className="pagination-item text-button"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(currentPage + 1);
            }}
          >
            <i className="icon-right" />
          </a>
        </li>
      )}
    </ul>
  );
}
