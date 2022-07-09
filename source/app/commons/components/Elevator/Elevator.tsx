import styled from "styled-components";

import Icon from "../Icon/Icon";
import NextButtonIcon from "../../../../assets/arrow_up.svg";
import PreviousButtonIcon from "../../../../assets/arrow_down.svg";
import { NumberString } from "../../../types/types";

type ElevatorWithKnownItems = {
  items: { value: NumberString; id: NumberString; isSelected: boolean }[];
  onGetFocusedItem: (id: NumberString) => void;
  currentValue?: never;
  onGetNextValue?: never;
  onGetPrevValue?: never;
};

type ElevatorWithUnknownItems = {
  currentValue: NumberString;
  onGetNextValue: VoidFunction;
  onGetPrevValue: VoidFunction;
  items?: never;
  onGetFocusedItem?: never;
};

type ElevatorProps = (ElevatorWithUnknownItems | ElevatorWithKnownItems) &
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
  const handlePrevBtnClick = () => {
    if (!items) return onGetPrevValue();

    items.forEach((item, index, itemsArray) => {
      if (!item.isSelected) return;
      if (index === 0)
        return onGetFocusedItem(itemsArray[itemsArray.length - 1].id);
      onGetFocusedItem(itemsArray[index - 1].id);
    });
  };

  const handleNextBtnClick = () => {
    if (!items) return onGetNextValue();

    items.forEach((item, index, itemsArray) => {
      if (!item.isSelected) return;
      if (index === itemsArray.length - 1)
        return onGetFocusedItem(itemsArray[0].id);
      onGetFocusedItem(itemsArray[index + 1].id);
    });
  };

  return (
    <StyledElevator className={className}>
      <StyledIcon onClick={handleNextBtnClick}>
        <NextButtonIcon />
      </StyledIcon>
      <StyledCurrentValue className={currentValueClassName}>
        {items
          ? items.filter((item) => item.isSelected)[0].value
          : currentValue}
      </StyledCurrentValue>
      <StyledIcon onClick={handlePrevBtnClick}>
        <PreviousButtonIcon />
      </StyledIcon>
    </StyledElevator>
  );
};

export default Elevator;
