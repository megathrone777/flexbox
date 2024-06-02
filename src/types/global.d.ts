import type { CSSProperties } from "styled-components";

declare global {
  interface TFlexProperties {
    alignItems: CSSProperties["alignItems"];
    justifyContent: CSSProperties["justifyContent"];
  }
}

export {};
