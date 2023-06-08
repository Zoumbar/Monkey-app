import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutoCompleted?: boolean;
}

export const Input = ({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMsg = "Tu dois renseigner ce champ",
  id,
  required,
  isAutoCompleted = false,
}: Props) => {
  return (
    <div className="space-y-2">
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          //quand le formulaire charge, cursor pour indiquer le chargement
          isLoading && "cursor-not-allowed",
          errors[id]
            ? //On place le placeholder ou le text rentrer en rouge en cas d'erreur
              "placeholder:text-alert-danger text-alert-danger"
            : "placeholder:text-gray-600",
          "w-full p-4 font-light border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-primary"
        )}
        disabled={isLoading}
        {...register(id, {
          required: { value: { required: true }, message: errorMsg },
        })}
        autoComplete={isAutoCompleted ? "on" : "off"}
      />
      {errors[id] && (
        <Typography
          variant="caption4"
          component="div"
          theme="danger"
          className="uppercase"
        >
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
