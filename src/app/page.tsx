import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
	searchParams?: {
		modal?: string;
	};
}

const App = async ({ searchParams }: Props) => {

	const session = await getServerSession(authOptions);
	
	const params = await searchParams

	if (!session) redirect("/login");

	const modal = params?.modal

	if (!modal) redirect("/Home")

	return null;
}
export default App;