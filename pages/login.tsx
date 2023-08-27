import { FormEvent, ReactElement } from "react";
import LoginForm from "@/components/Login";
import Image from "next/image";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";
import PublicLayout from "@/components/PublicLayout";

const Login = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userName = event.currentTarget["email"].value;
    const password = event.currentTarget["password"].value;

    login({ userName, password });

    router.push("/dashboard");
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Image src="logo.svg" alt="logo" width={40} height={40} />
        <div className="mt-10 px-5 py-10 w-[460px] bg-secondary-background rounded-lg border-2 border-gray-1">
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Login;
