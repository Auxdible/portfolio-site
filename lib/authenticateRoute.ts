import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function authenticateRoute() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.admin) return { "error": "You are not authorized to use this!" };
    return undefined;
}