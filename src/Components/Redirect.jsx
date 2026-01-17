import { authOptions } from "@/lib/authOptions";
import toast from "daisyui/components/toast";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Redirect = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return null;
};

export default Redirect;
