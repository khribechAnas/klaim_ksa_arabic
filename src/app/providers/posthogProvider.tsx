// app/providers.tsx
'use client'

import {PostHogProvider as PHProvider} from 'posthog-js/react'
import posthog from "@/utils/posthog";

export function PostHogProvider({children}: { children: React.ReactNode }) {

  return (
   <PHProvider client={posthog}>
     {children}
   </PHProvider>
  )
}
