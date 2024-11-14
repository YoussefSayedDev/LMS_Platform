"use client";

import { Session, User } from "lucia";
import { createContext } from "react";

interface SessionContextType {
  user: User;
  session: Session;
}

export const SessionContext = createContext<SessionContextType | null>(null);

export default function SessionProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: SessionContextType }>) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}
