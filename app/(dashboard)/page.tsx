"use client";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";

export default function Home() {
  const { user } = useSession();

  if (!user) redirect("/login");

  redirect(`${user.userType.toLowerCase()}/dashboard`);
}
