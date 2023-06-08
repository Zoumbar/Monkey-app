import { FormsType } from "@/types/Forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  console.log("form", form);
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
      <Input
        isLoading={isLoading}
        placeholder="Mot de passe"
        type="password"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champ"
        id="password"
      />
      <Input
        isLoading={isLoading}
        placeholder="Comment nous as tu connus ?"
        type="text"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champ"
        id="text"
      />
      {/* <input
        type="email"
        placeholder="johndoe@gmail.com"
        className=""
        disabled={isLoading}
        {...register("email", {
          required: { value: true, message: "Ce champ est requis !" },
        })}
        autoComplete="off"
      ></input>
      <input
        type="password"
        placeholder="Entre ton mot de passe"
        className=""
        disabled={isLoading}
        {...register("password", {
          required: { value: true, message: "Ce champ est requis !" },
        })}
        autoComplete="off"
      ></input>
      <input
        type="text"
        placeholder="Comment nous avez vous connu ?"
        className=""
        disabled={isLoading}
        {...register("how_known", {
          required: { value: true, message: "Ce champ est requis !" },
        })}
        autoComplete="off"
      ></input> */}
      <Button isLoading={isLoading} type="submit" fullwidth>
        S'inscrire
      </Button>
    </form>
  );
};
