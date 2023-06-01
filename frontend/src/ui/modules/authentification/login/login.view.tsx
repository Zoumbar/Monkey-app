import { Container } from "@/ui/component/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import { RegisterForm } from "../register/register.form";
import Image from "next/image";

export const LoginView = () => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="bg-primary">
        <div className="relative w-full h-[531px]">
          <Image
            src="/assets/images/character-2.png"
            alt="Illustration de connexion"
            fill
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="bg-secondary flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h5">
              Connexion
            </Typography>
            <Typography variant="caption4" component="span" theme="gray">
              Tu n’as pas de compte ?
              <Link href="/connexion" className="text-primary ml-2">
                S’inscrire
              </Link>
            </Typography>
          </div>
          <RegisterForm />
        </Box>
      </div>
    </Container>
  );
};
