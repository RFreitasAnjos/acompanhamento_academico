"use client";
export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-primary"></div>
    </div>
  );
}