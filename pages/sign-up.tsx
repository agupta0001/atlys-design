import { ReactElement } from "react";
import PublicLayout from "@/components/PublicLayout";
import SignUpForm from "@/components/SignUp";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Image src="logo.svg" alt="logo" width={40} height={40} />
        <div className="mt-10 px-5 py-10 w-[460px] bg-secondary-background rounded-lg border-2 border-gray-1">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default SignUp;
