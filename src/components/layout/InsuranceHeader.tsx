import React from "react";
import Image from "next/image";

import styled from "styled-components";

const InsuranceHeader = () => {
  return (
    <HeaderWrapper>
      <ToggleBox>
        <Image
          src="/svgs/ToggleLeft2.svg"
          width={18}
          height={18}
          alt="Toggle-Left"
          style={{ marginLeft: "7px" }}
        />

        <Image
          src="/svgs/WhiteCircle.svg"
          width={32}
          height={31}
          alt="WhiteCircle"
          style={{ position: "absolute", right: "0" }}
        />

        <Image
          src="/svgs/ToggleRight2.svg"
          width={14.25}
          height={19}
          alt="Toggle-Right"
          style={{ marginLeft: "16px", zIndex: "20" }}
        />
      </ToggleBox>

      <Image
        src="/svgs/Logo.svg"
        width={70}
        height={29}
        alt="Logo"
        style={{ marginLeft: "78px", marginTop: "18px" }}
      />

      <Image
        src="/svgs/Lens.svg"
        width={23}
        height={23}
        alt="Lens"
        style={{ marginLeft: "110px", marginTop: "24px" }}
      />
    </HeaderWrapper>
  );
};

export default InsuranceHeader;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 58px;
  background-color: #43bbff;
  display: flex;
  padding-left: 20px;
  padding-right: 28px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
`;

const ToggleBox = styled.div`
  width: 64px;
  height: 31px;
  position: relative;
  border-radius: 15.5px;
  background: #bde7ff;
  display: flex;
  align-items: center;
  margin-top: 17px;
`;
