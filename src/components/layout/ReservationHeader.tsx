import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import styled from "styled-components";

interface Props {
  content: string;
}

const ReservationHeader = ({ content }: Props) => {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <Image
        src="/svgs/BackArrow.svg"
        width={20}
        height={18.46}
        alt="BackArrow"
        style={{ cursor: "pointer", position: "absolute", left: "20px" }}
        onClick={() => router.back()}
      />

      <Content>{content}</Content>
    </HeaderWrapper>
  );
};

export default ReservationHeader;

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  padding: 15px 0px 15px 20px;
  align-items: center;
  justify-content: center;
  gap: 122px;
  border-bottom: 0.5px solid #dedede;
  background-color: #fff;
  position: relative;
  z-index: 9999;
`;

const Content = styled.h2`
  color: #111;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
