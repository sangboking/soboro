import Image from "next/image";
import React from "react";

import styled from "styled-components";

const Location = () => {
  return (
    <LocationWrapper>
      <Title>위치</Title>

      <Image
        src="/images/Location.png"
        width={350}
        height={181}
        alt="Location"
      />

      <LocationName>서울 강남구 삼성로 614</LocationName>

      <LoadBox>길 찾기</LoadBox>
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-left: 22px;

  img {
    border-radius: 10px;
    margin-top: 13px;
    border: 1px solid #c8c8c8;
  }
`;

const Title = styled.h2`
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LocationName = styled.h4`
  color: #555;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 13px;
`;

const LoadBox = styled.div`
  width: 350px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
  background: #fff;
  color: #555;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
