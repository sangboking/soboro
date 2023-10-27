import { ICON_ARR } from "@/constants";
import Image from "next/image";
import React from "react";

import styled from "styled-components";

const HospitalInfo = () => {
  return (
    <HospitalInfoWrapper>
      <HospitalName>청담우리동물병원</HospitalName>

      <StarBox>
        <Image
          src="/svgs/OneStar.svg"
          width={11.38}
          height={11}
          alt="OneStar"
        />

        <StarCount>4.7 (414)</StarCount>
      </StarBox>

      <IconBox>
        {ICON_ARR.map((data) => (
          <ColummBox key={data.id}>
            <Image
              src={data.url}
              width={data.width}
              height={data.height}
              alt="Icon"
            />
            <IconName>{data.content}</IconName>
          </ColummBox>
        ))}
      </IconBox>
    </HospitalInfoWrapper>
  );
};

export default HospitalInfo;

const HospitalInfoWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -5px 0px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 230px;
  padding-top: 34px;
  padding-left: 25px;
`;

const HospitalName = styled.h4`
  color: #111;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 10px;
`;

const StarCount = styled.h4`
  color: #767676;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

const IconBox = styled.div`
  display: flex;
  width: 330px;
  justify-content: space-between;
  align-items: center;
  margin-left: 7px;
  margin-top: 24px;
`;

const ColummBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 48px;
  height: 47px;
`;

const IconName = styled.h4`
  color: #111;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.06px;
`;
