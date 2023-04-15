export const isInputValueNumber = (value: number | string): boolean =>
  !Number.isNaN(+value);

export const jsxRepeatCode = (times: number): Array<number> =>
  Array.from(Array(times).keys());

export const isEmpty = (object: object): boolean =>
  !object || Object.keys(object).length === 0;
