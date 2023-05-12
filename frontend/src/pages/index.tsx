import { Seo } from "@/ui/component/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Monkey's" description="Description..." />
      <h1>Homepage</h1>
      <Typography component="p" variant="h1">
        CouCou Bande De Nouilles
      </Typography>
    </>
  );
}
