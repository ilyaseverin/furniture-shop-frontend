import React from "react";

/**
 * Renders a string with line breaks (\n) as <br /> elements.
 * Returns a React fragment with text segments separated by <br />.
 */
export function renderMultiline(text: string): React.ReactNode {
  const lines = text.split("\n");
  if (lines.length === 1) return text;

  return lines.map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </React.Fragment>
  ));
}
