import { styled } from "~/theme";

export const StyledWrapper = styled.div({
  borderRight: "2px solid grey",
  display: "flex",
  flexBasis: 250,
  flexDirection: "column",
  minWidth: 250,
  rowGap: 10,
});

export const StyledSection = styled.div({
  borderBottom: "2px solid grey",
  paddingBottom: 20,
});

export const StyledTitle = styled.h2({
  marginBottom: 10,
});

export const StyledList = styled.ul({
  alignItems: "stretch",
  display: "flex",
  flexDirection: "column",
  rowGap: 5,
});

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active, theme: { colors, fonts, hover } }) => ({
  appearance: "none",
  backgroundColor: active ? colors.green : colors.blue,
  border: "none",
  borderRadius: 4,
  color: "white",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: 17,
  fontWeight: fonts.medium,
  height: 34,
  minWidth: 130,
  paddingInline: 8,
  transition: "background-color .15s ease-in",
  userSelect: "none",

  ...hover({
    backgroundColor: active ? colors.greenDarker : colors.blueDarker,
  }),
}));

export const StyledCode = styled.code({});
