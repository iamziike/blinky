import { useEffect } from "react";
import styled from "styled-components";

import Icon from "../Icon/Icon";
import CloseIcon from "../../../../assets/close_black_24dp.svg";
import { IsOpen, ToastPosition } from "../../../types/types";

type ToastProps = {
  title: string;
  position?: ToastPosition;
  onClose: VoidFunction;
} & IsOpen;

const StyledToast = styled.div<IsOpen & { position: ToastPosition }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 300px;
  height: 70px;
  /* ${({ position }) => {
    if (position === "bottom-right") return "bottom: 5px; right: 5px;";
    if (position === "center")
      return "top: cacl(50% - 150px); right: cacl(50% - 35px);";
    if (position === "center-left") return "top: cacl(50% - 150px); left: 5px;";
    if (position === "center-right")
      return "top: cacl(50% - 150px); right: 5px;";
    if (position === "top-left") return "top: 5px; left: 5px;";
    if (position === "top-right") return "top: 5px; right: 5px;";
    return "bottom: 5px; left: 5px;";
  }}; */
  bottom: 5px;
  left: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.yellow};
  border-radius: 5px;
  font-size: 1.3rem;
  padding: 5px;
  box-shadow: 0px 0px 5px hsl(0, 0%, 0%, 0.5);
  /* transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0)")};
  transform-origin: ${({ isOpen }) => (isOpen ? "left bottom" : "center")};
  transition: transform
    ${({ theme, isOpen }) =>
    isOpen ? `0.5s ${theme.transition.bouncy}` : "0.2s linear"}; */

  svg {
    position: absolute;
    right: 5px;
    top: 5px;
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;

const Toast = ({
  title,
  isOpen,
  position = "bottom-left",
  onClose,
}: ToastProps) => {
  useEffect(() => {
    if (!isOpen) return;
    setTimeout(onClose, 1000);
  }, [isOpen]);

  return (
    <StyledToast isOpen={isOpen} position={position}>
      <Icon>
        <CloseIcon />
      </Icon>
      <p>{title}</p>
    </StyledToast>
  );
};

export default Toast;
