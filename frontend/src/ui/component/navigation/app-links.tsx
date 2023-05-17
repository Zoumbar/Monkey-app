import { AppLinks } from "@/types/AppLinks";

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
    baseUrl: "/linkedin",
    type: "external",
  },
  {
    label: "Youtube",
    baseUrl: "/youtube",
    type: "external",
  },
  {
    label: "Slack",
    baseUrl: "/slack",
    type: "external",
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
