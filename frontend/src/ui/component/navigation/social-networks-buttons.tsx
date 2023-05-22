import { Button } from "@/ui/design-system/button/button";
import { footerRSLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { FaFacebook } from "react-icons/fa";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}

export const SocialNetworksButtons = ({
  className,
  theme = "accent",
}: Props) => {
  const iconList = footerRSLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="icon"
      iconTheme={theme}
      icon={{ icon: socialNetwork.icon ? socialNetwork.icon : FaFacebook }}
    />
  ));

  return (
    <div className={clsx((className = "flex items-center gap-2.5"))}>
      {iconList}
    </div>
  );
};
