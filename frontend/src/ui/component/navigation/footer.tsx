import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { FooterLinks } from "@/types/AppLinks";
import { LinkTypes } from "@/lib/link-types";
import { SocialNetworksButtons } from "./social-networks-buttons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // On va mapper les footerLinks définis dans le fichier app-links
  const footerNavigationList = footerLinks.map((colLinks) => (
    <FooterLink key={uuidv4()} data={colLinks} />
  ));

  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formations gratuites
          </Typography>
          <Typography variant="caption2" theme="gray">
            Abonne-toi à la chaine
          </Typography>
          <a href="#" target="_blank">
            <Image
              src="/assets/svg/YTB.svg"
              alt="Youtube"
              width={229}
              height={216}
            />
          </a>
        </div>
        <div className="flex gap-7">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800"></hr>
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`Copyright © ${currentYear} | Propulsed by `}
            <a href="https://esteban-ouvre.tk" target="_blank">
              Esteban Ouvré
            </a>
          </Typography>
          <div className="">
            <SocialNetworksButtons theme="gray" />
          </div>
        </div>
      </Container>
    </div>
  );
};
// Interface pour les Props des links du footer
interface footerLinkProps {
  data: FooterLinks;
}
// on créé un composant de liste de lien qu'on va integrer dans le footer.
const FooterLink = ({ data }: footerLinkProps) => {
  // On map les liens qu'on lui passe en props et on met la structure en place
  const linksList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {/* On utilise la lib perso LinkTypes pour pas mettre la propriété "internal/external" en dur */}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));
  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {linksList}
      </Typography>
    </div>
  );
};
