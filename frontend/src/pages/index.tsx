import { Seo } from "@/ui/component/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Monkey's" description="Description..." />
      <h1>Homepage</h1>
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
    </>
  );
}
