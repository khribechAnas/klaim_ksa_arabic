'use client'

import { PostHogProvider as PHProvider } from 'posthog-js/react'
import posthog from "@/utils/posthog";

const PostHogProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  );
};

export default PostHogProvider; // ✅ default export
