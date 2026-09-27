"use client";

import { useStore } from "@/context/StoreContext";

export function ToastNotification() {
  const { toast } = useStore();
  if (!toast) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
      <p
        key={toast.id}
        role="status"
        aria-live="polite"
        className="toast-in bg-ink px-6 py-3 text-center text-[11px] tracking-[0.18em] uppercase text-ivory"
      >
        {toast.message}
      </p>
    </div>
  );
}
