import { ANIMAL_ARR } from "@/constants";
import Image from "next/image";
import React from "react";

import styled from "styled-components";

const Review = () => {
  return (
    <ReviewWrapper>
      <Title>
        리뷰 &nbsp;<div>414</div>
      </Title>

      <ImgBox>
        {[1, 2, 3].map((data) => (
          <Image
            key={data}
            src={`/images/Animal${data}.jpeg`}
            width={106}
            height={106}
            alt="Animal"
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
        ))}
      </ImgBox>

      <GrayLine />

      <ReceiptBox>
        {ANIMAL_ARR.map((data) => (
          <ReceiptCard key={data.id}>
            <CheckBadgeBox>
              <CheckBox>
                <CheckBadge>
                  <Image
                    src="/svgs/Check.svg"
                    width={12}
                    height={12}
                    alt="Check"
                  />
                  영수증 인증
                </CheckBadge>
                <CheckBadge>강아지</CheckBadge>
              </CheckBox>

              <Date>{data.date}</Date>
            </CheckBadgeBox>

            <AnimalInfo>{data.info}</AnimalInfo>

            <ContentBox>
              <AnimalContent>{data.content}</AnimalContent>
              <DetailLink>상세보기</DetailLink>
            </ContentBox>

            <TagBox>
              {data.badge.map((data) => (
                <Tag key={data}>{data}</Tag>
              ))}
            </TagBox>
          </ReceiptCard>
        ))}
      </ReceiptBox>

      <AllReviewBox>리뷰 전체보기</AllReviewBox>
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-left: 21px;
`;

const Title = styled.h2`
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;

  div {
    color: #23bc3a;
    font-weight: 600;
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin-top: 10px;
`;

const GrayLine = styled.div`
  width: 340px;
  height: 1px;
  background-color: #ebebeb;
  margin-top: 22px;
  margin-bottom: 22px;
`;

const ReceiptBox = styled.div`
  width: 352.692px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ReceiptCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
`;

const CheckBadgeBox = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
  align-items: flex-start;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
`;

const CheckBadge = styled.div`
  display: flex;
  padding: 3px 5px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 7px;
  background: #f0f0f0;
  color: #555;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Date = styled.h4`
  color: #767676;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AnimalInfo = styled.h4`
  color: #767676;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;

const AnimalContent = styled.div`
  max-width: 350px;
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
`;

const DetailLink = styled.h4`
  color: #767676;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`;

const TagBox = styled.div`
  display: flex;
  width: 350px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  padding: 3px 7px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
  flex-wrap: wrap;
  border-radius: 13.5px;
  border: 1px solid #cfeeff;
  background-color: #eff9ff;
  color: #00a3ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.42px;
`;

const AllReviewBox = styled.div`
  width: 350px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
  background: #fff;
  color: #555;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 41px;
`;
