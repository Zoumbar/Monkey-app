import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { LandingPageView } from "@/ui/modules/landing-page/components/landing-page.view";

export default function Home() {
  return (
    <>
      <Seo title="Monkey's" description="Description..." />
      <Layout>
        <LandingPageView />
      </Layout>
    </>
  );
}
