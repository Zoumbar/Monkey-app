import { FormsType } from "@/types/Forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
  form: FormsType;
}
export const ForgetPasswordForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-5">
      <Input
        isLoading={isLoading}
        placeholder="johndoe@gmail.com"
        type="email"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champ"
        id="email"
      />
      <Button isLoading={isLoading} type="submit" fullwidth>
        Envoyer
      </Button>
    </form>
  );
};
