import Image from "next/image";
import React from "react";

import styled from "styled-components";

import FindFamilyNavbar from "@/components/layout/FindFamilyNavbar";
import Header from "@/components/layout/Header";

const index = () => {
  return (
    <Wrapper>
      <Header content="가족 찾기" />

      <Image
        src="/images/FindFamilyMenu.png"
        width={373}
        height={28}
        alt="FindFamilyMenu"
        style={{ marginTop: "20px", marginLeft: "20px" }}
      />

      <Image
        src="/images/FindCatFrame.png"
        width={350}
        height={606}
        alt="FindCatFrame"
        style={{
          marginTop: "25px",
          marginLeft: "22px",
          marginBottom: "30px",
          cursor: "pointer",
        }}
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
