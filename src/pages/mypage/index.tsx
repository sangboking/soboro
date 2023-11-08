import Image from "next/image";
import React from "react";

import styled from "styled-components";

import MypageHeader from "@/components/layout/MypageHeader";
import MypageNavbar from "@/components/layout/MypageNavbar";

const index = () => {
  return (
    <Wrapper>
      <MypageHeader content="마이페이지" />

      <Image src="/images/Profile.png" width={393} height={97} alt="Profile" />
      <GrayBox />
      <Image
        src="/images/ProfileCat.png"
        width={393}
        height={242}
        alt="ProfileCat"
      />
      <GrayBox />
      <Image
        src="/images/MyShopping.png"
        width={393}
        height={143}
        alt="MyShopping"
      />
      <GrayBox />
      <Image
        src="/images/BottomFrame.png"
        width={393}
        height={214}
        alt="BottomFrame"
        style={{ marginBottom: "50px" }}
      />

      <MypageNavbar />
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

const GrayBox = styled.div`
  width: 393px;
  height: 15px;
  background-color: #f9f9f9;
`;
