import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import styled from "styled-components";

interface Props {
  content: string;
}

const CommunityHeader = ({ content }: Props) => {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <Image
        src="/svgs/BackArrow.svg"
        width={20}
        height={18.46}
        alt="BackArrow"
        style={{ cursor: "pointer" }}
        onClick={() => router.back()}
      />

      <Content>{content}</Content>

      <IconBox>
        <Image
          src="/svgs/BlackLens.svg"
          width={20}
          height={19.98}
          alt="BlackLens"
          style={{ cursor: "pointer" }}
        />
        <Image
          src="/svgs/BlackHome.svg"
          width={20}
          height={20}
          alt="BlackHome"
          style={{ cursor: "pointer" }}
        />
      </IconBox>
    </HeaderWrapper>
  );
};

export default CommunityHeader;

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  padding: 15px 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #dedede;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const Content = styled.h2`
  color: #111;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const IconBox = styled.div`
  width: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
