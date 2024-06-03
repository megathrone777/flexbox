import React from "react";

import { useStore } from "~/hooks";
import { setFlexProperties } from "~/store";
import { sections } from "./data";
import type { TFlexItem } from "./types";
import {
  StyledWrapper,
  StyledSection,
  StyledTitle,
  StyledList,
  StyledInput,
  StyledButton,
} from "./styled";

const Sidebar: React.FC = () => {
  const {
    dispatch,
    store: { flexProperties },
  } = useStore();

  const handleGapChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    const { dataset, value } = currentTarget;
    const { property } = dataset;

    dispatch(
      setFlexProperties({
        [property!]: +value as TFlexItem["flexValue"],
      })
    );
  };

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
                        {typeof flexValue === "number" ? (
                          <StyledInput
                            data-property={flexProperty}
                            min={0}
                            onChange={handleGapChange}
                            type="number"
                            value={flexProperties[flexProperty]}
                          />
                        ) : (
                          <StyledButton
                            active={flexValue === flexProperties[flexProperty]}
                            onClick={handleFlexPropertiesChange}
                            type="button"
                            value={flexProperty}
                          >
                            {flexValue}
                          </StyledButton>
                        )}
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
        <li>flex-direction: {flexProperties.flexDirection};</li>
        <li>justify-content: {flexProperties.justifyContent};</li>
        <li>column-gap: {flexProperties.columnGap}px;</li>
        <li>row-gap: {flexProperties.rowGap}px;</li>
      </ul>
    </StyledWrapper>
  );
};

export { Sidebar };
