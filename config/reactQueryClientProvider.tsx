"use client";

import { QueryClient } from "node_modules/@tanstack/query-core/build/legacy";
import { QueryClientProvider } from "node_modules/@tanstack/react-query/build/legacy";

export const queryClient = new QueryClient({});

export default function ReactQueryClientProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
