import styled from "styled-components";

import Icon from "../Icon/Icon";
import BackIcon from "../../../../assets/arrow_back_ios_black_24dp.svg";
import CloseIcon from "../../../../assets/close_black_24dp.svg";
import { IsOpen } from "../../../types/types";

type Position = "fixed" | "relative" | "absolute";
type IconType = "exit" | "go back";

type ComponentEntryProps = IsOpen &
  React.HTMLAttributes<HTMLDivElement> & {
    position?: Position;
    onClose?: VoidFunction;
    iconType?: IconType;
  };

const StyledIcon = styled(Icon)<
  { iconType: IconType } & IsOpen & React.SVGAttributes<SVGAElement>
>`
  position: absolute;
  top: 0;
  z-index: 99;
  transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0)")};
  transition: transform 0.3s;
  padding: ${({ theme }) => theme.spacing.xsm};
  ${({ iconType }) => (iconType === "go back" ? "left: 0" : "right: 0")};

  * {
    fill: ${({ fill }) => (fill ? fill : "")};
    transition: fill 0.5s;
  }
`;

const StyledComponentEntry = styled.div<IsOpen & { position: Position }>`
  position: ${({ position }) => position};
  top: 0;
  width: 100%;
  height: 100%;
  left: ${({ isOpen }) => (isOpen ? 0 : "100%")};
  transition: left 0.5s;

  & > *:nth-child(2) {
    height: 100%;
    width: 100%;
  }
`;

const ComponentEntry = ({
  isOpen,
  children,
  position = "fixed",
  iconType = "exit",
  className,
  onClose,
}: ComponentEntryProps) => {
  const handleExit = () => {
    onClose && onClose();
  };

  return (
    <StyledComponentEntry
      className={className}
      isOpen={isOpen}
      position={position}
    >
      <StyledIcon iconType={iconType} isOpen={isOpen} onClick={handleExit}>
        {iconType === "go back" ? <BackIcon /> : <CloseIcon />}
      </StyledIcon>
      {children}
    </StyledComponentEntry>
  );
};

export default ComponentEntry;
