import Image from "next/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

import { EXPENSE_ARR } from "@/constants";

const MedicalExpense = () => {
  return (
    <MedicalExpenseWrapper>
      <Title>24시청담우리동물병원</Title>

      <ExpenseFlexbox>
        {EXPENSE_ARR.map((data) => (
          <ExpenseCard key={data.id}>
            <Image
              src="/svgs/Checkbox.svg"
              width={20}
              height={20}
              alt="Checkbox"
            />

            <ColummBox>
              <FlexBox>
                <FlexTitle>진료 일자</FlexTitle>
                <FlexContent>{data.date}</FlexContent>
              </FlexBox>

              <FlexBox style={{ width: "277px" }}>
                <FlexTitle>납부한 진료비</FlexTitle>

                <PriceBox>
                  <NoBillBox>미청구</NoBillBox>
                  <FlexContent>{data.price}</FlexContent>
                </PriceBox>
              </FlexBox>
            </ColummBox>
          </ExpenseCard>
        ))}
      </ExpenseFlexbox>

      <Link href="/payment/account">
        <Button>선택 완료</Button>
      </Link>
    </MedicalExpenseWrapper>
  );
};

export default MedicalExpense;

const MedicalExpenseWrapper = styled.div`
  width: 100%;
  height: 670px;
  padding-top: 20px;
  padding-left: 22px;
`;

const Title = styled.h4`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.07px;
`;

const ExpenseFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin-top: 21px;
`;

const ExpenseCard = styled.div`
  width: 340px;
  height: 83px;
  border-radius: 10px;
  border: 1px solid #66b7e4;
  background: #eff9ff;
  padding-left: 15px;

  display: flex;
  align-items: center;
  gap: 15px;
`;

const ColummBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16.5px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 270px;
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
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.07px;
`;

const PriceBox = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
`;

const NoBillBox = styled.div`
  width: 46px;
  height: 21px;
  justify-content: center;
  align-items: center;
  display: flex;

  color: #888;

  text-align: center;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.06px;
  border-radius: 5px;
  background: #dae8f0;
`;

const Button = styled.button`
  display: flex;
  width: 339px;
  height: 46px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 0px 0px rgba(131, 131, 131, 0.25);
  border-radius: 1000px;
  border: 1px solid #0091e2;
  background: #43bbff;
  color: #fff;

  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 229px;
  margin-left: 5px;
  cursor: pointer;
`;
