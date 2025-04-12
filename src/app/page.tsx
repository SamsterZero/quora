import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const App = async () => {

	const session = await getServerSession(authOptions);

	if (!session) redirect("/login");

	redirect("/Home");
}
export default App;