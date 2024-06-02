export interface TFlexItem {
  flexProperty: keyof TFlexProperties;
  flexValue: TFlexProperties[keyof TFlexProperties];
  title?: "align-items" | "justify-content";
}

export interface TSection {
  items: TFlexItem[];
  title: string;
}
