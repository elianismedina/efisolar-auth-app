"use client";

import { useState } from "react";
import { Button } from "./ui/button";

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
      setMessage("Gracias por suscribirte. Recibiras un mensaje de bienvenida");
      setEmail("");
    } else {
      setMessage(data.error || "Ocurrió un error.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubscribe} className="space-y-4">
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full rounded-lg"
        />
        <Button type="submit" className="bg-black text-white p-2 w-full">
          Subscribirme
        </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
