import { HEXA } from "../@types";

export const getHex6FromHex7 = (hex7: string): string => {
  return hex7.substring(1);
};

export const getHex7FromHex6 = (hex6: string): string => {
  return `#${hex6}`;
};

export const splitHex9 = (hex9: string): HEXA => {
  return [hex9.substring(0, 7), hex9.substring(7)];
};

export const matchHex9Alpha = (hex9: string, refHex9: string): boolean => {
  return splitHex9(hex9)[0] === splitHex9(refHex9)[1];
};
