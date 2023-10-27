import Image from "next/image";
import React from "react";

import styled from "styled-components";

interface Props {
  content: string;
}

const Header = ({ content }: Props) => {
  return (
    <HeaderWrapper>
      <Image
        src="/svgs/BackArrow.svg"
        width={20}
        height={18.46}
        alt="BackArrow"
        style={{ cursor: "pointer" }}
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
`;

const Content = styled.h2`
  color: #111;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
