import { FocusEvent } from "react";

export const isFocusInside = ({
  relatedTarget,
  currentTarget,
}: FocusEvent<HTMLInputElement>) => {
  const target = (relatedTarget || document.activeElement) as HTMLInputElement;
  let node = target.parentNode;

  while (node !== null) {
    if (node === currentTarget) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
};
