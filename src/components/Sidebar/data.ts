import type { TSection } from "./types";

const sections: TSection[] = [
  {
    items: [
      {
        flexProperty: "alignItems",
        flexValue: "flex-start",
        title: "align-items",
      },
      {
        flexProperty: "alignItems",
        flexValue: "center",
      },
      {
        flexProperty: "alignItems",
        flexValue: "flex-end",
      },
      {
        flexProperty: "alignItems",
        flexValue: "stretch",
      },
    ],
    title: "align-items",
  },
  {
    items: [
      {
        flexProperty: "justifyContent",
        flexValue: "flex-start",
        title: "justify-content",
      },
      {
        flexProperty: "justifyContent",
        flexValue: "center",
      },
      {
        flexProperty: "justifyContent",
        flexValue: "flex-end",
      },
      {
        flexProperty: "justifyContent",
        flexValue: "space-between",
      },
      {
        flexProperty: "justifyContent",
        flexValue: "space-around",
      },
      {
        flexProperty: "justifyContent",
        flexValue: "space-evenly",
      },
    ],
    title: "justify-content",
  },
  {
    items: [
      {
        flexProperty: "columnGap",
        flexValue: 20,
      },
    ],
    title: "column-gap",
  },
  {
    items: [
      {
        flexProperty: "rowGap",
        flexValue: 20,
      },
    ],
    title: "row-gap",
  },
  {
    items: [
      {
        flexProperty: "flexDirection",
        flexValue: "row",
      },
      {
        flexProperty: "flexDirection",
        flexValue: "column",
      },
    ],
    title: "flex-direction",
  },
];

export { sections };
