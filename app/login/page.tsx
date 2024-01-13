"use client";
import React from "react";
import { Button } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/login.json";

const Login = () => {
  return (
    <section className=" py-10">
      <div className=" container mx-auto">
        <div className=" lg:flex bg-primaryColor/75 rounded-xl">
          <div className="w-full lg:w-1/2 2xl:w-1/2 flex justify-center items-center bg-white/30 lg:px-10">
            <div className=" w-full">
              <CardHeader>
                <CardTitle className="text-center text-slate-900">
                  Welcome Again
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1 pt-1 w-full">
                  <Label htmlFor="terms">Email</Label>
                  <Input
                    type="text"
                    className="rounded-sm border-black/50 bg-white"
                    placeholder="Email.."
                  />
                </div>
                <div className="space-y-1 pt-1 w-full">
                  <Label htmlFor="terms">Password</Label>
                  <Input
                    type="password"
                    className="rounded-sm border-black/50 bg-white"
                    id="password"
                    placeholder="password.."
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col w-full">
                <Button className="text-white bg-blue-500 hover:bg-blue-600 rounded-md w-full">
                  Sign In
                </Button>
                <div className="flex items-center justify-between w-full pt-2 text-slate-800">
                  <Link href={"#"} className="hover:text-blue-600">
                    Create account
                  </Link>
                  <Link href={"#"} className="hover:text-blue-600">
                    Need help?
                  </Link>
                </div>
              </CardFooter>
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

export default Login;
