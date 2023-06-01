import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { RegisterContainer } from "@/ui/modules/authentification/register/register.container";

export default function Register() {
  return (
    <>
      <Seo
        title="Inscription sur Coders Monkeys"
        description="Page de Inscription"
      />
      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
}
