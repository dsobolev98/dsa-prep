import React, { FC, SVGProps } from "react";
import {
  ArrayIcon,
  GraphIcon,
  LinkedListIcon,
  SearchIcon,
  SortIcon,
  TreeIcon,
} from "./assets/IconComponents";

export type IconName =
  | "array"
  | "graph"
  | "linked-list"
  | "search"
  | "sort"
  | "tree";

// Map of icon names to their React component implementations
const iconMap: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  array: ArrayIcon,
  graph: GraphIcon,
  "linked-list": LinkedListIcon,
  search: SearchIcon,
  sort: SortIcon,
  tree: TreeIcon,
};

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" not found`);
    return null;
  }

  return <IconComponent {...props} />;
};
