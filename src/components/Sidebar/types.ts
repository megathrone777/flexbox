export interface TFlexItem {
  flexProperty: keyof TFlexProperties;
  flexValue: TFlexProperties[keyof TFlexProperties];
  title?: "align-items" | "justify-content" | "column-gap" | "row-gap";
}

export interface TSection {
  items: TFlexItem[];
  title: string;
}
