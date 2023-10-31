import React from "react";

import styled from "styled-components";

const index = () => {
  return <CompleteWrapper>예약이 완료되었습니다.</CompleteWrapper>;
};

export default index;

const CompleteWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #43bbff;
  color: #fff;

  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
