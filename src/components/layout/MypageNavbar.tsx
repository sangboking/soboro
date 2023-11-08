import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import styled from "styled-components";

const MypageNavbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <NavbarWrapper>
      <Image src="/svgs/Navbar.svg" fill alt="Navbar" />

      <Link href="/shop">
        <Image
          src="/svgs/HomeGray.svg"
          width={20}
          height={20}
          alt="Home"
          style={{
            position: "absolute",
            left: "45px",
            top: "15px",
            cursor: "pointer",
          }}
        />
      </Link>

      <Link href="/community">
        <Image
          src="/svgs/CommunityGray.svg"
          width={21}
          height={20.745}
          alt="StarBox"
          style={{
            position: "absolute",
            left: "115px",
            top: "15px",
            cursor: "pointer",
          }}
        />
      </Link>

      <Image
        src="/images/Life.png"
        width={60}
        height={60}
        alt="Life"
        style={{
          position: "absolute",
          right: "164px",
          bottom: "62px",
          cursor: "pointer",
          zIndex: "10",
        }}
        onClick={handleClick}
      />

      <Link href="/">
        <Image
          src="/svgs/Life.svg"
          width={52}
          height={52}
          alt="Life"
          className={toggle ? `toggle` : "noToggle"}
        />
      </Link>

      <Link href="/findfamily">
        <Image
          src="/images/Heart.png"
          width={22}
          height={20}
          alt="Cross"
          style={{
            position: "absolute",
            right: "115px",
            top: "15px",
            cursor: "pointer",
          }}
        />
      </Link>

      <Link href="mypage">
        <Image
          src="/images/BlackMypage.png"
          width={22.169}
          height={22}
          alt="MyPage"
          style={{
            position: "absolute",
            right: "45px",
            top: "15px",
            cursor: "pointer",
          }}
        />
      </Link>
    </NavbarWrapper>
  );
};

export default MypageNavbar;

const NavbarWrapper = styled.div`
  width: 393px;
  height: 86px;
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 9999;

  .toggle {
    position: absolute;
    left: 173.5px;
    bottom: 70px;
    z-index: 1;
    cursor: pointer;
    transition: 0.3s;
    transform: translateY(-57px);
  }

  .noToggle {
    position: absolute;
    left: 173.5px;
    bottom: 70px;
    z-index: 1;
    cursor: pointer;
    transition: 0.3s;
    transform: translateY(0px);
  }
`;
