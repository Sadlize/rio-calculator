const isInputValueNumber = (value: number | string): boolean =>
  !Number.isNaN(+value);

export default isInputValueNumber;
