"use client";

import Chalkboard from "@/components/ui/Chalkboard";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Chalkboard
        text="404"
        subText="Essa página sumiu do quadro"
      />
    </div>
  );
}