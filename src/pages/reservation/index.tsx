import React from "react";

import styled from "styled-components";

import ReservationHeader from "@/components/layout/ReservationHeader";
import AnimalChoice from "@/components/reservation/AnimalChoice";
import VisitDate from "@/components/reservation/VisitDate";
import VisitTime from "@/components/reservation/VisitTime";
import Request from "@/components/reservation/Request";

const Reservation = () => {
  return (
    <ReservationWrapper>
      <ReservationHeader content="예약하기" />

      <AnimalChoice />

      <DivideBox />

      <VisitDate />

      <DivideBox />

      <VisitTime />

      <DivideBox />

      <Request />
    </ReservationWrapper>
  );
};

export default Reservation;

const ReservationWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
`;

const DivideBox = styled.div`
  width: 393px;
  height: 10px;
  background-color: #f9f9f9;
`;
