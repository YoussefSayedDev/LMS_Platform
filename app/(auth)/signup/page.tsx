import signupImage from "@/app/assets/signup-img.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

const page = () => {
  return (
    <section className="relative flex h-screen flex-wrap items-center bg-background lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-4xl font-bold text-indigo-600">Learnify</h1>
          <h3 className="mt-4 text-2xl text-gray-800 dark:text-gray-200">
            <span className="font-bold text-blue-500">Everything</span> You Want
            to Learn, All in
            <span className="font-bold text-purple-600"> One</span> Place
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Join our platform and gain access to innovative tools for teachers,
            students, and parents to collaborate, learn, and grow together.
          </p>
        </div>
        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <p className="text-center text-xl text-gray-800 dark:text-gray-200">
            Create your account to get started with
            <span className="text-indigo-600"> Learnify</span>
          </p>
          <SignUpForm />
        </div>
        <Link
          href="/login"
          className="mt-8 block text-center text-blue-600 hover:underline dark:text-blue-400"
        >
          Already have an account? Log in
        </Link>
      </div>
      <div className="relative hidden h-64 w-full sm:h-96 lg:block lg:h-full lg:w-1/2">
        <Image
          src={signupImage}
          alt="Signup image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default page;
