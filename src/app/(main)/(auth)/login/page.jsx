'use client';

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaPaw, FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {

  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
    });

    if (data) {
      toast.success("Welcome back 🐾");
      router.push("/");
    } else {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 px-4">

      <div className="w-full max-w-md bg-white border border-default-200 shadow-xl rounded-3xl p-8">

        {/* HEADER */}
        <div className="text-center mb-6">

          <div className="flex justify-center mb-3">
            <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full">
              <FaPaw className="text-3xl" />
            </div>
          </div>

          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="text-sm text-default-500 mt-2">
            Login to continue your pet adoption journey
          </p>

        </div>

        {/* FORM */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-2">

          {/* EMAIL */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input
              placeholder="john@example.com"
              variant="bordered"
            />
            <FieldError />
          </TextField>

          {/* PASSWORD */}
          <TextField
            isRequired
            name="password"
            validate={(value) => {
              if (!value) return "Password is required";
              if (value.length < 8) return "Min 8 characters";
              return null;
            }}
          >
            <Label>Password</Label>

            <InputGroup>

              <InputGroup.Input
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
              />

              <InputGroup.Suffix>

                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? <BsEye /> : <BsEyeSlash />}
                </Button>

              </InputGroup.Suffix>

            </InputGroup>

            <FieldError />
          </TextField>

          {/* BUTTONS */}
          <div className=" pt-2">

            <Button
              type="submit"
              className="w-full bg-emerald-500 text-white font-semibold"
            >
              <FaSignInAlt />
              Login
            </Button>

          </div>

        </Form>

        {/* DIVIDER */}
        <div className="flex items-center my-6">

          <div className="flex-grow border-t border-default-200"></div>

          <span className="mx-4 text-sm text-default-400">
            OR
          </span>

          <div className="flex-grow border-t border-default-200"></div>

        </div>

        {/* GOOGLE LOGIN */}
        <Button
          onClick={handleGoogleSignIn}
          variant="bordered"
          className="w-full"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </Button>

        {/* FOOTER */}
        <p className="text-center text-sm text-default-500 mt-4">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-emerald-500 font-medium">
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;