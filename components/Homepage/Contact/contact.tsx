import { ChefHat } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className=" py-20">
      <div className=" container mx-auto">
        <h2 className=" font-bold text-2xl text-center mb-10">Get in Touch</h2>
        <div className=" lg:flex 2xl:flex justify-between items-center gap-5">
          <div className=" space-y-5 w-full lg:w-1/2 2xl:w-1/2">
            <h1 className=" text-4xl font-bold">Convey Your Ideas to Us</h1>
            <p className=" text-lg w-full lg:w-3/4">
              Contact us for question, technical assistance, or collaboration
              opportinities via the contact information provided
            </p>
            <div className=" flex items-center gap-3">
              <ChefHat />
              <p className=" font-bold">Support chat</p>
            </div>
            <div className=" flex items-center gap-3">
              <ChefHat />
              <p className=" font-bold">Info.volkcloud@gmail.com</p>
            </div>
            <div className=" flex items-center gap-3">
              <ChefHat />
              <p className=" font-bold">Cape Town, Claremont</p>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 2xl:w-1/2 space-y-5">
            <div className="space-y-1 pt-1">
              <Label htmlFor="terms">Name</Label>
              <Input
                type="password"
                className="rounded-sm"
                id="password"
                placeholder="Name"
              />
            </div>
            <div className=" lg:flex 2xl:flex gap-5">
              <div className="space-y-1 pt-1 w-full">
                <Label htmlFor="terms">Email</Label>
                <Input
                  type="password"
                  className="rounded-sm"
                  id="password"
                  placeholder="Name"
                />
              </div>
              <div className="space-y-1 pt-1 w-full">
                <Label htmlFor="terms">Phone Number</Label>
                <Input
                  type="password"
                  className="rounded-sm"
                  id="password"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="space-y-1 pt-1">
              <Label htmlFor="terms">Email</Label>
              <Textarea placeholder="Type your message here." />
            </div>
            <div>
              <Button className=" bg-primaryColor">Submit Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
