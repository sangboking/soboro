/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import styled from "styled-components";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.push("/diagnosis");
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <SearchWrapper>
      <Image src="/images/Loading.png" width={190} height={190} alt="Loading" />

      <Content>
        진료 내역을
        <br /> 검색 중입니다.
      </Content>
    </SearchWrapper>
  );
};

export default index;

const SearchWrapper = styled.div`
  width: 393px;
  height: 100vh;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    animation: rotate_image 4s linear infinite;
    transform-origin: 50% 50%;

    @keyframes rotate_image {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const Content = styled.div`
  width: 137px;
  height: 60px;
  color: #383635;

  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.12px;
  margin-top: 41px;
`;
