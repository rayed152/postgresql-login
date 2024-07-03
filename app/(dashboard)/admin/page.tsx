import SignoutButton from "@/components/SignoutButton";
import Login from "@/components/forms/Login";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <div>
        <h2 className="text-2xl">
          Admin page - welcome back {session?.user.username}
        </h2>
        <SignoutButton />
      </div>
    );
  }
  return (
    <div>
      Go back to <Link href="/">login page</Link>
    </div>
  );
};

export default page;
