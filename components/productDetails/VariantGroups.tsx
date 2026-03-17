"use client";
import React, { useState, useEffect } from "react";
import type {
  ProductVariantGroupDto,
  ProductVariantPriceDto,
} from "@/lib/api/types";
import {
  fetchVariantGroups,
  fetchVariantPrice,
} from "@/lib/actions/variants";

interface VariantGroupsProps {
  productId?: number;
  variantGroups?: ProductVariantGroupDto[];
  onPriceChange?: (price: ProductVariantPriceDto) => void;
}

export default function VariantGroups({
  productId,
  variantGroups: propGroups,
  onPriceChange,
}: VariantGroupsProps) {
  const [groups, setGroups] = useState<ProductVariantGroupDto[]>(
    propGroups ?? []
  );
  const [selectedOptions, setSelectedOptions] = useState<
    Record<number, number>
  >({});
  const [loading, setLoading] = useState(false);

  // If groups were passed as props, auto-select defaults immediately
  useEffect(() => {
    if (propGroups && propGroups.length > 0) {
      setGroups(propGroups);
      const defaults: Record<number, number> = {};
      for (const group of propGroups) {
        if (group.options.length > 0) {
          defaults[group.id] = group.options[0].id;
        }
      }
      setSelectedOptions(defaults);
      return;
    }

    // Fallback: fetch from API if no prop data
    if (!productId) return;

    setLoading(true);
    fetchVariantGroups(productId)
      .then((data) => {
        setGroups(data);
        const defaults: Record<number, number> = {};
        for (const group of data) {
          if (group.options.length > 0) {
            defaults[group.id] = group.options[0].id;
          }
        }
        setSelectedOptions(defaults);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [productId, propGroups]);

  // Fetch price when options change
  useEffect(() => {
    if (!productId || Object.keys(selectedOptions).length === 0) return;

    const optionIds = Object.values(selectedOptions);
    fetchVariantPrice(productId, optionIds)
      .then((priceData) => {
        onPriceChange?.(priceData);
      })
      .catch(() => {});
  }, [productId, selectedOptions, onPriceChange]);

  if (loading || groups.length === 0) return null;

  const handleSelect = (groupId: number, optionId: number) => {
    setSelectedOptions((prev) => ({ ...prev, [groupId]: optionId }));
  };

  return (
    <>
      {groups
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((group) => (
          <div className="variant-picker-item" key={group.id}>
            <div className="d-flex justify-content-between mb_12">
              <div className="variant-picker-label">
                {group.name}:
                <span className="text-title variant-picker-label-value">
                  {group.options.find(
                    (o) => o.id === selectedOptions[group.id]
                  )?.name ?? ""}
                </span>
              </div>
            </div>
            <div className="variant-picker-values gap12">
              {group.options
                .sort((a, b) => a.sortOrder - b.sortOrder)
                .map((option) => (
                  <React.Fragment key={option.id}>
                    <input
                      type="radio"
                      name={`variant-group-${group.id}`}
                      id={`option-${option.id}`}
                      checked={selectedOptions[group.id] === option.id}
                      onChange={() => handleSelect(group.id, option.id)}
                    />
                    <label
                      className="style-text size-btn"
                      htmlFor={`option-${option.id}`}
                    >
                      <span className="text-title">
                        {option.name}
                        {option.priceDelta > 0 && ` (+${option.priceDelta})`}
                      </span>
                    </label>
                  </React.Fragment>
                ))}
            </div>
          </div>
        ))}
    </>
  );
}
