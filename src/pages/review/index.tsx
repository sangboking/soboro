import React from "react";

import styled from "styled-components";

import Header from "@/components/layout/Header";
import ReviewBox from "@/components/review/ReviewBox";

const ReviewDetail = () => {
  return (
    <ReviewDetailWrapper>
      <Header content="리뷰 상세" />

      <ReviewBox />
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
