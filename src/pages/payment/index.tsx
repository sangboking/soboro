import React from "react";

import styled from "styled-components";

import ReservationHeader from "@/components/layout/ReservationHeader";
import Flow from "@/components/payment/Flow";

const index = () => {
  return (
    <PaymentWrapper>
      <ReservationHeader content="보험금 청구" />

      <Flow />
    </PaymentWrapper>
  );
};

export default index;

const PaymentWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
`;
