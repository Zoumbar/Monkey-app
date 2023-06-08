import { RegisterFormFieldsType } from "@/types/Forms";
import { RegisterView } from "./register.view";
import { useForm, SubmitHandler } from "react-hook-form";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";

export const RegisterContainer = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const { value: isLoading, setValue: setIsLoading } = useToggle();
  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  //Fonction asynchrone envoyant la data a la fonction qu'on utilise pour envoyer a firebase
  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_known,
  }: RegisterFormFieldsType) => {
    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue dans l'équipe");
    setIsLoading(false);
    reset();
  };

  //On type la fonction onSubmit avec le type du package SubmitHandler puis on rajoute notre interface RegisterFormFieldsType
  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;

    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      });
      return;
    }
    //On envoie la data a la fonction handle
    handleCreateUserAuthentication(formData);
  };

  return (
    <RegisterView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};
