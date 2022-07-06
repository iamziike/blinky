// import { useState } from "react";
import { useState } from "react";
import styled from "styled-components";

import Setting from "../../../assets/settings.svg";
import Icon from "../../commons/components/Icon/Icon";

const StyledSidebar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.xsm};
`;

const StyledIcon = styled(Icon)<{ isOpen: boolean }>`
  position: relative;
  z-index: 100;

  * {
    transition: fill 0.5s;
    fill: ${({ isOpen, theme }) =>
      isOpen ? theme.colors.yellow : theme.colors.black};
  }
`;

const StyledActions = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: fixed;
  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  width: 100%;
  height: 100%;
  left: ${({ isOpen }) => (isOpen ? 0 : "100%")};
  transition: left 0.5s;
  padding: ${({ theme }) => theme.spacing.xsm};

  li {
    position: relative;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.lg};

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.yellow};
      right: 0%;
      width: 0%;
      transition: width 0.3s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBarVisibility = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledSidebar>
      <StyledIcon isOpen={isOpen} onClick={handleSideBarVisibility}>
        <Setting />
      </StyledIcon>
      <StyledActions isOpen={isOpen}>
        <li>Interval</li>
        <li>Popup Position</li>
        {/* <StyledAction>Issues</StyledAction> */}
      </StyledActions>
    </StyledSidebar>
  );
};

export default Sidebar;
