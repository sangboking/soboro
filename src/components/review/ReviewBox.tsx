import Image from "next/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

const ReviewBox = () => {
  return (
    <ReviewBoxWrapper>
      <CheckBadgeBox>
        <CheckBox>
          <CheckBadge>
            <Image src="/svgs/Check.svg" width={12} height={12} alt="Check" />
            영수증 인증
          </CheckBadge>
          <CheckBadge>강아지</CheckBadge>
        </CheckBox>

        <Date>23.08.12</Date>
      </CheckBadgeBox>

      <PetName>kim****</PetName>
      <PetInfo>말티즈 . 4살 . 수컷(중성화)</PetInfo>

      <Image
        src="/images/Puppy.png"
        width={165}
        height={161}
        alt="Puppy"
        style={{
          borderRadius: "10px",
          marginTop: "20px",
          objectFit: "cover",
        }}
      />

      <ReviewContent>
        강사모 카페에 보니 다른 병원에서는 곰팡이균 검사도 시킨다고 하던데
        선생님께서 균 검사해도 결과 나오는데 2주 정도 걸린다고 의미 없다고
        하셨어요~그래서 가루약만 6일치 처방받고 전에 받았던 연고 발라 주라고
        하셨어요! 집 근방 병원 다 다녀봤는데 제이펫 원장님이 제일 과잉 진료
        안하시고 친절하게 설명도 잘해주셔서 청담우리리 동물병원으로
        정착했습니다👍
      </ReviewContent>

      <TagBox>
        <Tag>#공팡이성피부염</Tag>
        <Tag>#피부긁음</Tag>
        <Tag>#피부딱지</Tag>
        <Tag>#피부상처</Tag>
      </TagBox>

      <Link href="/hospital">
        <HospitalBox>
          <NameBox>
            <HospitalName>청담우리동물병원</HospitalName>
            <Location>서울 강남구</Location>
          </NameBox>

          <Image
            src="/svgs/RightArrow.svg"
            width={9}
            height={7}
            alt="RightArrow"
          />
        </HospitalBox>
      </Link>
    </ReviewBoxWrapper>
  );
};

export default ReviewBox;

const ReviewBoxWrapper = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-left: 22px;
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

const PetName = styled.h4`
  color: #1e1e1e;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  margin-top: 20px;
`;

const PetInfo = styled.h4`
  color: #767676;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2px;
`;

const ReviewContent = styled.div`
  width: 350px;
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 28.93px;
`;

const TagBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 30px;
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

const HospitalBox = styled.div`
  display: flex;
  width: 350px;
  height: 50px;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid #dedede;
  background: #fff;
  margin-top: 30px;
  cursor: pointer;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`;

const HospitalName = styled.h4`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Location = styled.h4`
  color: #555;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
