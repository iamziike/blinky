import styled from "styled-components";

const StyledCartoonFace = styled.div`
  position: relative;
  height: 100%;
`;

const StyledGlassesBelt = styled.div`
  position: absolute;
  top: ${({ theme }) => `calc(${theme.structure.height} / 2 - 5px )`};
  width: 80px;
  height: ${({ theme }) => `calc(${theme.structure.height} / 2 - 90px )`};
  background-color: #49413e;
  border-radius: 20% 0 0 20%;

  &::after {
    content: "";
    position: absolute;
    top: 35%;
    height: 20%;
    width: 100%;
    background-color: #2e2a29;
  }

  &:nth-child(2) {
    right: 0;
    border-radius: 0 20% 20% 0;
  }
`;

const StyledEyes = styled.div`
  position: absolute;
  height: 70px;
  width: 140px;
  top: 65px;
  left: 80px;
  border-radius: 500px;

  & > div {
    &:nth-child(1) {
      left: 0;
    }

    &:nth-child(2) {
      right: 0;
    }
  }
`;

const StyledEye = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
`;

const StyledSclera = styled.div`
  position: absolute;
  height: 50%;
  width: 80%;
  top: 25%;
  left: 10%;
  border-radius: 100%;
  background-color: #e2eaf1;
  box-shadow: inset 1px 0px 5px 1px #cfddea;

  &,
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledIris = styled.div`
  border-radius: 100%;
  height: 17px;
  width: 17px;
  background-color: #a77a50;
`;

const StyledPupil = styled.div<{ isLeft?: boolean }>`
  position: relative;
  border-radius: 100%;
  height: 6px;
  width: 6px;
  background-color: #231f20;

  &::after {
    content: "";
    bottom: 70%;
    left: ${({ isLeft }) => (isLeft ? "10%" : "50%")};
    position: absolute;
    height: 2px;
    width: 2px;
    background-color: #fff;
    filter: blur(0.5px);
  }
`;

const StyledGlasses = styled.div`
  position: absolute;
  height: 70px;
  width: 140px;
  top: 65px;
  left: 80px;
  border-radius: 500px;

  & > div {
    &:nth-child(1) {
      left: 0;
    }

    &:nth-child(2) {
      right: 0;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 30%;
    height: 30%;
    width: 10%;
    left: 45%;
    border-radius: 50%;
    box-shadow: 0px 7px 0 #cacbc5;
  }
`;

const StyledFrameWrapper = styled.div`
  position: absolute;
  width: 50%;
  top: 0;
  height: 100%;
  border-radius: 500px;
  border: solid #cacbc5 3px;
`;

const StyledFrame = styled.div<{ bgcolor: string }>`
  height: 100%;
  border: solid ${({ bgcolor }) => bgcolor} 3px;
  box-shadow: 1px 1px 1px 1px ${({ bgcolor }) => bgcolor};
  border-radius: 500px;
  overflow: hidden;
`;

const StyledMouth = styled.div`
  position: absolute;
  bottom: 15%;
  border-radius: 100%;
  height: 10%;
  width: 30%;
  left: 35%;
  box-shadow: 0px 5px 0 #646569;
`;

const CartoonFace = () => {
  return (
    <StyledCartoonFace>
      <StyledGlassesBelt />
      <StyledGlassesBelt />
      <StyledEyes>
        <StyledEye>
          <StyledSclera>
            <StyledIris>
              <StyledPupil isLeft />
            </StyledIris>
          </StyledSclera>
        </StyledEye>
        <StyledEye>
          <StyledSclera>
            <StyledIris>
              <StyledPupil />
            </StyledIris>
          </StyledSclera>
        </StyledEye>
      </StyledEyes>
      <StyledGlasses>
        <StyledFrameWrapper>
          <StyledFrame bgcolor="#C5C9C9">
            <StyledFrame bgcolor="#BABEBE">
              <StyledFrame bgcolor="#B0B5B5"></StyledFrame>
            </StyledFrame>
          </StyledFrame>
        </StyledFrameWrapper>
        <StyledFrameWrapper>
          <StyledFrame bgcolor="#C5C9C9">
            <StyledFrame bgcolor="#BABEBE">
              <StyledFrame bgcolor="#B0B5B5"></StyledFrame>
            </StyledFrame>
          </StyledFrame>
        </StyledFrameWrapper>
      </StyledGlasses>
      <StyledMouth />
    </StyledCartoonFace>
  );
};

export default CartoonFace;
