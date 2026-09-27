'use client';

import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export default function Toast({ message, type = 'success', onClose }: ToastProps) {
  return (
    <div className="fixed top-6 right-6 z-[999999] max-w-sm w-full p-4 rounded-2xl glass-card border border-[#f59e0b]/40 bg-[#05080c]/95 shadow-[0_15px_40px_rgba(245,158,11,0.2)] flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
      {type === 'success' ? (
        <CheckCircle2 className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
      )}
      <div className="flex-1 text-xs sm:text-sm text-[var(--foreground)] font-medium leading-relaxed">
        {message}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-[var(--muted)] hover:text-white transition-colors cursor-pointer"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
