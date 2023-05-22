import { IconType } from "react-icons";

export interface AppLinks {
  label: string;
  baseUrl: string;
  type: string; // @Todo refactor this
  icon?: IconType; // On ajoute le type icontype qui vient avec la librairie react-icons.
}

export interface FooterLinks {
  label: string;
  links: AppLinks[];
}
