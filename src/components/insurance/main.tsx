import Image from "next/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

const Main = () => {
  return (
    <MainWrapper>
      <Image
        src="/svgs/Output.svg"
        width={353}
        height={93}
        alt="Output"
        style={{ zIndex: "5" }}
      />

      <Image
        src="/svgs/Exit.svg"
        width={324}
        height={48}
        alt="Exit"
        style={{
          position: "absolute",
          top: "45px",
          right: "33px",
          zIndex: "5",
        }}
      />

      <Image
        src="/svgs/BlackCircle.svg"
        width={292}
        height={16}
        alt="BlackCircle"
        style={{
          position: "absolute",
          top: "61px",
          right: "50px",
          zIndex: "5",
        }}
      />

      <OpacityBox>
        <Recipe>
          <Image
            src="/images/Recipe.png"
            width={269}
            height={197}
            alt="Recipe"
            className="recipe"
          />
        </Recipe>
      </OpacityBox>

      <MainTitle>
        3세 페르시안
        <span>
          &nbsp; 아이들이 <br />
          가장 많이 가입한 보험이에요
        </span>
      </MainTitle>

      <PetInsuranceBox>
        <InsuranceCard>
          <CardTitle>삼성화재 다이렉트 펫보험</CardTitle>
          <CardContent>
            반려견을 만 20세까지 든든하게 지켜주는 의료실비보험
          </CardContent>
        </InsuranceCard>

        <InsuranceCard>
          <CardTitle>메리츠화재 펫퍼민트</CardTitle>
          <CardContent>
            나이가 들수록 걱정되는 우리아이 건강, 20세까지 심사 없이 자동
            갱신되는 펫퍼민트
          </CardContent>
        </InsuranceCard>
      </PetInsuranceBox>

      <SemiTitle>자주 이용하는 서비스</SemiTitle>

      <ServiceBox>
        <Link href="/payment">
          <ServiceCard>
            <Image src="/svgs/Claim.svg" width={12} height={16} alt="Claim" />
            <ServiceContent>보험금청구</ServiceContent>
          </ServiceCard>
        </Link>

        <ServiceCard>
          <Image src="/svgs/Payment.svg" width={15} height={15} alt="Claim" />
          <ServiceContent>보험료납입</ServiceContent>
        </ServiceCard>
      </ServiceBox>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  padding-top: 24.34px;
  padding-left: 22px;
  position: relative;
`;

const OpacityBox = styled.div`
  width: 269.145px;
  height: 196.528px;
  position: absolute;
  top: 65px;
  left: 62px;
  z-index: 50;
  overflow: hidden;
`;

const Recipe = styled.div`
  animation: slideUp 1.2s ease-in-out forwards;
  @keyframes slideUp {
    0% {
      transform: translateY(-160px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

const MainTitle = styled.h3`
  width: 269px;
  height: 69px;
  color: #0091e2;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 170px;

  span {
    color: #111;
  }
`;

const PetInsuranceBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  overflow-x: hidden;
  margin-top: 20px;
  height: 160px;
`;

const InsuranceCard = styled.div`
  min-width: 243px;
  height: 146px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  gap: 15px;

  border-radius: 15px;
  border: 1px solid rgba(200, 200, 200, 0.53);
  background: #fff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1),
    4px 5px 6px 0px rgba(0, 0, 0, 0.09), 9px 11px 9px 0px rgba(0, 0, 0, 0.05),
    16px 20px 10px 0px rgba(0, 0, 0, 0.01), 25px 31px 11px 0px rgba(0, 0, 0, 0);
`;

const CardTitle = styled.h4`
  color: #111;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CardContent = styled.h4`
  width: 196px;
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SemiTitle = styled.h4`
  color: #111;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 30px;
`;

const ServiceBox = styled.div`
  display: flex;
  width: 340px;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 44px;
`;

const ServiceCard = styled.div`
  display: flex;
  width: 159px;
  height: 38px;
  padding: 10px 20px;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  border-radius: 10px;
  border: 0.5px solid #c8c8c8;
  background: #fff;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1),
    3px 2px 4px 0px rgba(0, 0, 0, 0.09), 7px 5px 5px 0px rgba(0, 0, 0, 0.05),
    12px 10px 6px 0px rgba(0, 0, 0, 0.01), 19px 15px 7px 0px rgba(0, 0, 0, 0);
`;

const ServiceContent = styled.h4`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
