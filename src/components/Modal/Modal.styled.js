import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  position: absolute;
  max-height: calc(100vh - 25px);
  max-width: calc(100vw - 50px);
`;
