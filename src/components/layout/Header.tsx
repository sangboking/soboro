import Image from "next/image";

import { useRouter } from "next/navigation";
import React from "react";

import styled from "styled-components";

interface Props {
  content: string;
}

const Header = ({ content }: Props) => {
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
        src="/svgs/BlackLens.svg"
        width={20}
        height={19.98}
        alt="BlackLens"
        style={{ cursor: "pointer" }}
      />
    </HeaderWrapper>
  );
};

export default Header;

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
  z-index: 20;
`;

const Content = styled.h2`
  color: #111;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
