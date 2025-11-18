// src/pages/Contact.jsx
import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import contactHero from "../assets/logo/ivexia-factory1.jpg";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // later: connect to backend / email service
    console.log("Contact form submitted");
  };

  return (
    // padding-top so it sits under TopBar + Navbar
    <div className="bg-[#FFF8F5] min-h-screen pt-28 md:pt-32">
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-20">
        {/* TOP HEADER BLOCK */}
        <div className="mb-10 md:mb-12">
          <p className="text-xs md:text-sm text-gray-500">
            Home / <span className="text-[#0d2d47] font-medium">Contact Us</span>
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d2d47]">
            Contact Us
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-700 max-w-2xl">
            Share your questions, partnership ideas or product enquiries. Our
            Ivexia team will get back to you as soon as possible.
          </p>
        </div>

        {/* MAIN TWO-COLUMN: FORM + IMAGE */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-stretch">
          {/* LEFT: CONTACT FORM */}
          <div className="bg-white shadow-sm border border-gray-100  p-6 md:p-8 flex flex-col">
            <h2 className="text-lg md:text-xl font-semibold text-[#0d2d47] mb-1">
              Send us a message
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mb-6">
              Fill in the form and our team will respond within 1–2 business days.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-5 flex-1"
            >
              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                             focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5]"
                  placeholder="you@example.com"
                />
              </div>

              {/* NAME + PHONE ROW */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                    First Name and Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                               focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                               focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5]"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                             focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5]"
                  placeholder="Brief about your enquiry"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                             focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5] resize-y"
                  placeholder="Write your message here..."
                />
              </div>

              {/* BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="
                    inline-flex items-center justify-center
                    px-7 md:px-9 py-2.5 md:py-3
                    text-sm md:text-base font-semibold
                    rounded-full
                    bg-gradient-to-r from-[#0d2d47] to-[#19a6b5]
                    text-white
                    shadow-md hover:opacity-90 hover:translate-y-[1px]
                    transition
                  "
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: HERO IMAGE BLOCK */}
          <div className="relative  overflow-hidden shadow-sm border border-gray-100">
            <img
              src={contactHero}
              alt="Ivexia pharmaceutical factory"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2d47]/80 via-[#0d2d47]/10 to-transparent" />

            {/* Text overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white">
              <p className="text-[11px] tracking-[0.25em] uppercase mb-2 text-white/80">
                Ivexia Pharmaceuticals
              </p>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
                Global quality from a trusted manufacturing partner
              </h2>
              <p className="text-xs md:text-sm text-white/90 max-w-md">
                Modern facilities, strict GMP standards and a commitment to
                patient safety — powering Ivexia&apos;s formulations worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM: CONTACT INFO + ADDRESS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* CONTACT DETAILS */}
          <div className="bg-white shadow-sm border border-gray-100 p-5 md:p-6">
            <div className="border-l-4 border-[#19a6b5] pl-4 mb-4">
              <h2 className="text-base md:text-lg font-semibold text-[#0d2d47]">
                Get in touch with us
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Reach out by phone, email or through our social channels.
              </p>
            </div>

            <div className="space-y-4 text-sm md:text-[15px] text-gray-700">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#0d2d47]">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="font-semibold text-[#0d2d47]">Contact Number</p>
                  <p> +91 87674 65480</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#0d2d47]">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="font-semibold text-[#0d2d47]">Email</p>
                  <p>info@ivexiapharma.com</p>
                </div>
              </div>

              {/* SOCIAL NETWORKS */}
              <div className="pt-2">
                <p className="font-semibold text-[#0d2d47] mb-2">
                  Social Networks
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#0d2d47] flex items-center justify-center text-white hover:opacity-90"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#0088cc] flex items-center justify-center text-white hover:opacity-90"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ADDRESS BLOCK */}
          <div className="bg-white shadow-sm border border-gray-100  p-5 md:p-6">
            <div className="border-l-4 border-[#0d2d47] pl-4 mb-4">
              <h2 className="text-base md:text-lg font-semibold text-[#0d2d47]">
                Address
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Our corporate office coordinates operations and global
                partnerships.
              </p>
            </div>

            <div className="space-y-4 text-sm md:text-[15px] text-gray-700">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#0d2d47]">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="font-semibold text-[#0d2d47]">Corporate Office</p>
                  <p>
                    Office No. 2, 1st Floor, Palm Beach Arcade,
                    <br />
                    Sector 4, Nerul West,
                    <br />
                     Navi Mumbai – 400706
                  </p>
                </div>
              </div>

              {/* Uncomment later for manufacturing site */}
              {/*
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#0d2d47]">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="font-semibold text-[#0d2d47]">Manufacturing Site</p>
                  <p>...</p>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
