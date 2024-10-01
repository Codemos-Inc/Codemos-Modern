import { LAB } from "../@types";

export function computeCIEDE2000(lab1: LAB, lab2: LAB): number {
  const [L1, a1, b1] = lab1;
  const [L2, a2, b2] = lab2;

  // Weight factors
  const kL = 1;
  const kC = 1;
  const kH = 1;

  const C1: number = Math.sqrt(Math.pow(a1, 2) + Math.pow(b1, 2));
  const C2: number = Math.sqrt(Math.pow(a2, 2) + Math.pow(b2, 2));

  const aC1C2: number = (C1 + C2) / 2.0;

  const G: number =
    0.5 * (1 - Math.sqrt(Math.pow(aC1C2, 7.0) / (Math.pow(aC1C2, 7.0) + Math.pow(25.0, 7.0))));

  const a1p: number = (1.0 + G) * a1;
  const a2p: number = (1.0 + G) * a2;

  const C1p: number = Math.sqrt(Math.pow(a1p, 2) + Math.pow(b1, 2));
  const C2p: number = Math.sqrt(Math.pow(a2p, 2) + Math.pow(b2, 2));

  const h1p: number = hpF(b1, a1p);
  const h2p: number = hpF(b2, a2p);

  const dLp: number = L2 - L1;
  const dCp: number = C2p - C1p;

  const dhp: number = dhpF(C1, C2, h1p, h2p);
  const dHp: number = 2 * Math.sqrt(C1p * C2p) * Math.sin(radians(dhp) / 2.0);

  const aL: number = (L1 + L2) / 2.0;
  const aCp: number = (C1p + C2p) / 2.0;

  const aHp: number = aHpF(C1, C2, h1p, h2p);
  const T: number =
    1 -
    0.17 * Math.cos(radians(aHp - 30)) +
    0.24 * Math.cos(radians(2 * aHp)) +
    0.32 * Math.cos(radians(3 * aHp + 6)) -
    0.2 * Math.cos(radians(4 * aHp - 63));
  const dRo: number = 30 * Math.exp(-Math.pow((aHp - 275) / 25, 2));
  const RC: number = Math.sqrt(Math.pow(aCp, 7.0) / (Math.pow(aCp, 7.0) + Math.pow(25.0, 7.0))); // (17)
  const SL: number = 1 + (0.015 * Math.pow(aL - 50, 2)) / Math.sqrt(20 + Math.pow(aL - 50, 2.0));
  const SC: number = 1 + 0.045 * aCp;
  const SH: number = 1 + 0.015 * aCp * T;
  const RT: number = -2 * RC * Math.sin(radians(2 * dRo));
  const dE: number = Math.sqrt(
    Math.pow(dLp / (SL * kL), 2) +
      Math.pow(dCp / (SC * kC), 2) +
      Math.pow(dHp / (SH * kH), 2) +
      RT * (dCp / (SC * kC)) * (dHp / (SH * kH)),
  );
  return dE;
}

function degrees(n: number): number {
  return n * (180 / Math.PI);
}

function radians(n: number): number {
  return n * (Math.PI / 180);
}

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function hpF(x: number, y: number): number {
  // (7)
  if (x === 0 && y === 0) {
    return 0;
  } else {
    const tmpHp: number = degrees(Math.atan2(x, y));
    if (tmpHp >= 0) {
      return tmpHp;
    } else {
      return tmpHp + 360;
    }
  }
}

function dhpF(C1: number, C2: number, h1p: number, h2p: number): number {
  // (10)
  if (C1 * C2 === 0) {
    return 0;
  } else if (Math.abs(h2p - h1p) <= 180) {
    return h2p - h1p;
  } else if (h2p - h1p > 180) {
    return h2p - h1p - 360;
  } else if (h2p - h1p < -180) {
    return h2p - h1p + 360;
  } else {
    throw new Error();
  }
}

function aHpF(C1: number, C2: number, h1p: number, h2p: number): number {
  // (14)
  if (C1 * C2 === 0) {
    return h1p + h2p;
  } else if (Math.abs(h1p - h2p) <= 180) {
    return (h1p + h2p) / 2.0;
  } else if (Math.abs(h1p - h2p) > 180 && h1p + h2p < 360) {
    return (h1p + h2p + 360) / 2.0;
  } else if (Math.abs(h1p - h2p) > 180 && h1p + h2p >= 360) {
    return (h1p + h2p - 360) / 2.0;
  } else {
    throw new Error();
  }
}
