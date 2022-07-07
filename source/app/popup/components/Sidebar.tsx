import { useState } from "react";
import styled from "styled-components";

import useStore from "../../store/useStore";
import Elevator from "../../commons/components/Elevator/Elevator";
import SettingIcon from "../../../assets/settings.svg";
import ComponentEntry from "../../commons/components/ComponentEntry/ComponentEntry";
import Icon from "../../commons/components/Icon/Icon";
import { NumberString, ToastPosition } from "../../types/types";

const StyledSidebar = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.xsm};
`;

const StyledComponentEntry = styled(ComponentEntry)`
  svg {
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;

const StyledActions = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.black};
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

const StyledElevator = styled(Elevator)<{ currentValueClassName?: string }>`
  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.black};

  .currentValueClassName {
    font-size: 2rem;
  }
`;

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [settingsTypeOpen, setSettingsTypeOpen] = useState<
    "interval" | "popup-position" | null
  >(null);

  const { getStore, setPopupInterval, setToastPosition } = useStore();
  const { popupInterval, toastPosition } = getStore();

  const toastPositions = [
    "bottom-left",
    "bottom-right",
    "center",
    "center-left",
    "center-right",
    "top-left",
    "top-right",
  ].map((position, index) => ({
    value: position,
    id: position,
    /* if toastPosition is not set it will default with index 0 */
    isSelected: toastPosition ? toastPosition === position : index === 0,
  }));

  const handleSideBarVisibility = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handlePopupIntervalIncrement = () => {
    setPopupInterval((prev) => prev && prev + 1);
  };

  const handlePopupIntervalDecrement = () => {
    setPopupInterval((prev) => prev && (prev === 1 ? prev : prev - 1));
  };

  const handleToastPositionSelection = (value: NumberString) => {
    setToastPosition(value as ToastPosition);
  };

  return (
    <StyledSidebar>
      <Icon onClick={handleSideBarVisibility}>
        <SettingIcon />
      </Icon>
      <StyledComponentEntry
        isOpen={isSidebarOpen}
        onClose={handleSideBarVisibility}
      >
        <StyledActions>
          <li onClick={() => setSettingsTypeOpen("interval")}>Interval</li>
          <li onClick={() => setSettingsTypeOpen("popup-position")}>
            Popup Position
          </li>
        </StyledActions>
      </StyledComponentEntry>
      <StyledComponentEntry
        isOpen={settingsTypeOpen === "interval"}
        onClose={() =>
          setSettingsTypeOpen((prev) =>
            prev === "interval" ? null : "interval"
          )
        }
        iconType="go back"
      >
        <StyledElevator
          currentValue={popupInterval + "s"}
          onGetNextValue={handlePopupIntervalIncrement}
          onGetPrevValue={handlePopupIntervalDecrement}
        />
      </StyledComponentEntry>
      <StyledComponentEntry
        isOpen={settingsTypeOpen === "popup-position"}
        onClose={() =>
          setSettingsTypeOpen((prev) =>
            prev === "popup-position" ? null : "popup-position"
          )
        }
        iconType="go back"
      >
        <StyledElevator
          items={toastPositions}
          onGetFocusedItem={handleToastPositionSelection}
          currentValueClassName="currentValueClassName"
        />
      </StyledComponentEntry>
    </StyledSidebar>
  );
};

export default Sidebar;
