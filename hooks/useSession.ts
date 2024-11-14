"use client";
import { SessionContext } from "@/contexts/SessionProvider";
import { useContext } from "react";

const useSession = () => {
  const context = useContext(SessionContext);

  if (!context)
    throw new Error("useSession must be used within a SessionProvider");
  return context;
};

export default useSession;
