import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
}

export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "";
  switch (size) {
    case "small":
      sizeStyles = "w-5 h-5";
      break;
    case "medium": // default
      sizeStyles = "w-9 h-9";
      break;
    case "large":
      sizeStyles = "w-12 h-12";
      break;
  }
  switch (variant) {
    case "primary": // default
      variantStyles = "text-primary";
      break;
    case "white":
      variantStyles = "text-white";
      break;
  }

  return (
    <svg
      className={clsx(sizeStyles, variantStyles)}
      version="1.1"
      id="L3"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
    >
      <circle
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        cx="50"
        cy="50"
        r="44"
        className="opacity-50"
      />
      <circle
        fill="#fff"
        stroke="currentColor"
        strokeWidth="3"
        cx="8"
        cy="54"
        r="6"
      >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 48"
          to="360 50 52"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};
