export const DropdownChevron = ({ reverse, className }, props) => (
  <svg
    width="10px"
    height="10px"
    viewBox="0 0 10 10"
    className={className}
    {...props}
  >
    <path
      d={reverse ? "M 1 7, L 5 3, L 9 7" : "M 1 3, L 5 7, L 9 3"}
      fill="transparent"
      stroke="white"
      strokeWidth={1.5}
    />
  </svg>
);
