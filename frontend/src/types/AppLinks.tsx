import { LinkType } from "@/lib/link-types";
import { IconType } from "react-icons";

export interface AppLinks {
  label: string;
  baseUrl: string;
  type: LinkType; // @Todo refactor this
  icon?: IconType; // On ajoute le type icontype qui vient avec la librairie react-icons.
}

export interface FooterLinks {
  label: string;
  links: AppLinks[];
}
