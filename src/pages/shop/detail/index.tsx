import React from "react";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

import ShopDetailHeader from "@/components/layout/ShopDetailHeader";

const index = () => {
  return (
    <ShopDetailWrapper>
      <ShopDetailHeader content="상품상세정보" />

      <Image src="/images/Shampoo.png" width={393} height={393} alt="Shampoo" />
      <Image
        src="/svgs/FootPrint.svg"
        width={41.289}
        height={30}
        alt="FootPrint"
        style={{ position: "absolute", top: "402px", right: "17.71px" }}
      />

      <Image src="/images/Pokens.png" width={393} height={228} alt="Pokens" />

      <ReservationFooterWrapper>
        <ReviewButton>장바구니</ReviewButton>

        <Link href="/shop">
          <ReservationButton>구매하기</ReservationButton>
        </Link>
      </ReservationFooterWrapper>
    </ShopDetailWrapper>
  );
};

export default index;

const ShopDetailWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
`;

const ReservationFooterWrapper = styled.footer`
  width: 100%;
  height: 105px;
  position: sticky;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: -1px 0px 4px 0px rgba(0, 0, 0, 0.1);
  padding-top: 15px;
  padding-left: 20px;
  display: flex;
  gap: 10px;
  z-index: 9999;
`;

const ReviewButton = styled.button`
  width: 108px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
  background: #fff;
  color: #555;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ReservationButton = styled.button`
  width: 232px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid #de8000;
  background: #ffb542;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
