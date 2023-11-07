import Image from "next/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

interface Props {
  handleChange: () => void;
  toggle: boolean;
}

const ShopHeader = ({ handleChange, toggle }: Props) => {
  return (
    <HeaderWrapper>
      {toggle ? (
        <Image
          src="/images/ShopToggle2.png"
          width={64}
          height={31}
          alt="ShopToggle"
          style={{ marginTop: "17px", cursor: "pointer" }}
          onClick={handleChange}
        />
      ) : (
        <Image
          src="/images/ShopToggle.png"
          width={64}
          height={31}
          alt="ShopToggle"
          style={{ marginTop: "17px", cursor: "pointer" }}
          onClick={handleChange}
        />
      )}

      <Link href="/shop">
        <Image
          src="/svgs/Logo.svg"
          width={70}
          height={29}
          alt="Logo"
          style={{ marginLeft: "78px", marginTop: "18px" }}
        />
      </Link>

      <Image
        src="/svgs/Search.svg"
        width={23}
        height={23}
        alt="Search"
        style={{
          marginLeft: "76px",
          marginTop: "24px",
        }}
      />

      <Image
        src="/svgs/Cart.svg"
        width={21.1}
        height={23}
        alt="Cart"
        style={{
          marginLeft: "17.65px",
          marginTop: "24px",
        }}
      />
    </HeaderWrapper>
  );
};

export default ShopHeader;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 58px;
  background-color: #ffb542;
  display: flex;
  padding-left: 20px;
  padding-right: 28px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
`;
