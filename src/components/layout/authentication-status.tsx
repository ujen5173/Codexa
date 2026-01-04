import { authClient } from "@/lib/auth-client";

const AuthenticationStatus = () => {
  const { data: user } = authClient.useSession();

  return <div>Authenticated User: {user?.user.name ?? "N/A"}</div>;
};

export default AuthenticationStatus;
