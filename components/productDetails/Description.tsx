import React from "react";
import { renderMultiline } from "@/lib/renderText";

interface DescriptionProps {
  description?: string;
  technicalDescription?: string;
}

export default function Description({
  description,
  technicalDescription,
}: DescriptionProps) {
  return (
    <>
      <div className="left">
        <h6 className="mb_12">Описание</h6>
        {description ? (
          <p className="text_secondary">{renderMultiline(description)}</p>
        ) : (
          <p className="text_secondary">Нет описания</p>
        )}
      </div>
      {technicalDescription && (
        <div className="right">
          <h6 className="mb_12">Технические характеристики</h6>
          <p className="text_secondary">{renderMultiline(technicalDescription)}</p>
        </div>
      )}
    </>
  );
}
