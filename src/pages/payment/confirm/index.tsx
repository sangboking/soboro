import React from "react";

import styled from "styled-components";

import ReservationHeader from "@/components/layout/ReservationHeader";
import Confirm from "@/components/payment/Confirm";

const index = () => {
  return (
    <ConfirmWrapper>
      <ReservationHeader content="청구 내용 확인" />

      <Confirm />
    </ConfirmWrapper>
  );
};

export default index;

const ConfirmWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;
