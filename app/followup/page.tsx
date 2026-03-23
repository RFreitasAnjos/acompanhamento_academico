"use client";

import Aside from "@/components/ui/Aside";
import { useAside } from "@/contexts/AsideContext";
import { LucideDownload } from "lucide-react";

export default function FollowUpPage() {
  const { isOpen } = useAside();

  return (
    <div className="min-h-screen bg-background">
      <div className={`flex flex-col md:flex-row ${isOpen ? "md:gap-0" : ""}`}>
        
        {/* SIDEBAR */}
        <Aside />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          
          {/* HEADER */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Follow Up
            </h1>
          </div>

          {/* GRID PRINCIPAL */}
          <div className="grid gap-6">

            {/* RECENT ACTIVITIES */}
            <div className="rounded-3xl border border-border bg-surface p-5 shadow-xl sm:p-6">
              <h2 className="mb-4 text-xl font-bold text-foreground">Recent Activities</h2>

              <ul className="flex flex-col gap-4">
                {[
                  { name:"You", text: "You submitted a new project proposal.", time: "2 hours ago" },
                  { name:"Your Teacher", text: "Your project proposal was approved.", time: "1 day ago" },
                  { name:"Your Teacher", text: "You received feedback on your project.", time: "3 days ago" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-4 shadow transition hover:shadow-lg"
                  >
                    <span className="text-sm font-medium text-muted">{item.name}</span>
                    <p className="text-foreground">{item.text}</p>
                    <span className="mt-2 text-sm text-muted">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border border-border bg-surface p-5 shadow-xl sm:p-6">
              <h2 className="mb-4 text-xl font-bold text-foreground">Add Follow Up</h2>

              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  className="rounded-lg border border-border bg-surface px-3 py-2 text-foreground outline-none placeholder:text-muted focus:ring-2 focus:ring-primary/20"
                />
                <textarea
                  placeholder="Description"
                  className="rounded-lg border border-border bg-surface px-3 py-2 text-foreground outline-none placeholder:text-muted focus:ring-2 focus:ring-primary/20"
                  rows={4}
                />

                {/* UPLOAD */}
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface-muted px-3 py-2 transition hover:bg-surface">
                    <LucideDownload className="text-muted" />
                    <span className="text-sm text-foreground">Upload file</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-linear-to-r from-primary to-secondary px-5 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}