import React from "react";
import type { SVGProps } from "react";

export const ArrayIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line x1="7" y1="6" x2="7" y2="18" stroke="currentColor" strokeWidth="2" />
    <line
      x1="12"
      y1="6"
      x2="12"
      y2="18"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="17"
      y1="6"
      x2="17"
      y2="18"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export const GraphIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="5" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="19" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="5" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="19" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
    <line x1="7" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth="2" />
    <line
      x1="7"
      y1="17"
      x2="17"
      y2="17"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line x1="5" y1="9" x2="5" y2="15" stroke="currentColor" strokeWidth="2" />
    <line
      x1="19"
      y1="9"
      x2="19"
      y2="15"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line x1="7" y1="7" x2="17" y2="17" stroke="currentColor" strokeWidth="2" />
    <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const LinkedListIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <line
      x1="9"
      y1="12"
      x2="15"
      y2="12"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export const SearchIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
    <path
      d="M15.5 15.5L19 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SortIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="6" y1="8" x2="10" y2="8" stroke="currentColor" strokeWidth="2" />
    <line
      x1="6"
      y1="12"
      x2="14"
      y2="12"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="6"
      y1="16"
      x2="18"
      y2="16"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M18 8L15 5M18 8L15 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TreeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="6" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="8" x2="6" y2="11" stroke="currentColor" strokeWidth="2" />
    <line
      x1="12"
      y1="8"
      x2="18"
      y2="11"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
