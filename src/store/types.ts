import React from "react";

export enum TActionTypes {
  SET_FLEX_PROPERTIES = "SET_FLEX_PROPERTIES",
  DEFAULT = "DEFAULT",
}

export interface TStore {
  flexProperties: TFlexProperties;
}

export interface TAction<P = unknown> {
  (payload: P): {
    payload: P;
    type: TActionTypes;
  };
}

export interface TContext {
  dispatch: React.Dispatch<ReturnType<TAction>>;
  store: TStore;
}
