import { styled } from "~/theme";

export const StyledWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "alignItems" && prop !== "justifyContent",
})<TFlexProperties>(({ alignItems, justifyContent }) => ({
  alignItems,
  columnGap: 20,
  display: "flex",
  height: "100%",
  justifyContent,
}));

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
