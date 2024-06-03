import type { CSSProperties } from "styled-components";

declare global {
  interface TFlexProperties {
    alignItems: CSSProperties["alignItems"];
    columnGap: CSSProperties["columnGap"];
    flexDirection: CSSProperties["flexDirection"];
    justifyContent: CSSProperties["justifyContent"];
    rowGap: CSSProperties["rowGap"];
  }
}

export {};
