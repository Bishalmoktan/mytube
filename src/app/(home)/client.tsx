"use client";

import { trpc } from "@/trpc/client";

export function ClientPage() {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Bishal",
  });
  return <div>{data.greeting}</div>;
}
