import React from "react";
import { useOutlet } from "react-router-dom";

import { Sidebar } from "~/components";
import { StyledWrapper, StyledContent } from "./styled";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <StyledWrapper>
      <Sidebar />
      <StyledContent>{outlet}</StyledContent>
    </StyledWrapper>
  );
};

export { Layout };
