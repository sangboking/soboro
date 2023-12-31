import styled from "styled-components";

import SoboroHeader from "@/components/layout/SoboroHeader";
import CatBoard from "@/components/home/CatBoard";
import RecentReview from "@/components/home/RecentReview";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <HomeWrapper>
      <SoboroHeader />

      <CatBoard />

      <DivideBox />

      <RecentReview />

      <GrayBox />

      <Navbar />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const DivideBox = styled.div`
  width: 393px;
  height: 10px;
  background-color: #f9f9f9;
  margin-top: 30px;
`;

const GrayBox = styled.div`
  width: 393px;
  height: 20px;
  background-color: #fff;
`;
