import { Container } from "@/ui/component/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import Image from "next/image";
import { ForgetPasswordForm } from "./forget-password.form";
import { FormsType } from "@/types/Forms";
interface Props {
  form: FormsType;
}
export const ForgetPasswordView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="">
        <div className="relative w-full h-[531px]">
          <Image
            src="/assets/images/character-3.png"
            alt="Illustration de connexion"
            fill
            className="object-scale-down"
          />
        </div>
      </div>
      <div className=" flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h5">
              Mot de passe perdu ?
            </Typography>
            <Typography variant="caption4" component="span" theme="gray">
              <Link href="/connexion" className="text-primary ml-2">
                Connexion
              </Link>
            </Typography>
          </div>
          <ForgetPasswordForm form={form} />
        </Box>
      </div>
    </Container>
  );
};
