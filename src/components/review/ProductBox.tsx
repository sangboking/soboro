import { PRODUCT_ARR } from "@/constants";
import Image from "next/image";
import React from "react";

import styled from "styled-components";

const ProductBox = () => {
  return (
    <ProductBoxWrapper>
      <Title>
        #곰팡이성피부염&nbsp; <div>관련 상품</div>
      </Title>

      <ProducFlextBox>
        {PRODUCT_ARR.map((data) => (
          <ColummBox key={data.id}>
            <Image
              src={data.url}
              width={120}
              height={120}
              alt="Product"
              style={{ borderRadius: "15px", border: "0.5px solid #dedede" }}
            />
            <ProductName>{data.name}</ProductName>
            <Price>
              {data.price}
              <div>원</div>
            </Price>
            <StarBox>
              <Image src="/svgs/Star.svg" width={59} height={11} alt="Star" />
              <ReviewCount>({data.star})</ReviewCount>
            </StarBox>
          </ColummBox>
        ))}
      </ProducFlextBox>
    </ProductBoxWrapper>
  );
};

export default ProductBox;

const ProductBoxWrapper = styled.div`
  width: 100%;
  height: 343px;
  padding-top: 20px;
  padding-left: 20px;
`;

const Title = styled.h2`
  color: #0091e2;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.6px;
  display: flex;

  div {
    color: #3e3a39;
  }
`;

const ProducFlextBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  overflow-x: hidden;
`;

const ColummBox = styled.div`
  min-width: 120px;
  height: 202px;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.div`
  color: #111;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  margin-top: 8px;
`;

const Price = styled.h4`
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  margin-top: 8px;
  display: flex;

  div {
    color: #111;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
  }
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

const ReviewCount = styled.h4`
  color: #888;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  margin-left: 1.62px;
`;
