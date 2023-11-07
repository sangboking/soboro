import React from "react";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

import CommunityHeader from "@/components/layout/CommunityHeader";
import CommunityNavbar from "@/components/layout/CommunityNavbar";

const index = () => {
  return (
    <CommunityWrapper>
      <CommunityHeader content="커뮤니티" />

      <Image
        src="/images/CommunityMenu.png"
        width={393}
        height={50}
        alt="CommunityMenu"
      />
      <Link href="/findfamily">
        <Image
          src="/images/CommunityFrame.png"
          width={393}
          height={606}
          alt="CommunityMenu"
          style={{ marginBottom: "10px" }}
        />
      </Link>

      <CommunityNavbar />
    </CommunityWrapper>
  );
};

export default index;

const CommunityWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
`;
