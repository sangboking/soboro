import React, { useState } from "react";
import Image from "next/image";

import styled, { css } from "styled-components";
import {
  DATE_ARR_1,
  DATE_ARR_2,
  DATE_ARR_3,
  DATE_ARR_4,
  DATE_ARR_5,
  DAY_ARR,
} from "@/constants";

const VisitDate = () => {
  const [visit, setVisit] = useState(0);

  const onClickDate = () => {
    if (visit === 0) {
      setVisit(30);
    }

    if (visit === 30) {
      setVisit(0);
    }
  };

  return (
    <VisitDateWrapper>
      <VisitBox>방문 날짜</VisitBox>

      <CalendarSection onClick={onClickDate}>
        <CalendarBox>
          <Image
            src="/svgs/CalendarClip.svg"
            width={14}
            height={40}
            alt="CalendarClip"
            style={{ position: "absolute", left: "43px", top: "-20px" }}
          />
          <Image
            src="/svgs/CalendarClip.svg"
            width={14}
            height={40}
            alt="CalendarClip"
            style={{ position: "absolute", right: "43px", top: "-20px" }}
          />

          <CalendarHeader>2023년 11월</CalendarHeader>

          <ContentBox>
            <DateBox>
              {DAY_ARR.map((data) => (
                <Date key={data} date={data}>
                  {data}
                </Date>
              ))}
            </DateBox>

            <DateBox>
              {DATE_ARR_1.map((data) => (
                <Day key={data.id} color={data.color}>
                  {data.data}
                </Day>
              ))}
            </DateBox>

            <DateBox>
              {DATE_ARR_2.map((data) => (
                <Day key={data}>{data}</Day>
              ))}
            </DateBox>

            <DateBox>
              {DATE_ARR_3.map((data) => (
                <Day key={data}>{data}</Day>
              ))}
            </DateBox>

            <DateBox>
              {DATE_ARR_4.map((data) => (
                <Day key={data}>{data}</Day>
              ))}
            </DateBox>

            <DateBox>
              <Day>26</Day>
              <Day>27</Day>
              <Day>28</Day>
              <Day>29</Day>
              <DayCustom visit={visit}>30</DayCustom>
              {DATE_ARR_5.map((data) => (
                <Day key={data.id} color={data.color}>
                  {data.data}
                </Day>
              ))}
            </DateBox>
          </ContentBox>
        </CalendarBox>
      </CalendarSection>
    </VisitDateWrapper>
  );
};

export default VisitDate;

interface DateProps {
  date: string;
}

interface DayProps {
  color?: string;
}

interface CustomProps {
  visit: number;
}

const VisitDateWrapper = styled.div`
  width: 100%;
`;

const VisitBox = styled.div`
  width: 100%;
  height: 51px;
  border-bottom: 0.5px solid #dedede;
  padding-top: 16px;
  padding-left: 25px;
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const CalendarSection = styled.div`
  width: 100%;
  height: 406px;
  padding-top: 40px;
  padding-left: 31px;
  cursor: pointer;
`;

const CalendarBox = styled.div`
  width: 328px;
  height: 335px;
  border-radius: 15px;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 2px 2px 5px 0px rgba(99, 99, 99, 0.1),
    6px 8px 10px 0px rgba(99, 99, 99, 0.09),
    14px 17px 13px 0px rgba(99, 99, 99, 0.05),
    24px 31px 16px 0px rgba(99, 99, 99, 0.01),
    38px 48px 17px 0px rgba(99, 99, 99, 0);

  display: flex;
  flex-direction: column;
  position: relative;
`;

const CalendarHeader = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 15px 15px 0px 0px;
  background: #ff7676;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 275px;
  display: flex;
  flex-direction: column;
  column-gap: 2px;
  padding-top: 9px;
  padding-left: 20px;
`;

const DateBox = styled.div`
  width: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const Date = styled.div<DateProps>`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.date === "일" ? "#ff4040" : "#555")};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const Day = styled.div<DayProps>`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #555;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => (props.color === "gray" ? "#aeaeae" : "#555")};
`;

const DayCustom = styled.div<CustomProps>`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #555;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => (props.visit ? "#43BBFF" : "#555")};
  border: ${(props) => props.visit && "1px solid #0091e2"};
  border-radius: 30px;
`;
