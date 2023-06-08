import { LoginView } from "./login.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFieldsType } from "@/types/Forms";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSingInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();
  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const handleSignInUser = async ({ email, password }: LoginFormFieldsType) => {
    const { error } = await firebaseSingInUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue dans votre espace personnel");
    setIsLoading(false);
    reset();
    // Router vers mon espace quand je me connecte
    router.push("/mon-espace");
  };
  //On type la fonction onSubmit avec le type du package SubmitHandler puis on rajoute notre interface RegisterFormFieldsType
  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleSignInUser(formData);
  };
  return (
    <LoginView form={{ errors, register, handleSubmit, onSubmit, isLoading }} />
  );
};
