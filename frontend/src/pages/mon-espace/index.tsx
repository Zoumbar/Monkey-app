import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";

export default function Login() {
  return (
    <>
      <Seo
        title="Mon espace"
        description="Bienvenue sur votre espace personnel"
      />
      <Layout withSidebar>
        <UserAccountContainer />
      </Layout>
    </>
  );
}
