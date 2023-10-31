import Image from "next/image";
import React from "react";

import styled from "styled-components";

const Flow = () => {
  return (
    <FlowWrapper>
      <Title>보험금청구 절차</Title>

      <Flow1Box>
        <Image src="/svgs/Flow1.svg" width={340} height={84.4} alt="Flow1" />
        <Image
          src="/svgs/Flow1-1.svg"
          width={18}
          height={20}
          alt="Flow1-1"
          style={{ position: "absolute", left: "14px", top: "22px" }}
        />
        <FlowContent>진료 내역 확인</FlowContent>
      </Flow1Box>

      <Flow2Box>
        <Image src="/svgs/Flow2.svg" width={340} height={84.4} alt="Flow2" />
        <Image
          src="/svgs/Flow2-2.svg"
          width={24}
          height={24}
          alt="Flow2-2"
          style={{ position: "absolute", left: "14px", top: "22px" }}
        />
        <FlowContent style={{ top: "24px" }}>
          약관동의 및 청구서 작성
        </FlowContent>
      </Flow2Box>

      <Flow2Box>
        <Image src="/svgs/Flow3.svg" width={340} height={84.4} alt="Flow3" />
        <Image
          src="/svgs/Flow3-3.svg"
          width={24}
          height={24}
          alt="Flow3-3"
          style={{ position: "absolute", left: "14px", top: "22px" }}
        />
        <FlowContent style={{ top: "24px" }}>서류 제출</FlowContent>
      </Flow2Box>

      <Flow2Box style={{ height: "66.764px" }}>
        <Image src="/svgs/Flow4.svg" width={340} height={66.764} alt="Flow4" />
        <Image
          src="/svgs/Flow4-4.svg"
          width={18}
          height={18}
          alt="Flow3-3"
          style={{ position: "absolute", left: "14px", top: "25px" }}
        />
        <FlowContent style={{ top: "23px" }}>접수완료 및 심사진행</FlowContent>
      </Flow2Box>

      <Button>보험금청구 바로 시작</Button>
    </FlowWrapper>
  );
};

export default Flow;

const FlowWrapper = styled.div`
  width: 100%;
  height: 751px;
  padding-top: 35px;
  padding-left: 25px;
`;

const Title = styled.h4`
  color: #111;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.1px;
`;

const Flow1Box = styled.div`
  width: 340px;
  height: 84.4px;
  margin-top: 30px;
  position: relative;
`;

const FlowContent = styled.h4`
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  top: 21px;
  left: 42px;
`;

const Flow2Box = styled.div`
  width: 340px;
  height: 84.4px;
  position: relative;
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
  margin-top: 244px;
  cursor: pointer;
`;
