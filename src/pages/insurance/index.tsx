import React from "react";

import styled from "styled-components";

import InsuranceHeader from "@/components/layout/InsuranceHeader";
import Main from "@/components/insurance/main";
import Flow2Navbar from "@/components/layout/Flow2Navbar";

const index = () => {
  return (
    <InsuranceWrapper>
      <InsuranceHeader />

      <Main />

      <Flow2Navbar />
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
  z-index: 9999;
`;
