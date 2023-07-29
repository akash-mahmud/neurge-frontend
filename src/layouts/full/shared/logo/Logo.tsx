import { FC } from "react";
import { useSelector } from "../../../../store";
import Link from "next/link";
import { styled } from "@mui/material";
import { AppState } from "../../../../store";
import Image from "next/image";

const Logo = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse && !customizer.isSidebarHover ? "35px" : "180px",
    overflow: "hidden",
    display: "block",
  }));

  if (customizer.activeDir === "ltr") {
    return (
      <LinkStyled href="/" style={{
        margin:'10px 0',
        marginTop:20
      }}>
        {customizer.activeMode === "dark" ? (
          <Image
            src="/images/logos/logo.png"
            alt="logo"
            height={customizer.TopbarHeight}
            width={164}
            priority
          />
        ) : (
          <Image
            src={"/images/logos/logo.png"}
            alt="logo"
            height={customizer.TopbarHeight}
            width={164}
            priority
          />
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href="/" style={{
      margin:'10px 0',
      marginTop:20

    }}>
      {customizer.activeMode === "dark" ? (
        <Image
          src="/images/logos/logo.png"
          alt="logo"
          height={customizer.TopbarHeight}
          width={164}
          priority
        />
      ) : (
        <Image
          src="/images/logos/logo.png"
          alt="logo"
          height={customizer.TopbarHeight}
          width={164}
          priority
        />
      )}
    </LinkStyled>
  );
};

export default Logo;
