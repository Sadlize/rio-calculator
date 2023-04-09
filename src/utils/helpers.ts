export const isInputValueNumber = (value: number | string): boolean =>
  !Number.isNaN(+value);

export const jsxRepeatCode = (times: number): Array<number> =>
  Array.from(Array(times).keys());
