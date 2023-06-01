import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { ForgetPasswordContainer } from "@/ui/modules/authentification/forgetpassword/forget-password.container";

export default function ForgetPassword() {
  return (
    <>
      <Seo title="Mot de passe perdu" description="Mot de passe perdu" />
      <Layout>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
