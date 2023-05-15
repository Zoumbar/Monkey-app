import { Seo } from "@/ui/component/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { MdCommit } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Seo title="Monkey's" description="Description..." />
      <h1>Homepage</h1>
      {/* <div className="space-y-5">
        <Typography component="p" theme="primary" variant="h1">
          CouCou Bande De Nouilles
        </Typography>
        <Typography component="div" theme="secondary" variant="display">
          CouCou Bande De Nouilles
        </Typography>
        <Typography component="span" variant="lead">
          CouCou Bande De Nouilles
        </Typography>
        <Typography component="p" weight="medium" variant="h4">
          CouCou Bande De Nouilles
        </Typography>
      </div> */}
      <div className="flex items-center gap-4 p-10 ">
        <Button variant="outline">Accent</Button>
        <Button variant="secondary" size="small">
          Accent
        </Button>
        <Button variant="disabled" disabled>
          Accent
        </Button>
        <Button variant="accent" size="large">
          Accent
        </Button>
        <Button
          variant="icon"
          size="large"
          icon={{ icon: MdCommit }}
          iconTheme="accent"
        />
        <Button
          variant="icon"
          size="large"
          icon={{ icon: MdCommit }}
          iconTheme="secondary"
        />
        <Button
          variant="icon"
          size="large"
          icon={{ icon: MdCommit }}
          iconTheme="gray"
        />
      </div>
    </>
  );
}
