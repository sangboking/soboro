import React from "react";

import styled from "styled-components";

import HomeHeader from "@/components/layout/HomeHeader";
import Complete from "@/components/payment/Complete";

import ProductBox from "@/components/review/ProductBox";

const index = () => {
  return (
    <CompleteWrapper>
      <HomeHeader />

      <Complete />

      <DivideBox />

      <ProductBox />
    </CompleteWrapper>
  );
};

export default index;

const CompleteWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const DivideBox = styled.div`
  width: 393px;
  height: 10px;
  background-color: #f9f9f9;
  margin-top: 40px;
`;
