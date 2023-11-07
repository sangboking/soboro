import Image from "next/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

const MypageNavbar = () => {
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

      <Link href="/shop">
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
          }}
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
`;
