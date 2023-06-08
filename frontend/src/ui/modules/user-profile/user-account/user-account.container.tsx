import { firebaseLogoutUser } from "@/api/authentication";
import { Button } from "@/ui/design-system/button/button";
import { toast } from "react-toastify";

export const UserAccountContainer = () => {
  const handleLogoutUser = async () => {
    const { error } = await firebaseLogoutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientôt");
  };
  return (
    <div className="flex justify-center p-20">
      <Button action={handleLogoutUser} variant="danger">
        Déconnexion
      </Button>
    </div>
  );
};
