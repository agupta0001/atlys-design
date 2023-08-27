import Link from "next/link";
import Button from "./Button";
import Input from "./Input";

const Login = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-gray-2 capitalize text-sm mb-1">SIGN UP</p>
      <p>Create an account to continue</p>

      <form className="flex flex-col mt-7 w-full">
        <Input
          name="email"
          placeholder="Enter your email or username"
          label="Email"
          type="email"
        />

        <Input
          name="Username"
          placeholder="Choose a preferred username"
          label="Username"
          className="mt-3"
          minlength={3}
        />

        <Input
          className="mt-3"
          name="password"
          placeholder="Choose a strong password"
          label="Password"
          type="password"
          minlength={6}
        />

        <Button text="Continue" className="mt-4" type="submit" />

        <p className="text-sm text-gray-4 mt-2">
          Already have an account?{" "}
          <Link href={"/login"} className="text-gray-3">
            Login →
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
