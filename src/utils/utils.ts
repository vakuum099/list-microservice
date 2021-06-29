import { SanitizeRawArray } from './interface';

export const sanitizeRawArray: SanitizeRawArray<unknown> = (rawArray) => {
  return JSON.parse(JSON.stringify(rawArray));
};

export const showData = (data: unknown): void => {
  console.log(data);
};
