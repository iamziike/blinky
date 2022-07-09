import { atom } from "recoil";

import { ToastPosition } from "../types/types";

export const popupIntervalAtom = atom({
  key: "popupIntervalAtom",
  default: 0,
});

export const toastPositionAtom = atom({
  key: "toastPositionAtom",
  default: "" as ToastPosition,
});

export const toastScreenTimeAtom = atom({
  key: "toastScreenTimeAtom",
  default: 0,
});
