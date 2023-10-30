import { NOTICE_ARR } from "@/constants";
import React from "react";

import styled from "styled-components";

const Request = () => {
  return (
    <RequestWrapper>
      <VisitBox>
        요청사항<div>(선택)</div>
      </VisitBox>

      <Memo
        placeholder={`수의사 선생님께 전달할 메모를 작성해 주세요.(ex. 아이가 겁먹으면 입질을 해요.)`}
      />

      <Notice>
        <Title>유의사항</Title>

        {NOTICE_ARR.map((data) => (
          <ContentBox key={data.id}>
            <Dot>•</Dot>
            <Content>{data.content}</Content>
          </ContentBox>
        ))}
      </Notice>

      <AgreeTitle>개인정보 제공 동의</AgreeTitle>

      <AgreeBox>
        <AgreeContent>개인정보 제 3자 제공 동의 (필수)</AgreeContent>
        <AgreeContent className="underline">보기</AgreeContent>
      </AgreeBox>

      <AgreeCaution>
        예약 서비스 이용을 위한 개인정보 제 3자 제공 규정을 확인하였으며 이에
        동의합니다.
      </AgreeCaution>

      <ReservationButton>예약하기</ReservationButton>
    </RequestWrapper>
  );
};

export default Request;

const RequestWrapper = styled.div`
  width: 100%;
`;

const VisitBox = styled.div`
  width: 100%;
  height: 55px;
  padding-left: 24px;
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  border-bottom: 1px solid #c8c8c8;
  display: flex;
  align-items: center;

  div {
    color: #aeaeae;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    margin-top: 5px;
    margin-left: 3px;
  }
`;

const Memo = styled.textarea`
  width: 340px;
  height: 122px;
  padding: 13px 15px;
  border-radius: 10px;
  border: 0.758px solid #c8c8c8;
  background: #fff;
  resize: none;
  margin-top: 20px;
  margin-left: 27px;

  &::placeholder {
    color: #c8c8c8;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const Notice = styled.div`
  width: 340px;
  height: 192px;
  padding: 13px 15px;
  border-radius: 10px;
  background: #f5f5f5;
  margin-top: 15px;
  margin-left: 27px;
`;

const Title = styled.h4`
  color: #979797;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const ContentBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Dot = styled.div`
  color: #979797;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const Content = styled.div`
  width: 291px;
  color: #979797;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-left: 6px;
`;

const AgreeTitle = styled.h4`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 14px;
  margin-left: 25px;
`;

const AgreeBox = styled.div`
  width: 340px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: #f5f5f5;
  margin-top: 12px;
  margin-left: 27px;
  padding-left: 20px;
  padding-right: 20px;

  .underline {
    text-decoration: underline;
  }
`;

const AgreeContent = styled.h4`
  color: #979797;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const AgreeCaution = styled.h4`
  color: #979797;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  width: 340px;
  height: 36px;
  margin-top: 12px;
  margin-left: 27px;
`;

const ReservationButton = styled.button`
  display: flex;
  width: 339px;
  height: 46px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 0px 0px rgba(131, 131, 131, 0.25);
  border-radius: 1000px;
  border: 1px solid #0091e2;
  background: #43bbff;
  margin-top: 56px;
  margin-bottom: 52px;
  margin-left: 25px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
