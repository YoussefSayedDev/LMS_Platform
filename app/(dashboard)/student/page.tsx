"use client";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";

const StudentPage = () => {
  const { user } = useSession();

  if (!user) redirect("/login");

  redirect(`${user.userType.toLowerCase()}/dashboard`);
};

export default StudentPage;
