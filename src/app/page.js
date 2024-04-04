"use client";
import LoginwithGoogle from "@/components/LoginwithGoogle";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const { status } = useSession();
  console.log(status);
  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("/dashboard");
    } 
  }, [status]);
  return (
    <main>
      <LoginwithGoogle />
      {/* <Login /> */}
    </main>
  );
}
