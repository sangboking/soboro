import React from "react";
import Image from "next/image";

import styled from "styled-components";

const AnimalChoice = () => {
  return (
    <AnimalChoickWrapper>
      <HospitalNameBox>24시청담우리동물병원</HospitalNameBox>

      <CatChoiceBox>
        <CatColummBox>
          <Image
            src="/images/Cat_1.jpeg"
            width={80}
            height={80}
            alt="Cat_1"
            style={{
              borderRadius: "40px",
              border: "3px solid #0091e2",
            }}
          />
          <CatName>꾸꿍</CatName>
        </CatColummBox>

        <CatColummBox2>
          <Image
            src="/images/Cat_2.jpeg"
            width={70}
            height={70}
            alt="Cat_2"
            style={{
              borderRadius: "40px",
            }}
          />
          <CatName2>네로</CatName2>
        </CatColummBox2>
      </CatChoiceBox>
    </AnimalChoickWrapper>
  );
};

export default AnimalChoice;

const AnimalChoickWrapper = styled.div`
  width: 100%;
`;

const HospitalNameBox = styled.div`
  width: 100%;
  height: 51px;
  border-bottom: 0.5px solid #dedede;
  padding-top: 16px;
  padding-left: 25px;
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const CatChoiceBox = styled.div`
  width: 100%;
  height: 144px;
  padding-left: 37px;
  display: flex;
  gap: 25px;
`;

const CatColummBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  margin-top: 21px;
`;

const CatName = styled.h4`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CatColummBox2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  margin-top: 26px;
`;

const CatName2 = styled.h4`
  color: #c8c8c8;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
