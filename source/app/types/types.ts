export type IsOpen = { isOpen: boolean };

type VerticalPosition = "top" | "bottom" | "center";
type HorizontalPosition = "left" | "right";

export type ToastPosition =
  | `${VerticalPosition}-${HorizontalPosition}`
  | "center";

export type NumberString = number | string;
