"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

function SignoutButton() {
  return (
    <div>
      <Button onClick={() => signOut()}>SignOut</Button>
    </div>
  );
}

export default SignoutButton;
