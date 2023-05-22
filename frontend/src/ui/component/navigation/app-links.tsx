import { AppLinks } from "@/types/AppLinks";
import { FaLinkedin, FaSlack, FaYoutube } from "react-icons/fa";

export const footerAppLinks: AppLinks[] = [
  {
    label: "Acceuil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projets",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Coders Monkeys",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Formation",
    baseUrl:
      "https://www.youtube.com/watch?v=7Xu90Fg9Z94&list=PLtKaauZVThjAe3U3AQqa-C1fLwHR48aMM&index=12",
    type: "external",
  },
];
export const footerUserLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/monkey-space",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/sign-in",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/sign-up",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/forget-password",
    type: "internal",
  },
];
export const footerInformationLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/cgu",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/confidentialité",
    type: "internal",
  },
  {
    label: "À propos",
    baseUrl: "/about",
    type: "internal",
  },
];
export const footerRSLinks: AppLinks[] = [
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com/",
    type: "external",
    icon: FaLinkedin, // On rajoute l'icon dans l'objet directement et on ajouter le type icontype dans le fichier applinks
  },
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com/",
    type: "external",
    icon: FaYoutube,
  },
  {
    label: "Slack",
    baseUrl: "https://slack.com/",
    type: "external",
    icon: FaSlack,
  },
];

export const footerLinks = [
  {
    label: "App",
    links: footerAppLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUserLinks,
  },
  {
    label: "Informations",
    links: footerInformationLinks,
  },
  {
    label: "Réseaux",
    links: footerRSLinks,
  },
];
