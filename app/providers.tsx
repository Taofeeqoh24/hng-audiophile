// app/providers.tsx
"use client";

import { Provider } from "react-redux";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { store } from "@/store/store";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ConvexProvider client={convex}>
        {children}
      </ConvexProvider>
    </Provider>
  );
}