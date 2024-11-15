import { validateRequest } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SessionProvider from "@/contexts/SessionProvider";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <SidebarProvider>
        <AppSidebar />
        <main className="relative min-h-screen w-full bg-background">
          <Navbar />
          <SidebarTrigger className="sticky top-[100px]" />
          {children}
        </main>
      </SidebarProvider>
    </SessionProvider>
  );
};

export default DashboardLayout;
