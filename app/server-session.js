import { getServerSession } from "next-auth/next";
import UserInformation from "./user-information";

export default async function AppDescription() {
  const session = await getServerSession();
  return (
    <div>
      <div>
        This is the application description component (server component).
      </div>
      <UserInformation data={session?.user} />
    </div>
  );
}
