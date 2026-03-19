"use client";

import Aside from "@/components/ui/Aside";
import { LucideDownload } from "lucide-react";

export default function FollowUpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        
        {/* SIDEBAR */}
        <Aside />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          
          {/* HEADER */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <h1 className="text-2xl font-bold sm:text-3xl text-gray-900">
              Follow Up
            </h1>
          </div>

          {/* GRID PRINCIPAL */}
          <div className="grid gap-6">

            {/* RECENT ACTIVITIES */}
            <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xl">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Recent Activities</h2>

              <ul className="flex flex-col gap-4">
                {[
                  { name:"You", text: "You submitted a new project proposal.", time: "2 hours ago" },
                  { name:"Your Teacher", text: "Your project proposal was approved.", time: "1 day ago" },
                  { name:"Your Teacher", text: "You received feedback on your project.", time: "3 days ago" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow hover:shadow-lg transition"
                  >
                    <span className="text-sm font-medium text-gray-500">{item.name}</span>
                    <p className="text-gray-700">{item.text}</p>
                    <span className="mt-2 text-sm text-gray-500">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xl">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Add Follow Up</h2>

              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Description"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />

                {/* UPLOAD */}
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 cursor-pointer hover:bg-gray-100 transition">
                    <LucideDownload className="text-gray-500" />
                    <span className="text-gray-700 text-sm">Upload file</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-white font-semibold shadow-lg transition hover:opacity-90"
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