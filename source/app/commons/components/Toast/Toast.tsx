import { useEffect, useRef } from "react";
import styled from "styled-components";

import Icon from "../Icon/Icon";
import CloseIcon from "../../../../assets/close_black_24dp.svg";
import { IsOpen, ToastPosition } from "../../../types/types";

type ToastProps = {
  title: string;
  position?: ToastPosition;
  onClose: VoidFunction;
  pauseTime: number;
  className?: string;
} & IsOpen;

const StyledToast = styled.div<IsOpen & { position: ToastPosition }>`
  position: fixed;
  width: 300px;
  height: 70px;
  z-index: 10000000000;
  ${({ position }) => {
    if (position === "center")
      return "top: calc(50% - 35px) !important; right: calc(50% - 150px) !important;";
    if (position === "center-left")
      return "top: calc(50% - 35px) !important; right: calc(100% - 315px) !important;";
    if (position === "center-right")
      return "top: calc(50% - 35px) !important; right: 5px !important;";
    if (position === "top-left")
      return "top: 5px !important; right: calc(100% - 315px) !important;";
    if (position === "top-right")
      return "top: 5px !important; right: 5px !important;";
    if (position === "bottom-right")
      return "top: calc(100% - 85px) !important; right: 5px !important;";
    if (position === "bottom-left")
      return "top: calc(100% - 85px) !important; right: calc(100% - 315px) !important;";
  }};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  padding: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 5px hsl(0, 0%, 0%, 0.5);
  transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0)")};
  transform-origin: ${({ isOpen, position }) => {
    if (!isOpen) return "center";
    return position.replace("-", " ");
  }};
  transition: transform
      ${({ theme, isOpen }) =>
        isOpen ? `0.5s ${theme.transition.bouncy}` : "0.2s linear"},
    left 0.5s, right 0.5s, top 0.5s;

  svg {
    position: absolute;
    right: 5px;
    top: 5px;
    fill: ${({ theme }) => theme.colors.yellow};
  }

  span:active {
    transform: none;
  }

  p {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-family: monospace !important;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.yellow} !important;
  }
`;

const Toast = ({
  title,
  isOpen,
  position = "bottom-left",
  pauseTime = 1,
  onClose,
  className,
}: ToastProps) => {
  const idRef = useRef<number>();

  useEffect(() => {
    if (!isOpen) return;
    idRef.current = setTimeout(onClose, pauseTime * 1000);
  }, [isOpen]);

  return (
    <StyledToast className={className} isOpen={isOpen} position={position}>
      <Icon
        onClick={() => {
          if (idRef.current) clearTimeout(idRef.current);
          onClose();
        }}
      >
        <CloseIcon />
      </Icon>
      <p>{title}</p>
    </StyledToast>
  );
};

export default Toast;
