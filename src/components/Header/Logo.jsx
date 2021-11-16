import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const LogoImage = () => {
  return (
  
    <StyledImage
      src="/images/NEYROO-Signatur-Weiß.png"
      alt="Neyroo Logo"
      width={175}
      height={45}
    />
  
  );
};

const StyledImage = styled(Image)`
position: fixed;
top: 3rem;
left: 3rem;
`;
