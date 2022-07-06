import styled from "styled-components";

type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  width?: string;
};

const Icon = styled.span<IconProps>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width || "max-content"};
  cursor: pointer;
  transition: transform 0.5s;

  &:active {
    transform: scale(1.2);
  }
`;

export default Icon;
