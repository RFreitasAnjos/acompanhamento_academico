"use client";
export default function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background text-center">
      <h1 className="mb-4 text-4xl font-bold text-foreground">An error occurred</h1>
      <p className="text-lg text-muted">Sorry, something went wrong. Please try again later.</p>
    </div>
  );
}