"use client";

import { trpc } from "@/trpc/client";

export function ClientPage() {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Laxmi",
  });
  return <div>{data.greeting}</div>;
}
