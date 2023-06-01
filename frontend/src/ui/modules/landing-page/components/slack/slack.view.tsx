import { LinkTypes } from "@/lib/link-types";
import { Container } from "@/ui/component/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const SlackView = () => {
  return (
    <Container className="flex justify-between pt-40 pb-52">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <div className="flex items-center gap-2">
          <Logo size="very-small" />
          <Typography variant="caption2" component="span" weight="medium">
            Coders Monkey
          </Typography>
        </div>
        <Typography variant="h2" component="h2">
          Rejoins-nous sur le Slack des Singes codeurs
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-lg"
        >
          Rejoins-nous et obtiens de l’aide, des conseils et pourquoi pas des
          nouveaux potes !
        </Typography>
        <Button baseUrl="https://google.com" linkType={LinkTypes.EXTERNAL}>
          Rejoindre le groupe d'aide
        </Button>
      </div>
      <div className="relative w-[277px] h-[277px]">
        <Image src={"/assets/svg/logo-slack.svg"} alt={"Logo Slack"} fill />
      </div>
    </Container>
  );
};
