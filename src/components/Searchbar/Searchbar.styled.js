import styled from 'styled-components';

export const Header = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 12px 24px;
  margin-bottom: 15px;
  background-image: linear-gradient(to right, #1f3c7a, #7192da, #1f3c7a);
  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;
`;

export const Button = styled.button`
  margin: auto;
  outline: none;
  padding: 0 10px;
  width: 30px;
  height: 25px;
  color: #000000;
  background-color: #b5c6ec;
  border: none;
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    background-color: #8080ff;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  color: #1f3c7a;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  background: #b5c6ec;
  &::placeholder {
    font: inherit;
    font-size: 17px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
  overflow: hidden;
`;
