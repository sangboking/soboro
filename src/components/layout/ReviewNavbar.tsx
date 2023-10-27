import Image from "next/image";
import React from "react";

import styled from "styled-components";

const ReviewNavbar = () => {
  return (
    <NavbarWrapper>
      <Image src="/svgs/Navbar.svg" fill alt="Navbar" />

      <Image
        src="/svgs/Home.svg"
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

      <Image
        src="/svgs/BlackStarBox.svg"
        width={22}
        height={22}
        alt="StarBox"
        style={{
          position: "absolute",
          left: "115px",
          top: "15px",
          cursor: "pointer",
        }}
      />

      <Image
        src="/svgs/Life.svg"
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

      <Image
        src="/svgs/Cross.svg"
        width={22.169}
        height={22}
        alt="Cross"
        style={{
          position: "absolute",
          right: "116.89px",
          top: "14px",
          cursor: "pointer",
        }}
      />

      <Image
        src="/svgs/MyPage.svg"
        width={22.169}
        height={22}
        alt="MyPage"
        style={{
          position: "absolute",
          right: "48px",
          top: "15px",
          cursor: "pointer",
        }}
      />
    </NavbarWrapper>
  );
};

export default ReviewNavbar;

const NavbarWrapper = styled.div`
  width: 393px;
  height: 86px;
  position: sticky;
  bottom: 0;
  left: 0;
`;
