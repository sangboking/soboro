import Image from "next/image";
import React from "react";

import styled from "styled-components";

import HospitalInfo from "@/components/hospital/HospitalInfo";
import HospitalInfo2 from "@/components/hospital/HospitalInfo2";
import Header from "@/components/layout/Header";
import Review from "@/components/hospital/Review";
import Location from "@/components/hospital/Location";
import ReservationFooter from "@/components/layout/ReservationFooter";

const Hospital = () => {
  return (
    <HospitalWrapper>
      <Header content="병원 정보" />

      <Image
        src="/images/Hospital.jpeg"
        width={393}
        height={220}
        alt="Hospital"
      />

      <HospitalInfo />

      <DivideBox />

      <HospitalInfo2 />

      <DivideBox style={{ marginTop: "37px" }} />

      <Review />

      <DivideBox style={{ marginTop: "20px" }} />

      <Location />

      <GrayBox />

      <ReservationFooter />
    </HospitalWrapper>
  );
};

export default Hospital;

const HospitalWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
  img {
    object-fit: cover;
  }
`;

const DivideBox = styled.div`
  width: 393px;
  height: 10px;
  background-color: #f9f9f9;
  margin-top: 135px;
`;

const GrayBox = styled.div`
  width: 393px;
  height: 197px;
  background-color: #f9f9f9;
  margin-top: 20px;
`;
