import React from "react";

import styled from "styled-components";

const CountBox = () => {
  return (
    <CountBoxWrapper>
      <GrayBox>
        <SmallBox>외래 3 건</SmallBox>
        <CountSpan>입원 0 건</CountSpan>
      </GrayBox>
    </CountBoxWrapper>
  );
};

export default CountBox;

const CountBoxWrapper = styled.div`
  width: 100%;
  height: 71px;
  display: flex;
  align-items: center;
  padding-left: 25px;
`;

const GrayBox = styled.div`
  width: 340px;
  height: 42px;
  border-radius: 10px;
  background: #f4f4f4;
  padding-left: 3px;
  display: flex;
  align-items: center;
`;

const SmallBox = styled.div`
  width: 168px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
  background: #fff;
  color: #555;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.07px;
`;

const CountSpan = styled.span`
  color: #aeaeae;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.07px;
  margin-left: 58px;
`;
