import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
  icon?: any;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}
export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "accent": //default
      variantStyles = "";
      break;
    case "secondary":
      variantStyles = "";
      break;
    case "outline":
      variantStyles = "";
      break;
    case "disabled":
      variantStyles = "";
      break;
    case "icon":
      variantStyles = "";
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = "";
      break;
    case "medium":
      sizeStyles = "";
      break;
    case "large":
      sizeStyles = "";
      break;
  }
  return (
    <>
      <button
        type="button"
        className={clsx("")}
        onClick={() => console.log("coucou")}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
