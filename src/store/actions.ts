import type { CSSObject } from "styled-components";

import { type TAction, TActionTypes } from "./types";

export const setFlexProperties: TAction<CSSObject> = (payload) => ({
  payload,
  type: TActionTypes.SET_FLEX_PROPERTIES,
});
