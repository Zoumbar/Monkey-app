import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";

export default function Login() {
  return (
    <>
      <Seo
        title="Connexion sur Coders Monkeys"
        description="Page de connexion"
      />
      <Layout>
        <LoginContainer />
      </Layout>
    </>
  );
}
