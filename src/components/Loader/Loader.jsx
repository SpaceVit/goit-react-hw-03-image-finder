import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderBox>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#8080ff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderBox>
  );
}
