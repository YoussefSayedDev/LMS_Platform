import loginImage from "@/app/assets/login-img.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Log in",
};

const page = () => {
  return (
    <section className="relative flex h-screen flex-wrap items-center lg:h-screen lg:items-center">
      <div className="relative hidden h-64 w-full sm:h-96 lg:block lg:h-full lg:w-1/2">
        <Image
          src={loginImage}
          alt="Login image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-4xl font-bold text-indigo-600">
            <span className="text-foreground">Welcome Back to</span> Learnify
          </h1>
          <h3 className="mt-4 text-2xl text-gray-800 dark:text-gray-200">
            <span className="font-bold text-blue-500">Log In</span> and Access
            <span className="font-bold text-purple-600">
              {" "}
              Your Learning
            </span>{" "}
            Hub
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Sign in to continue accessing your personalized learning resources,
            track your progress, and engage with your educational community.
          </p>
        </div>
        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <p className="text-center text-xl text-gray-800 dark:text-gray-200">
            Log in to your <span className="text-indigo-600">Learnify</span>{" "}
            account
          </p>
          <LoginForm />
        </div>
        <Link
          href="/signup"
          className="mt-8 block text-center text-blue-600 hover:underline dark:text-blue-400"
        >
          Don&apos;t have an account? Sign up
        </Link>
      </div>
    </section>
  );
};

export default page;
