import React from "react";

import styled from "styled-components";

const HospitalInfo2 = () => {
  return (
    <HospitalInfoWrapper>
      <Title>병원 정보</Title>

      <ColummBox>
        <FlexBox>
          <FlexTitle>진료시간</FlexTitle>
          <FlexContent>
            <div>진료중</div>&nbsp;10:00~17:00
          </FlexContent>
        </FlexBox>

        <FlexBox>
          <FlexTitle>휴일</FlexTitle>
          <FlexContent>매주 일요일 휴무</FlexContent>
        </FlexBox>

        <FlexBox>
          <FlexTitle>분야</FlexTitle>
          <FlexContent style={{ width: "270px" }}>
            노령동물전문 · 외과수술전문 · 슬개골탈구 · 피부치료전문 · 내과전문 ·
            정형외과전문 · 재활치료전문 · 야간응급진료
          </FlexContent>
        </FlexBox>

        <FlexBox>
          <FlexTitle>위치</FlexTitle>
          <FlexContent>서울 강남구 삼성로 614</FlexContent>
        </FlexBox>
      </ColummBox>
    </HospitalInfoWrapper>
  );
};

export default HospitalInfo2;

const HospitalInfoWrapper = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-left: 25px;
`;

const Title = styled.h2`
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ColummBox = styled.div`
  display: flex;
  width: 340px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 15px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const FlexTitle = styled.h4`
  width: 44px;
  color: #aeaeae;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FlexContent = styled.h4`
  color: #555;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;

  div {
    color: #0091e2;
  }
`;
