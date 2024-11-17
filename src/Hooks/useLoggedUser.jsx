import { useSession } from "next-auth/react";

const useLoggedUser = () => {
  const { data: session, status } = useSession();

  return {
    user: session?.user,
    isAdmin: session?.user?.role === "admin",
    status,
  };
};

export default useLoggedUser;
