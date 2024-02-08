"use client";

import Sheet from "@/components/Sheet";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const snapScript: string = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey: any = process.env.MIDTRANS_PUBLIC_CLIENT!;

    const script = document.createElement("script");
    script.src = snapScript;

    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-center gap-5">
        <Sheet />
    </main>
  );
}
