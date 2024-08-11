import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  otherType?: string;
  bottomAction?: string | ReactNode;
}

export interface iSidebar {
  name?: string;
  path?: string;
  state?: boolean;
  handleClick?: () => void;
  icon?: ReactNode;
  drop?: boolean | {};
}

export interface iDropdown {
  icon?: ReactNode;
  label?: string;
}

export interface iHeading {
  path?: string;
  b?: string;
  p?: string;
  rightComp?: React.JSX.Element;
}

export interface iProduct {
  img?: string;
  name?: string;
  short?: string;
  underShort?: string;
  desc?: string;
  price?: string;
  commission?: string;
  star?: number;
}
