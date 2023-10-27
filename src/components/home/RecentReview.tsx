import React from "react";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";
import { RECEIPT_ARR, REVIEW_ARR } from "@/constants";

const RecentReview = () => {
  return (
    <RecentReviewWrapper>
      <Title>최근 등록된 리뷰</Title>

      <BadgeBox>
        {REVIEW_ARR.map((data) => (
          <Badge key={data}>{data}</Badge>
        ))}
      </BadgeBox>

      <ReviewBox>
        {RECEIPT_ARR.map((data) => (
          <ReviewCard key={data.id}>
            <CheckBadgeBox>
              <CheckBadge>
                <Image
                  src="/svgs/Check.svg"
                  width={12}
                  height={12}
                  alt="Check"
                />
                영수증 인증
              </CheckBadge>
            </CheckBadgeBox>

            <PetInfo>{data.petInfo}</PetInfo>
            <Date>{data.date}</Date>
            <Content>{data.content}</Content>

            <Link href="/review">
              <LinkBox>
                <LeftBox>
                  <HospitalName>24시 샤인동물메디컬센터</HospitalName>
                  <Location>서울시 송파구</Location>
                </LeftBox>

                <Image
                  src="/svgs/RightArrow.svg"
                  width={9}
                  height={7}
                  alt="RightArrow "
                />
              </LinkBox>
            </Link>
          </ReviewCard>
        ))}
      </ReviewBox>
    </RecentReviewWrapper>
  );
};

export default RecentReview;

const RecentReviewWrapper = styled.div`
  width: 100%;
  height: 509px;
  padding-top: 20px;
  padding-left: 20px;
`;

const Title = styled.h2`
  color: #111;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BadgeBox = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 25px;

  :first-child {
    border: 1px solid #0091e2;
    color: #0091e2;
  }
`;

const Badge = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #767676;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 1px solid #c8c8c8;
  border-radius: 1000px;
  border: 1px solid #dedede;
  background-color: #fff;
  cursor: pointer;
`;

const ReviewBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  overflow-x: hidden;
  margin-top: 25px;
  height: 351px;
`;

const ReviewCard = styled.div`
  min-width: 268px;
  height: 347px;
  border-radius: 15px;
  border: 1px solid #dedede;
  background: #fff;
  box-shadow: 4px 4px 0px 0px #dbdbdb;
  padding: 20px;
`;

const CheckBadgeBox = styled.div`
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
  background: #eaf7ff;
  color: #555;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PetInfo = styled.h5`
  color: #767676;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
`;

const Date = styled.h5`
  color: #767676;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 4px;
`;

const Content = styled.div`
  width: 228px;
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
`;

const LinkBox = styled.div`
  display: flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #dedede;
  margin-top: 25px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  flex: 1 0 0;
`;

const HospitalName = styled.h4`
  color: #111;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Location = styled.h4`
  color: #767676;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
