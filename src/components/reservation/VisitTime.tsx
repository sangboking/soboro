import React from "react";

import styled from "styled-components";

const VisitTime = () => {
  return (
    <VisitTimeWrapper>
      <VisitBox>방문 시간</VisitBox>

      <TimeSection>
        <TimeBox>
          <Title>오전</Title>

          <BadegBox style={{ marginTop: "15px" }}>
            <Badge>10:30</Badge>
            <Badge>11:00</Badge>
            <Badge>11:30</Badge>
          </BadegBox>

          <Title style={{ marginTop: "23px", marginBottom: "15px" }}>
            오후
          </Title>

          <ColummBadgeBox>
            <BadegBox>
              <Badge>10:30</Badge>
              <Badge>11:00</Badge>
              <Badge>11:30</Badge>
              <Badge>11:30</Badge>
            </BadegBox>

            <BadegBox>
              <Badge>2:00</Badge>
              <Badge>2:30</Badge>
              <Badge>3:00</Badge>
              <Badge>3:30</Badge>
            </BadegBox>

            <BadegBox>
              <Badge>4:00</Badge>
              <Badge>4:30</Badge>
            </BadegBox>
          </ColummBadgeBox>
        </TimeBox>
      </TimeSection>
    </VisitTimeWrapper>
  );
};

export default VisitTime;

const VisitTimeWrapper = styled.div`
  width: 100%;
`;

const VisitBox = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #c8c8c8;
  padding-left: 24px;
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  align-items: center;
`;

const TimeSection = styled.section`
  width: 100%;
  height: 305px;
  padding-top: 19px;
  padding-left: 26.5px;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Title = styled.h4`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.08px;
`;

const BadegBox = styled.div`
  display: flex;
  width: 340px;
  align-items: center;
  gap: 12px;
`;

const Badge = styled.div`
  display: flex;
  width: 75px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
  background: #fff;
  color: #555;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.09px;
`;

const ColummBadgeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
