import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import styled from "styled-components";

interface Props {
  content: string;
}

const MypageHeader = ({ content }: Props) => {
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
      <Image
        src="/svgs/Setting.svg"
        width={20}
        height={21}
        alt="Setting"
        style={{ cursor: "pointer" }}
      />
    </HeaderWrapper>
  );
};

export default MypageHeader;

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #dedede;
  background: #fff;
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
