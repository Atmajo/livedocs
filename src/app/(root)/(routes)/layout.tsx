"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

interface UserResultType {
  id: string;
  email: string;
  clerkId: string;
  name: string | null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();

  return <main>{children}</main>;
}
