import { Container } from "@/ui/component/container/container";
import { Navigation } from "@/ui/component/navigation/navigation";
import { Seo } from "@/ui/component/seo/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { MdNotificationsActive } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Seo title="Monkey's" description="Description..." />
      <Navigation />
    </>
  );
}
