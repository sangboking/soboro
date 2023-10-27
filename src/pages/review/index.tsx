import React from "react";

import styled from "styled-components";

import Header from "@/components/layout/Header";
import ReviewBox from "@/components/review/ReviewBox";
import ProductBox from "@/components/review/ProductBox";
import ReviewNavbar from "@/components/layout/ReviewNavbar";

const ReviewDetail = () => {
  return (
    <ReviewDetailWrapper>
      <Header content="리뷰 상세" />

      <ReviewBox />

      <DivideBox />

      <ProductBox />

      <GrayBox />

      <ReviewNavbar />
    </ReviewDetailWrapper>
  );
};

export default ReviewDetail;

const ReviewDetailWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const DivideBox = styled.div`
  width: 393px;
  height: 10px;
  background-color: #f9f9f9;
  margin-top: 61px;
`;

const GrayBox = styled.div`
  width: 393px;
  height: 104px;
  background-color: #f9f9f9;
`;
