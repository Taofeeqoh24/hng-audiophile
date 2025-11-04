"use client";

import { ConvexReactClient } from "convex/react";

// Use your Convex URL (from convex.dev or convex dashboard)
export const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
);
