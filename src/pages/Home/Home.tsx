import React from "react";

import { useStore } from "~/hooks";
import { StyledWrapper, StyledItem } from "./styled";

const Home: React.FC = () => {
  const {
    store: { flexProperties },
  } = useStore();

  return (
    <StyledWrapper {...flexProperties}>
      <StyledItem>Item</StyledItem>
      <StyledItem>Item</StyledItem>
      <StyledItem>Item</StyledItem>
      <StyledItem>Item</StyledItem>
      <StyledItem>Item</StyledItem>
      <StyledItem>Item</StyledItem>
      <StyledItem>Item</StyledItem>
      <StyledItem>Item</StyledItem>
    </StyledWrapper>
  );
};

export { Home };
