import React from "react";

import styled from "styled-components";

import InsuranceHeader from "@/components/layout/InsuranceHeader";
import Main from "@/components/insurance/main";
import Navbar from "@/components/layout/Navbar";

const index = () => {
  return (
    <InsuranceWrapper>
      <InsuranceHeader />

      <Main />

      <Navbar />
    </InsuranceWrapper>
  );
};

export default index;

const InsuranceWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #eff9ff;
  margin: 0 auto;
  position: relative;
`;
