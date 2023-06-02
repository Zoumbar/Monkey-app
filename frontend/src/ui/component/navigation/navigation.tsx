/* eslint-disable react/no-unescaped-entities */
import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-2">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Coders Monkey
              </div>
              <Typography variant="caption4" theme="gray" component="span">
                Trouve de l'inspiration et recois des feedbacks !
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/projets">Projets</ActiveLink>
            <ActiveLink href="/design-system">Design system</ActiveLink>
            <ActiveLink href="/formations">Formations</ActiveLink>
            <ActiveLink href="/contact">Contact</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Button baseUrl="/connexion" size="small">
              Connexion
            </Button>
            <Button
              baseUrl="/connexion/inscription"
              size="small"
              variant="secondary"
            >
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
