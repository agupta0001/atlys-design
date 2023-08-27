import { FC, FormEvent } from "react";
import Link from "next/link";
import Button from "./Button";
import Input from "./Input";

interface ILoginFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Login: FC<ILoginFormProps> = ({ onSubmit }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-gray-2 capitalize text-sm mb-1">WELCOME BACK</p>
      <p>Log into your account</p>

      <form className="flex flex-col mt-7 w-full" onSubmit={onSubmit}>
        <Input
          required
          name="email"
          placeholder="Enter your email or username"
          label="Email or Username"
          minlength={3}
        />

        <Input
          required
          className="mt-3"
          name="password"
          placeholder="Enter your password"
          label="Password"
          type="password"
          secondaryLabel={
            <Link href="/login" className="text-gray-3 text-xs">
              Forgot password?
            </Link>
          }
          minlength={6}
        />

        <Button text="Login now" className="mt-4" type="submit" />

        <p className="text-sm text-gray-4 mt-2">
          Not registered yet?{" "}
          <Link href={"/sign-up"} className="text-gray-3">
            Register →
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
