import React from "react";

import styled from "styled-components";

import ReservationHeader from "@/components/layout/ReservationHeader";
import CountBox from "@/components/diagnosis/CountBox";
import MedicalExpense from "@/components/diagnosis/MedicalExpense";

const index = () => {
  return (
    <DiagnosisWrapper>
      <ReservationHeader content="진료 내역" />

      <CountBox />

      <DivideBox />

      <MedicalExpense />
    </DiagnosisWrapper>
  );
};

export default index;

const DiagnosisWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const DivideBox = styled.div`
  width: 393px;
  height: 10px;
  background-color: #f9f9f9;
`;
