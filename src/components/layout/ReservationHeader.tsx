import Image from "next/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

interface Props {
  content: string;
}

const ReservationHeader = ({ content }: Props) => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <Image
          src="/svgs/BackArrow.svg"
          width={20}
          height={18.46}
          alt="BackArrow"
          style={{ cursor: "pointer" }}
        />
      </Link>

      <Content>{content}</Content>
    </HeaderWrapper>
  );
};

export default ReservationHeader;

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  padding: 15px 165px 15px 20px;
  align-items: center;
  gap: 122px;
  border-bottom: 0.5px solid #dedede;
  background-color: #fff;
`;

const Content = styled.h2`
  color: #111;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
