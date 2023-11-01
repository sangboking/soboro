import Image from "next/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

const HomeHeader = () => {
  return (
    <HomeHeaderWrapper>
      <Link href="/insurance">
        <Image
          src="/svgs/Home.svg"
          width={20}
          height={20}
          alt="Home"
          style={{ cursor: "pointer" }}
        />
      </Link>
    </HomeHeaderWrapper>
  );
};

export default HomeHeader;

const HomeHeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 0.5px solid #dedede;
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
`;
