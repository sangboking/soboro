import React from "react";

import styled from "styled-components";

import ReservationHeader from "@/components/layout/ReservationHeader";
import Account from "@/components/payment/Account";

const index = () => {
  return (
    <PaymentAccountWrapper>
      <ReservationHeader content="지급 계좌" />

      <Account />
    </PaymentAccountWrapper>
  );
};

export default index;

const PaymentAccountWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;
