import Image from "next/image";
import React from "react";

import styled from "styled-components";

const Complete = () => {
  return (
    <CompleteWrapper>
      <Title>청구서 전송이 완료되었습니다.</Title>
      <SemiTitle>서류 심사는 주말 제외 최대 4일 정도 소요됩니다.</SemiTitle>

      <GageBar>
        <Gage />

        <CharacterBox>
          <Image
            src="/images/CatFood.png"
            width={51.2}
            height={45}
            alt="DogFood"
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/images/DogFood.png"
            width={55}
            height={42.58}
            alt="DogFood"
            style={{ objectFit: "cover" }}
          />
        </CharacterBox>

        <DateBox>11월 29일 지급 예정 </DateBox>

        <BlueText>서류접수</BlueText>
        <CenterText>심사진행</CenterText>
        <RightText>보험금 지급</RightText>
      </GageBar>

      <InfoBox>
        <FlexBox>
          <FlexTitle>반려동물</FlexTitle>
          <FlexContent>꾸꿍</FlexContent>
        </FlexBox>

        <FlexBox>
          <FlexTitle>반려인</FlexTitle>
          <FlexContent>유기현</FlexContent>
        </FlexBox>

        <FlexBox>
          <FlexTitle>신청일자</FlexTitle>
          <FlexContent>2023-11-10</FlexContent>
        </FlexBox>
      </InfoBox>

      <CautionBox>
        · 청구서 전송 결과는 카카오 알림톡으로 안내 드립니다. <br /> ·
        보험사에서 청구서가 접수되면 해당 보험사에서 연락 드립니다.
      </CautionBox>
    </CompleteWrapper>
  );
};

export default Complete;

const CompleteWrapper = styled.div`
  width: 100%;
  padding-top: 25px;
`;

const Title = styled.h4`
  color: #111;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 22px;
`;

const SemiTitle = styled.h5`
  color: #6a6a6a;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.065px;
  margin-top: 10px;
  margin-left: 20px;
`;

const GageBar = styled.div`
  width: 350px;
  height: 8px;
  position: relative;
  border-radius: 10px;
  background: #d9d9d9;
  margin-top: 91px;
  margin-left: 20px;
`;

const Gage = styled.div`
  width: 45px;
  height: 8px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #0091e2;
  position: absolute;
`;

const CharacterBox = styled.div`
  display: flex;
  width: 122px;
  height: 55px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1px;
  top: -66px;
`;

const DateBox = styled.div`
  width: 60px;
  height: 33px;
  position: absolute;
  text-align: right;
  color: #aeaeae;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.065px;
  right: 0;
  top: -39px;
`;

const BlueText = styled.span`
  color: #0091e2;
  font-family: AppleSDGothicNeoB00;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.065px;
  position: absolute;
  left: 0;
  bottom: -19px;
`;

const CenterText = styled.span`
  color: #aeaeae;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.065px;
  position: absolute;
  left: 155px;
  bottom: -19px;
`;

const RightText = styled.span`
  color: #aeaeae;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.065px;
  position: absolute;
  right: 0;
  bottom: -19px;
`;

const InfoBox = styled.div`
  display: flex;
  width: 350px;
  height: 148px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  border-radius: 15px;
  border: 1px solid #c6e0ff;
  background: #eff9ff;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.1);
  margin-top: 49px;
  margin-left: 20px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 306px;
`;

const FlexTitle = styled.h4`
  color: #555;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.07px;
`;

const FlexContent = styled.h4`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.07px;
`;

const CautionBox = styled.div`
  width: 350px;
  height: 42px;
  color: #aeaeae;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.065px;
  margin-top: 25px;
  margin-left: 20px;
`;
