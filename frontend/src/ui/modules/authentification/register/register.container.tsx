import { RegisterFormFieldsType } from "@/types/Forms";
import { RegisterView } from "./register.view";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

export const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  //On type la fonction onSubmit avec le type du package SubmitHandler puis on rajoute notre interface RegisterFormFieldsType
  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log("formdata", formData);
  };

  return (
    <RegisterView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};
