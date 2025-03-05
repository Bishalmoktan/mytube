import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

import { HydrateClient, trpc } from "@/trpc/server";
import { ClientPage } from "./client";

export default async function HomePage() {
  void trpc.hello.prefetch({
    text: "Bishal",
  });
  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Error</p>}>
          <ClientPage />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
