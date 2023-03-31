type TProps = {
  relatedTarget: null | HTMLDivElement;
  currentTarget: null;
};

export const isFocusInside = ({ relatedTarget, currentTarget }: TProps) => {
  const target = relatedTarget || document.activeElement;
  let node = target.parentNode;

  while (node !== null) {
    if (node === currentTarget) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
};
