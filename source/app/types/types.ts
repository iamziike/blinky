type VerticalPosition = "top" | "bottom" | "center";
type HorizontalPosition = "left" | "right";

export type ToastPosition =
  | `${VerticalPosition}-${HorizontalPosition}`
  | "center";
