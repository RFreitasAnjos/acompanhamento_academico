"use client";

import { useState } from "react";
import { notificationsMock } from "@/public/mocks/Mocks";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import Link from "next/link";

export default function NotificationPage() {
  const [notifications, setNotifications] = useState(notificationsMock);

  const toggleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  };

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Notificações</h1>
        <p className="text-gray-500">Acompanhe suas notificações recentes.</p>
      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="flex flex-col gap-4 w-full">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-center justify-between rounded-2xl border p-4 shadow transition-all duration-300 ${
              notification.read ? "bg-white border-gray-200" : "bg-blue-50 border-blue-400"
            }`}
          >
            {/* LEFT: Notification Content */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-900">{notification.title}</h2>
              <p className="text-gray-700">{notification.message}</p>
              <p className="text-xs text-gray-400 mt-1">{new Date(notification.date).toLocaleString()}</p>
            </div>

            {/* RIGHT: Actions */}
            <div className="flex flex-col items-end gap-2">
              {/* Toggle Read */}
              <button
                onClick={() => toggleRead(notification.id)}
                className="text-blue-500 hover:text-blue-600 transition"
                title={notification.read ? "Marcar como não lida" : "Marcar como lida"}
              >
                {notification.read ? <FaCheckCircle size={20} /> : <FaRegCircle size={20} />}
              </button>

              {/* Go to Profile */}
              <Link
                href="/profile"
                className="rounded-lg bg-blue-600 px-3 py-1 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                Perfil
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}