import styled from "styled-components";

import CartoonFace from "../../commons/components/CartoonFace/CartoonFace";

const StyledMain = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Main = () => {
  return (
    <StyledMain>
      <CartoonFace />
    </StyledMain>
  );
};

export default Main;
