import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
  const router = useRouter();
  //On attend un boolean qui confirme si le pathname est similaire a href pour definir l'ActiveLink.
  //On utilise useMemo pour qu'il le mémorise
  const isActive: boolean = useMemo(() => {
    return router.pathname === href;
  }, [router.pathname, href]);
  return (
    <Link
      href={href}
      className={clsx(isActive && "text-primary font-semibold")}
    >
      {children}
    </Link>
  );
};
