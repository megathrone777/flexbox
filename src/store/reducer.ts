import type { Reducer } from "react";
import type { CSSObject } from "styled-components";

import { TAction, TActionTypes, TStore } from "./types";

const reducer: Reducer<TStore, ReturnType<TAction>> = (store, { payload, type }) => {
  const actions: Record<TActionTypes, () => TStore> = {
    [TActionTypes.SET_FLEX_PROPERTIES]: () => ({
      ...store,
      flexProperties: {
        ...store.flexProperties,
        ...(payload as CSSObject),
      },
    }),

    [TActionTypes.DEFAULT]: () => store,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
