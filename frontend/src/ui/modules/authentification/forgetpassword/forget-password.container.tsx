import { ForgetPasswordFormFieldsType } from "@/types/Forms";
import { ForgetPasswordView } from "./forget-password.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export const ForgetPasswordContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetPasswordFormFieldsType>();

  //On type la fonction onSubmit avec le type du package SubmitHandler puis on rajoute notre interface RegisterFormFieldsType
  const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = async (
    formData
  ) => {
    setIsLoading(true);
    console.log("formdata", formData);
  };
  return (
    <ForgetPasswordView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};
