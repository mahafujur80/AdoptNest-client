'use client';

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
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
import { FaPaw, FaUserPlus } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    // PASSWORD MATCH CHECK 
    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.photoUrl,
    });

    if (data) {
      toast.success("Welcome to Pet Haven 🐾");
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 px-4 py-10">

      <div className="w-full max-w-md rounded-3xl border border-default-200 bg-white shadow-xl p-8">

        {/* HEADER */}
        <div className="text-center mb-6">

          <div className="flex justify-center mb-3">
            <div className="bg-emerald-100 text-emerald-500 p-4 rounded-full">
              <FaPaw className="text-3xl" />
            </div>
          </div>

          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="text-default-500 mt-2 text-sm">
            Join our pet adoption community 🐶🐱
          </p>

        </div>

        {/* FORM */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-2">

          {/* NAME */}
          <TextField
            isRequired
            name="name"
            validate={(value) =>
              value.length < 3 ? "Name must be at least 3 characters" : null
            }
          >
            <Label>Full Name</Label>
            <Input placeholder="John Doe" variant="bordered" />
            <FieldError />
          </TextField>

          {/* PHOTO */}
          <TextField
            isRequired
            name="photoUrl"
            validate={(value) =>
              !/^https?:\/\//.test(value)
                ? "Enter valid image URL"
                : null
            }
          >
            <Label>Photo URL</Label>
            <Input placeholder="https://example.com/photo.jpg" variant="bordered" />
            <FieldError />
          </TextField>

          {/* EMAIL */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) =>
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? "Invalid email"
                : null
            }
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" variant="bordered" />
            <FieldError />
          </TextField>

          {/* PASSWORD */}
          <TextField
            isRequired
            name="password"
            validate={(value) => {
              if (value.length < 6) return "Min 6 characters";
              if (!/[A-Z]/.test(value)) return "Add uppercase letter";
              if (!/[0-9]/.test(value)) return "Add number";
              return null;
            }}
          >
            <Label>Password</Label>

            <InputGroup>
              <InputGroup.Input
                type={isVisible ? "text" : "password"}
                placeholder="Password"
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

            <Description>Min 6 chars, 1 uppercase, 1 number</Description>
            <FieldError />
          </TextField>

          {/* CONFIRM PASSWORD */}
          <TextField
            isRequired
            name="confirmPassword"
            validate={(value, formValues) => {
              if (value.length < 6) return "Min 6 characters";

              if (formValues?.password && value !== formValues.password) {
                return "Passwords do not match";
              }

              return null;
            }}
          >
            <Label>Confirm Password</Label>

            <InputGroup>
              <InputGroup.Input
                type={isVisible ? "text" : "password"}
                placeholder="Confirm password"
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

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full bg-emerald-500 text-white font-semibold"
          >
            <FaUserPlus />
            Create Account
          </Button>

        </Form>

        {/* divider */}
      <div className="flex items-center my-6">

          <div className="flex-grow border-t border-default-200"></div>

          <span className="mx-4 text-sm text-default-400">
            OR
          </span>

          <div className="flex-grow border-t border-default-200"></div>

        </div>

        <Button
          onClick={handleGoogleSignIn}
          variant="bordered"
          className="w-full"
        >
          <FcGoogle />
          Continue with Google
        </Button>

        {/* FOOTER */}
        <p className="text-center text-sm mt-4">
          Already have account?{" "}
          <Link href="/login" className="text-emerald-500">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;