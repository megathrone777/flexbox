import { styled } from "~/theme";

export const StyledWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "alignItems" &&
    prop !== "flexDirection" &&
    prop !== "justifyContent" &&
    prop !== "columnGap" &&
    prop !== "rowGap" &&
    prop !== "flexDirection",
})<TFlexProperties>(
  ({ alignItems, columnGap, flexDirection, justifyContent, rowGap }) => ({
    alignContent: alignItems,
    alignItems,
    columnGap,
    display: "flex",
    flexDirection,
    flexWrap: "wrap",
    height: "100%",
    justifyContent,
    rowGap,
  })
);

export const StyledItem = styled.div(({ theme: { fonts } }) => ({
  alignItems: "center",
  backgroundColor: "#9c27b0",
  color: "white",
  display: "flex",
  fontWeight: fonts.medium,
  justifyContent: "center",
  minWidth: "20%",
  padding: 20,
  userSelect: "none",
}));
