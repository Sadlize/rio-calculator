export const isInputValueNumber = (value: number | string): boolean => {
  return !isNaN(+value);
};
