import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "small" | "medium" | "large";
  src: string; // required
  alt: string; // required
}

export const Avatar = ({ size = "medium", src, alt }: Props) => {
  let sizeAvatar: string = "";
  switch (size) {
    case "small":
      sizeAvatar = "w-[24px] h-[24px]";
      break;
    case "medium": // default
      sizeAvatar = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeAvatar = "w-[50px] h-[50px]";
      break;
  }
  return (
    <div className={clsx(sizeAvatar, "bg-gray-400 rounded-full relative")}>
      <Image
        fill
        src={src}
        alt={alt}
        className="rounded-full object-cover object-center"
      />
    </div>
  );
};
