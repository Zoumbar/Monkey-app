export type LinkType = "internal" | "external";
// Linktype est un type pour les valeur internal et external
// Sécurité maximale : Record pour faire reference à une clé / valeur , la valeur doit etre égale a LinkType
export const LinkTypes: Record<string, LinkType> = {
  INTERNAL: "internal",
  EXTERNAL: "external",
};
// On fait une lib pour pas mettre de data en dur
