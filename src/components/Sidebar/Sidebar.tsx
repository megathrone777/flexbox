import React from "react";

import { useStore } from "~/hooks";
import { setFlexProperties } from "~/store";
import type { TFlexItem, TSection } from "./types";
import {
  StyledWrapper,
  StyledSection,
  StyledTitle,
  StyledList,
  StyledButton,
} from "./styled";

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
];

const Sidebar: React.FC = () => {
  const {
    dispatch,
    store: { flexProperties },
  } = useStore();

  const handleFlexPropertiesChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLButtonElement>): void => {
    const { textContent, value } = currentTarget;

    dispatch(
      setFlexProperties({
        [value as TFlexItem["flexProperty"]]: textContent as TFlexItem["flexValue"],
      })
    );
  };

  return (
    <StyledWrapper>
      {sections &&
        !!sections.length &&
        sections.map(
          ({ items, title }, index: number): React.ReactElement => (
            <StyledSection key={`${title}-${index}`}>
              <StyledTitle>{title}</StyledTitle>

              {items && !!items.length && (
                <StyledList>
                  {items.map(
                    (
                      { flexProperty, flexValue }: TFlexItem,
                      itemIndex: number
                    ): React.ReactElement => (
                      <li key={`${flexProperty}-${itemIndex}`}>
                        <StyledButton
                          active={flexValue === flexProperties[flexProperty]}
                          onClick={handleFlexPropertiesChange}
                          type="button"
                          value={flexProperty}
                        >
                          {flexValue}
                        </StyledButton>
                      </li>
                    )
                  )}
                </StyledList>
              )}
            </StyledSection>
          )
        )}

      <ul>
        <li>display: flex;</li>
        <li>align-items: {flexProperties.alignItems};</li>
        <li>justify-content: {flexProperties.justifyContent};</li>
      </ul>
    </StyledWrapper>
  );
};

export { Sidebar };
