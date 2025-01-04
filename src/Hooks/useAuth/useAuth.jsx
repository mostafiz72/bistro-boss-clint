import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";

export default function useAuth() {
  const auth = useContext(AuthContext)
  return auth;
}
