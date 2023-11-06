/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

import ShopHeader from "@/components/layout/ShopHeader";
import ShopNavbar from "@/components/layout/ShopNavbar";

const index = () => {
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  };
  return (
    <ShopWrapper>
      <ShopHeader handleChange={handleChange} toggle={toggle} />

      <Image src="/images/Menu.png" width={393} height={50} alt="Menu" />
      {toggle ? (
        <Image
          src="/images/CatFrame.png"
          width={393}
          height={290}
          alt="PuppyFrame"
        />
      ) : (
        <Image
          src="/images/PuppyFrame.png"
          width={393}
          height={290}
          alt="PuppyFrame"
        />
      )}

      <DivideBox />

      {toggle ? (
        <>
          <Link href="/shop/detail">
            <Image
              src="/images/ProductFrame_3.png"
              width={391}
              height={274}
              alt="ProductFrame"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <DivideBox />
          <Link href="/shop/detail">
            <Image
              src="/images/ProductFrame_4.png"
              width={391}
              height={274}
              alt="ProductFrame"
              style={{ cursor: "pointer", marginBottom: "50px" }}
            />
          </Link>
        </>
      ) : (
        <>
          <Link href="/shop/detail">
            <Image
              src="/images/ProductFrame_1.png"
              width={391}
              height={274}
              alt="ProductFrame"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <DivideBox />
          <Link href="/shop/detail">
            <Image
              src="/images/ProductFrame_2.png"
              width={391}
              height={274}
              alt="ProductFrame"
              style={{ cursor: "pointer", marginBottom: "50px" }}
            />
          </Link>
        </>
      )}

      <ShopNavbar />
    </ShopWrapper>
  );
};

export default index;

const ShopWrapper = styled.div`
  width: 393px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const DivideBox = styled.div`
  width: 393px;
  height: 10px;
  background-color: #f9f9f9;
`;
