"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

const SubscribeSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export default function SubscribeForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({ resolver: zodResolver(SubscribeSchema) });

  const onSubmit = async (data: { email: string }) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <input
        {...register("email")}
        type="email"
        placeholder="Enter your email"
        className="border rounded p-2"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </Button>

      {status === "success" && (
        <p className="text-green-500">Subscribed successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-500">Subscription failed.</p>
      )}
    </form>
  );
}
