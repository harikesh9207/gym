"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import BmiCalculator from "@/components/BmiCalculator";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import VirtualTour from "@/components/VirtualTour";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Toast, { ToastMessage } from "@/components/Toast";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState("7-Day Free Trial Pass");
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleOpenBooking = (prefill?: string) => {
    if (prefill) {
      setBookingPrefill(prefill);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const addToast = (title: string, description: string) => {
    const id = Date.now().toString();
    const newToast: ToastMessage = { id, title, description };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main>
      {/* Fixed Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Features Showcase */}
      <Features />

      {/* Training Programs */}
      <Programs onOpenBooking={handleOpenBooking} />

      {/* Live Weekly Class Schedule */}
      <Schedule onOpenBooking={handleOpenBooking} />

      {/* Interactive BMI & Metabolic Calculator */}
      <BmiCalculator onOpenBooking={handleOpenBooking} />

      {/* Certified Master Coaches */}
      <Trainers onOpenBooking={handleOpenBooking} />

      {/* Membership Pricing Plans */}
      <Pricing onOpenBooking={handleOpenBooking} />

      {/* 360° Facility Tour */}
      <VirtualTour />

      {/* Verified Member Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Footer with Newsletter */}
      <Footer onSuccessToast={addToast} />

      {/* Pass Booking & Class Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        prefillItem={bookingPrefill}
        onSuccessToast={addToast}
      />

      {/* Global Interactive Notification Toasts */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </main>
  );
}
