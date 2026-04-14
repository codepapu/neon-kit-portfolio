import React from "react";

export function renderBoldMarkedText(
  text: string,
  strongClassName = "font-semibold text-zinc-200"
): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const inner = part.match(/^\*\*([^*]+)\*\*$/);
    if (inner) {
      return (
        <strong key={i} className={strongClassName}>
          {inner[1]}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
