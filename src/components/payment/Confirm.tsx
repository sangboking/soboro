import Image from "next/image";
import React from "react";

import styled from "styled-components";

const Confirm = () => {
  return (
    <ConfirmWrapper>
      <Image
        src="/images/Petpermint.png"
        width={122}
        height={31}
        alt="Petpermint"
        style={{ marginLeft: "25px" }}
      />

      <ContentBox>
        <ColummBox>
          <FlexBox>
            <Title>반려동물</Title>
            <Content>꾸꿍</Content>
          </FlexBox>
          <FlexBox>
            <Title>반려인</Title>
            <Content>유기현</Content>
          </FlexBox>
          <FlexBox>
            <Title>보험금 지급 계좌</Title>
            <Content>
              KB국민은행 <br />
              <br />
              5780012344794
            </Content>
          </FlexBox>
          <FlexBox>
            <Title>청구 진료 건수</Title>
            <Content>24시청담우리동물병원 3 건</Content>
          </FlexBox>
        </ColummBox>

        <Line />

        <FlexBox style={{ marginLeft: "20px" }}>
          <Title>청구 진료비 총엑</Title>
          <Content>156,000원</Content>
        </FlexBox>
      </ContentBox>

      <CautionBox>
        보상금 지급 관련 사항은 청구 보험사를 통해 안내 받을 수 있으며, 청구
        금액에 따라 추가 서류 요청이 있을 수 있습니다.
      </CautionBox>

      <Button>청구하기</Button>
    </ConfirmWrapper>
  );
};

export default Confirm;

const ConfirmWrapper = styled.div`
  width: 100%;
  height: 751px;
  padding-top: 21px;
`;

const ContentBox = styled.div`
  width: 350px;
  height: 308px;
  border-radius: 15px;
  border: 1px solid #c8c8c8;
  background: #fff;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.1);
  margin-top: 25px;
  margin-left: 21.5px;
  padding-top: 30px;
`;

const ColummBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 180px;
`;

const FlexBox = styled.div`
  width: 310px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h4`
  color: #555;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: -0.08px;
`;

const Content = styled.h4`
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
  letter-spacing: -0.08px;
  text-align: right;
`;

const Line = styled.div`
  width: 326px;
  height: 2px;
  background-color: #e9e9e9;
  margin-top: 26px;
  margin-left: 10px;
  margin-bottom: 26px;
`;

const CautionBox = styled.div`
  width: 340px;
  height: 42px;
  color: #aeaeae;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.06px;
  margin-left: 27px;
  margin-top: 21px;
`;

const Button = styled.button`
  width: 339px;
  height: 46px;
  border-radius: 1000px;
  border: 1px solid #0091e2;
  background: #43bbff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 198px;
  margin-left: 27px;
  cursor: pointer;
`;
