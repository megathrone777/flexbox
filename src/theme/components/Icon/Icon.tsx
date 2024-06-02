import React from "react";

import type { TProps } from "./types";
import { StyledWrapper } from "./styled";

const Icon: React.FC<TProps> = ({ id }) => (
  <StyledWrapper>
    <use href={`#${id}`} />
  </StyledWrapper>
);

export { Icon };
