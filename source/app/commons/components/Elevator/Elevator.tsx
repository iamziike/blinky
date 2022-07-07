import { useEffect, useState } from "react";
import styled from "styled-components";

import Icon from "../Icon/Icon";
import PreviousButtonIcon from "../../../../assets/arrow_up.svg";
import NextButtonIcon from "../../../../assets/arrow_down.svg";
import { NumberString } from "../../../types/types";

type ElevatorWithItems = {
  items: { value: NumberString; id: NumberString; isSelected: boolean }[];
  onGetFocusedItem: (id: NumberString) => void;
  currentValue?: never;
  onGetNextValue?: never;
  onGetPrevValue?: never;
};

type ElevatorWithCurrentValue = {
  currentValue: NumberString;
  onGetNextValue: VoidFunction;
  onGetPrevValue: VoidFunction;
  items?: never;
  onGetFocusedItem?: never;
};

type ElevatorProps = (ElevatorWithCurrentValue | ElevatorWithItems) &
  React.HTMLAttributes<HTMLDivElement> & {
    currentValueClassName?: string;
  };

const StyledElevator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm};

  svg {
    transform: scale(2);
  }
`;

const StyledCurrentValue = styled.div`
  font-size: 4rem;

  &::selection {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

const StyledIcon = styled(Icon)`
  overflow: hidden;
`;

const Elevator = ({
  className,
  items,
  currentValue,
  onGetFocusedItem,
  onGetNextValue,
  onGetPrevValue,
  currentValueClassName,
}: ElevatorProps) => {
  const [focusedID, setFocusedID] = useState<NumberString>();

  const handlePrevBtnClick = () => {
    items
      ? setFocusedID((prev) => {
          const id = (
            items.filter(
              (_, index, itemsArray) => itemsArray[index + 1]?.id === prev
            )[0] || items[0]
          ).id!;
          return id;
        })
      : onGetPrevValue();
  };

  const handleNextBtnClick = () => {
    items
      ? setFocusedID(
          (prev) =>
            (
              items.filter(
                (_, index, itemsArray) => itemsArray[index - 1]?.id === prev
              )[0] || items[items.length - 1]
            ).id!
        )
      : onGetNextValue();
  };

  useEffect(() => {
    if (items && focusedID) onGetFocusedItem(focusedID);
  }, [focusedID]);

  return (
    <StyledElevator className={className}>
      <StyledIcon onClick={handlePrevBtnClick}>
        <PreviousButtonIcon />
      </StyledIcon>
      <StyledCurrentValue className={currentValueClassName}>
        {items
          ? items.filter((item) => item.isSelected)[0].value
          : currentValue}
      </StyledCurrentValue>
      <Icon onClick={handleNextBtnClick}>
        <NextButtonIcon />
      </Icon>
    </StyledElevator>
  );
};

export default Elevator;
