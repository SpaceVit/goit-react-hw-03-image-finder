import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 15px auto;
  outline: none;
  padding: 0 10px;
  width: 100px;
  height: 25px;
  color: #fff;
  background-color: #7192da;
  border-radius: 5px;
  border: 1px solid #1f3c7a;
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    background-color: #1f3c7a;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;
