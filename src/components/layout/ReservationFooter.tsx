import Link from "next/link";
import React from "react";

import styled from "styled-components";

const ReservationFooter = () => {
  return (
    <ReservationFooterWrapper>
      <ReviewButton>리뷰 작성</ReviewButton>

      <Link href="/reservation">
        <ReservationButton>예약하기</ReservationButton>
      </Link>
    </ReservationFooterWrapper>
  );
};

export default ReservationFooter;

const ReservationFooterWrapper = styled.footer`
  width: 100%;
  height: 105px;
  position: sticky;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: -1px 0px 4px 0px rgba(0, 0, 0, 0.1);
  padding-top: 15px;
  padding-left: 20px;
  display: flex;
  gap: 10px;
`;

const ReviewButton = styled.button`
  width: 108px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
  background: #fff;
  color: #555;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ReservationButton = styled.button`
  width: 232px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid #0091e2;
  background: #43bbff;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
