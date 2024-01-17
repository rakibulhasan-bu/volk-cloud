"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../../public/signup.json";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  email: string;
  password: string | number;
  confirmPassword: string | number;
};

const SignUppage = () => {
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const userData = JSON.stringify(data);
    localStorage.setItem("user", userData);
    navigate.push("/");
  };
  return (
    <section className=" py-10">
      <div className=" container mx-auto">
        <div className=" lg:flex bg-[#c9d6df] rounded-xl">
          <div className="w-full lg:w-1/2 2xl:w-1/2 flex justify-center items-center bg-white/30 lg:px-10">
            <div className=" w-full">
              <CardHeader>
                <CardTitle className="text-center text-slate-900">
                  Create your account
                </CardTitle>
              </CardHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="space-y-2">
                  <div className="space-y-1 pt-1 w-full">
                    <Label htmlFor="terms">Name</Label>

                    <Input
                      {...register("name", { required: true })}
                      type="text"
                      className="rounded-sm border-black/50 bg-white"
                      placeholder="Name.."
                    />
                    {errors.name && (
                      <span className=" text-red-400">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="space-y-1 pt-1 w-full">
                    <Label htmlFor="terms">Email</Label>
                    <Input
                      {...register("email", { required: true })}
                      type="text"
                      className="rounded-sm border-black/50 bg-white"
                      placeholder="Email.."
                    />
                    {errors.name && (
                      <span className=" text-red-400">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="space-y-1 pt-1 w-full">
                    <Label htmlFor="terms">Password</Label>
                    <Input
                      {...register("password", { required: true })}
                      type="password"
                      className="rounded-sm border-black/50 bg-white"
                      id="password"
                      placeholder="password.."
                    />
                    {errors.name && (
                      <span className=" text-red-400">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="space-y-1 pt-1 w-full">
                    <Label htmlFor="terms">Confim Password</Label>
                    <Input
                      {...register("confirmPassword", { required: true })}
                      type="password"
                      className="rounded-sm border-black/50 bg-white"
                      id="password"
                      placeholder="password.."
                    />
                    {errors.name && (
                      <span className=" text-red-400">
                        This field is required
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col w-full">
                  <Button
                    type="submit"
                    className="text-white bg-blue-500 hover:bg-blue-600 rounded-md w-full"
                  >
                    Sign Up
                  </Button>

                  <div className="flex items-center justify-between w-full pt-2 text-slate-800">
                    <Link href="/login" className="hover:text-blue-600">
                      Already have an account? LogIn
                    </Link>
                    <Link href={"#"} className="hover:text-blue-600">
                      Need help?
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 2xl:w-1/2 flex items-center justify-center">
            <Lottie animationData={animationData} loop autoplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUppage;
