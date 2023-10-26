import Image from "next/image";
import React from "react";

import styled from "styled-components";

const RecentReview = () => {
  const DISEASE_ARR = ["영상임상진단", "거친호흡", "중성화", "눈곱", "피부"];

  return (
    <RecentReviewWrapper>
      <Title>최근 등록된 리뷰</Title>

      <BadgeBox>
        {DISEASE_ARR.map((data) => (
          <Badge key={data}>{data}</Badge>
        ))}
      </BadgeBox>

      <ReviewBox>
        <ReviewCard>
          <CheckBadgeBox>
            <CheckBadge>
              <Image src="/svgs/Check.svg" width={12} height={12} alt="Check" />
              영수증 인증
            </CheckBadge>
          </CheckBadgeBox>

          <PetInfo>코리안 쇼트헤어 . 2살 . 암컷(중성화)</PetInfo>
          <Date>23.08.12</Date>
          <Content>
            구토가 지속되어서 종합검진 겸 초음파랑 혈검 종합해서 했습니다~
            아무래도 2차병 원이어서 좀 정신 없긴 했지만, 상담도 친 절하고
            자세하게 해주셨어요 ㅎㅎ 결과적 으로 아무 문제가 없고 무척
            건강해서,, 구 토 이유는 못찾았네요. 식이적으로 잘케어 해봐야겠습니다
            ㅜㅜ 만성 구토 때문에 ...
          </Content>

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
        </ReviewCard>

        <ReviewCard>
          <CheckBadgeBox>
            <CheckBadge>
              <Image src="/svgs/Check.svg" width={12} height={12} alt="Check" />
              영수증 인증
            </CheckBadge>
          </CheckBadgeBox>

          <PetInfo>웰시 코기 펨브로크 . 5살 . 수컷(중성화)</PetInfo>
          <Date>23.08.13</Date>
          <Content>
            기존에 고관절 이형성증이 있어 6개월마 다 방사선 촬영을 통해 체크하고
            있습니다.두루 동물병원선생님이원주 내에샤 정형 외과 수술을 많이
            하시는 것 같아 방문해봤 습니다.네다리모두 촬영하였고 상태에 대해
            심각하지만자세하게설명해주셨습 니다. 기존에 다니던 동물병원들은
            중대...
          </Content>

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
        </ReviewCard>
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
  font-weight: 400;
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
  font-weight: 400;
  line-height: normal;
`;

const Location = styled.h4`
  color: #767676;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
