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
