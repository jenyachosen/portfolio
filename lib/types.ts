import { FunctionComponentElement, ReactElement } from "react";
import { links } from "./data";
import { IconBaseProps } from "react-icons";

export type SectionName = (typeof links)[number]["name"];

export interface IExperienceItem {
  title: string;
  location: string;
  description: string;
  icon: FunctionComponentElement<IconBaseProps>,
  date: string,
}
