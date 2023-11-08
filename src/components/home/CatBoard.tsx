import React, { useState } from "react";
import Image from "next/image";

import styled from "styled-components";

import { DISEASE_ARR } from "@/constants";

const CatBoard = () => {
  const [selectedDisease, setSelectedDisease] = useState("");

  const onClickDisease = (disease: string) => {
    setSelectedDisease(disease);
  };

  return (
    <CatBoardWrapper>
      <Image
        src="/svgs/Clip.svg"
        width={176}
        height={56}
        alt="Clip"
        style={{
          position: "absolute",
          left: "87px",
          bottom: "510px",
          zIndex: "10",
        }}
      />

      <TopCard>
        <Title>우리 아이, 어느 곳이 아픈가요?</Title>

        <CatBox>
          <Image
            src="/images/Cat.png"
            width={238}
            height={232}
            alt="Cat"
            style={{
              marginTop: "29px",
              marginLeft: "26px",
            }}
          />

          {selectedDisease === "눈" && (
            <>
              <Image
                src="/svgs/BigLens.svg"
                width={115}
                height={115}
                alt="BigLens"
                style={{ position: "absolute", top: "50px", right: "75px" }}
              />
              <Image
                src="/svgs/Eye.svg"
                width={77}
                height={77}
                alt="BigLens"
                style={{ position: "absolute", top: "62.5px", right: "100px" }}
              />
            </>
          )}

          {selectedDisease === "피부" && (
            <>
              <Image
                src="/svgs/BigLens.svg"
                width={115}
                height={115}
                alt="BigLens"
                style={{ position: "absolute", top: "113px", right: "69px" }}
              />
              <Image
                src="/svgs/Skin.svg"
                width={80}
                height={80}
                alt="BigLens"
                style={{ position: "absolute", top: "124px", right: "93px" }}
              />
            </>
          )}
        </CatBox>

        <DiseaseBox>
          {DISEASE_ARR.map((data) => (
            <Badge
              value={data}
              selectedDisease={selectedDisease}
              key={data}
              onClick={() => onClickDisease(data)}
            >
              {data}
            </Badge>
          ))}
        </DiseaseBox>
      </TopCard>

      <MiddleCard />
      <BottomCard />
    </CatBoardWrapper>
  );
};

export default CatBoard;

interface IBadge {
  value: string;
  selectedDisease: string;
}

const CatBoardWrapper = styled.div`
  width: 350px;
  height: 529px;
  border-radius: 20px;
  background: #43bbff;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  margin-top: 54px;
  position: relative;
`;

const TopCard = styled.div`
  width: 334px;
  height: 501px;
  border-radius: 17px;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 8px;
  top: 8px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  color: #111;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 23px;
`;

const CatBox = styled.div`
  width: 290px;
  height: 290px;
  border-radius: 15px;
  border: 1px solid #c8c8c8;
  margin-top: 12px;
  position: relative;
`;

const DiseaseBox = styled.div`
  display: flex;
  width: 289px;
  height: 107px;
  align-items: flex-start;
  align-content: flex-start;
  row-gap: 6px;
  column-gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Badge = styled.div<IBadge>`
  padding: 6px 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.value === props.selectedDisease ? "#0091E2" : "#555"};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: ${(props) =>
    props.value === props.selectedDisease
      ? "1px solid #0091E2"
      : "1px solid #c8c8c8"};
  background: ${(props) =>
    props.value === props.selectedDisease ? "#EFF9FF" : "#fff"};
  border-radius: 1000px;
  cursor: pointer;
`;

const MiddleCard = styled.div`
  width: 334px;
  height: 433px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 81px;
  left: 8px;
  z-index: 8;
`;

const BottomCard = styled.div`
  width: 334px;
  height: 432px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 87px;
  left: 8px;
`;
