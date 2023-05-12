import clsx from "clsx";

interface Props {
  //Variante c'est pour le style
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "lead-bold"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  //Component c'est pour la balise de l'élément
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "div" | "span";
  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  //Type de base sans préciser
  variant = "h3",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  children,
}: Props) => {
  let variantStyles: string = "",
    colorStyles: string = "";

  switch (variant) {
    case "display":
      variantStyles = "text-display";
      break;
    case "h1":
      variantStyles = "text-h1";
      break;
    case "h2":
      variantStyles = "text-h2";
      break;
    case "h3":
      variantStyles = "text-h3";
      break;
    case "h4":
      variantStyles = "text-h4";
      break;
    case "h5":
      variantStyles = "text-h5";
      break;
    case "lead":
      variantStyles = "text-lead";
      break;
    case "lead-bold":
      variantStyles = "text-leadbold";
      break;
    case "body-lg":
      variantStyles = "text-lg";
      break;
    case "body-base":
      variantStyles = "text-base";
      break;
    case "body-sm":
      variantStyles = "text-h2";
      break;
    case "caption1":
      variantStyles = "text-caption1";
      break;
    case "caption2":
      variantStyles = "text-caption2";
      break;
    case "caption3":
      variantStyles = "text-caption3";
      break;
    case "caption4":
      variantStyles = "text-caption4";
      break;
  }

  switch (theme) {
    case "black": // default
      colorStyles = "text-gray";
      break;
    case "gray":
      colorStyles = "text-gray-700";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;
    default:
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        className,
        weight === "medium" && "font-medium"
      )}
    >
      {children}
    </Component>
  );
};
