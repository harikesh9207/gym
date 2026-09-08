"use client";

import React, { useEffect } from "react";
import styles from "./Toast.module.css";

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  type?: "success" | "info";
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <div key={toast.id} className={styles.toastCard}>
          <div className={styles.iconCircle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className={styles.toastContent}>
            <div className={styles.toastTitle}>{toast.title}</div>
            <div className={styles.toastDesc}>{toast.description}</div>
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className={styles.closeBtn}
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};
export default Toast;
