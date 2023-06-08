import { Container } from "@/ui/component/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "./login.form";
import { FormsType } from "@/types/Forms";

interface Props {
  form: FormsType;
}

export const LoginView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="">
        <div className="relative w-full h-[531px]">
          <Image
            src="/assets/images/character-2.png"
            alt="Illustration de connexion"
            fill
            className="object-scale-down"
            priority
          />
        </div>
      </div>
      <div className=" flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h5">
              Connexion
            </Typography>
            <Typography variant="caption4" component="span" theme="gray">
              Tu n’as pas de compte ?
              <Link href="/connexion/inscription" className="text-primary ml-2">
                S’inscrire
              </Link>
            </Typography>
          </div>
          <LoginForm form={form} />
          <Typography variant="caption4" theme="primary">
            <Link
              href="/connexion/mot-de-passe-perdu"
              className="justify-center flex"
            >
              mot de passe perdu ?
            </Link>
          </Typography>
        </Box>
      </div>
    </Container>
  );
};
