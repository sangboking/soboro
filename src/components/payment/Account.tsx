import Image from "next/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

const Account = () => {
  return (
    <AccountWrapper>
      <Title>보험 지급 계좌를 입력하세요</Title>

      <ColummBox>
        <ContentBox>
          <ContentTitle>반려동물</ContentTitle>
          <InputBox placeholder="아이의 이름을 입력하세요." />
        </ContentBox>

        <ContentBox>
          <ContentTitle>반려인</ContentTitle>
          <InputBox placeholder="반려인의 이름을 입력하세요." />
        </ContentBox>

        <ContentBox>
          <ContentTitle>반려인 계좌번호</ContentTitle>
          <BankBox>
            <BankName>KB국민</BankName>
            <Image
              src="/svgs/UnderArrow.svg"
              width={10}
              height={6}
              alt="UnderArrow"
              style={{ marginTop: "2px" }}
            />
          </BankBox>
          <CustomInputBox placeholder="계좌번호를 입력하세요." />
        </ContentBox>
      </ColummBox>

      <Link href="/payment/confirm">
        <Button>다음</Button>
      </Link>
    </AccountWrapper>
  );
};

export default Account;

const AccountWrapper = styled.div`
  width: 100%;
  height: 751px;
  padding-top: 19px;
`;

const Title = styled.h2`
  color: #111;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 22px;
`;

const ColummBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 27px;
  margin-top: 30px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

const ContentTitle = styled.h4`
  color: #555;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const InputBox = styled.input`
  width: 340px;
  height: 43px;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
  padding-left: 14px;

  &::placeholder {
    color: #c8c8c8;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
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
  margin-top: 309px;
  cursor: pointer;
  margin-left: 27px;
`;

const CustomInputBox = styled.input`
  width: 340px;
  height: 43px;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
  padding-left: 100px;

  &::placeholder {
    color: #c8c8c8;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const BankBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 17px;
  top: 46px;
  cursor: pointer;
`;

const BankName = styled.h4`
  color: #0091e2;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 10px;
`;
