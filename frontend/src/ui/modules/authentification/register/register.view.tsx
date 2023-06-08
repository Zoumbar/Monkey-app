import { Container } from "@/ui/component/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { FormsType } from "@/types/Forms";

interface Props {
  form: FormsType;
}

export const RegisterView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="">
        <div className="relative w-full h-[531px]">
          <Image
            src="/assets/images/character-1.png"
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
              Inscription
            </Typography>
            <Typography variant="caption4" component="span" theme="gray">
              Tu as déjà un compte ?
              <Link href="/connexion" className="text-primary ml-2">
                Connexion
              </Link>
            </Typography>
          </div>
          <RegisterForm form={form} />
          <Typography
            variant="caption4"
            theme="gray"
            className="text-center mx-auto max-w-md space-y-1"
          >
            <div>En t’inscrivant, tu acceptes les</div>
            <div>
              <Link href="/#" className="text-gray">
                Conditions d'utilisation
              </Link>{" "}
              et la{" "}
              <Link href="/#" className="text-gray">
                Politique de confidentialité.
              </Link>
            </div>
          </Typography>
        </Box>
      </div>
    </Container>
  );
};
