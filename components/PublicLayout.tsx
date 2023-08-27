import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MainLayout from "./MainLayout";

function PublicLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      if (!["/login", "/sign-up"].includes(router.pathname))
        router.push("/login");
      else router.push("/dashboard");
    }
  }, [user, isLoading]);

  if (isLoading || user) return null;

  return <MainLayout>{children}</MainLayout>;
}

export default PublicLayout;
