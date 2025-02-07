"use client";

import { useState } from "react";

export default function SubscribeButton() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Check your inbox for a welcome email!");
      setEmail("");
    } else {
      setMessage(data.error || "An error occurred.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubscribe} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-black text-white p-2 w-full">
          Subscribe
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
