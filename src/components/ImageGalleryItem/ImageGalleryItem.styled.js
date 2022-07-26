import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;
`;

export const ItemImage = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
