"use client"

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AuthLayout = (
) => {

    const { data: session } = useSession();

    const isAuthenticated = !!session?.user;

    if (isAuthenticated) {
        redirect("/Home");
    } else {
        redirect("/login");
    }

}