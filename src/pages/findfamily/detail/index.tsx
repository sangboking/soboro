import React from "react";

import styled from "styled-components";

import Header from "@/components/layout/Header";
import Image from "next/image";
import FindFamilyNavbar from "@/components/layout/FindFamilyNavbar";

const index = () => {
  return (
    <Wrapper>
      <Header content="가족 찾기" />

      <Image src="/images/BigCat.png" width={393} height={330} alt="BigCat" />

      <Title>[고양이] 한국 고양이</Title>

      <Line />

      <Image
        src="/images/DetailFrame.png"
        width={243}
        height={237}
        alt="DetailFrame"
        style={{ marginTop: "20px", marginLeft: "20px" }}
      />

      <Title style={{ marginTop: "48px" }}>입양/보호 문의</Title>

      <Image
        src="/images/Request.png"
        width={350}
        height={166}
        alt="Request"
        style={{ marginTop: "26px", marginLeft: "20px", marginBottom: "50px" }}
      />

      <FindFamilyNavbar />
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  color: #111;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 16px;
  margin-left: 16px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dedede;
  margin-top: 16px;
`;
