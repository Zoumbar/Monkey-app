import { useState } from "react";
import { LoginView } from "./login.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFieldsType } from "@/types/Forms";

export const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  //On type la fonction onSubmit avec le type du package SubmitHandler puis on rajoute notre interface RegisterFormFieldsType
  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log("formdata", formData);
  };
  return (
    <LoginView form={{ errors, register, handleSubmit, onSubmit, isLoading }} />
  );
};
