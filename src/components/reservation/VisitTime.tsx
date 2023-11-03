import React, { useState } from "react";

import styled from "styled-components";

const VisitTime = () => {
  const [checkArr, setCheckArr] = useState<string[]>([]);

  const onClickCheckbox = (id: string) => {
    if (checkArr.includes(id)) {
      const tempArr = [...checkArr].filter((el) => el !== id);
      return setCheckArr([...tempArr]);
    }

    const tempArr = [...checkArr];
    tempArr.push(id);
    setCheckArr([...tempArr]);
  };

  return (
    <VisitTimeWrapper>
      <VisitBox>방문 시간</VisitBox>

      <TimeSection>
        <TimeBox>
          <Title>오전</Title>

          <BadegBox style={{ marginTop: "15px" }}>
            {["10:30", "11:00", "11:30"].map((data) => (
              <Badge
                key={data}
                data={data}
                checkArr={checkArr}
                onClick={() => onClickCheckbox(data)}
              >
                {data}
              </Badge>
            ))}
          </BadegBox>

          <Title style={{ marginTop: "23px", marginBottom: "15px" }}>
            오후
          </Title>

          <ColummBadgeBox>
            <BadegBox>
              {["12:00", "12:30", "1:00", "1:30"].map((data) => (
                <Badge
                  key={data}
                  data={data}
                  checkArr={checkArr}
                  onClick={() => onClickCheckbox(data)}
                >
                  {data}
                </Badge>
              ))}
            </BadegBox>

            <BadegBox>
              {["2:00", "2:30", "3:00", "3:30"].map((data) => (
                <Badge
                  key={data}
                  data={data}
                  checkArr={checkArr}
                  onClick={() => onClickCheckbox(data)}
                >
                  {data}
                </Badge>
              ))}
            </BadegBox>

            <BadegBox>
              {["4:00", "4:30"].map((data) => (
                <Badge
                  key={data}
                  data={data}
                  checkArr={checkArr}
                  onClick={() => onClickCheckbox(data)}
                >
                  {data}
                </Badge>
              ))}
            </BadegBox>
          </ColummBadgeBox>
        </TimeBox>
      </TimeSection>
    </VisitTimeWrapper>
  );
};

export default VisitTime;

interface Props {
  data: string;
  checkArr: string[];
}

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

const Badge = styled.div<Props>`
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
  cursor: pointer;
  background-color: ${(props) =>
    props.checkArr.includes(props.data) ? "#eaeaea" : "#fff"};

  color: ${(props) =>
    props.checkArr.includes(props.data) ? "#aeaeae" : "#555"};
  border: ${(props) =>
    props.checkArr.includes(props.data) ? " none " : "1px solid #c8c8c8"};
`;

const ColummBadgeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
