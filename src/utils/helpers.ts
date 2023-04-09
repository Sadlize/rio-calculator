export const isInputValueNumber = (value: number | string): boolean =>
  !Number.isNaN(+value);

export const jsxRepeatCode = (length: number): Array<number> =>
  Array.from(Array(length).keys());
