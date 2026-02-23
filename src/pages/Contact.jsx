// src/pages/Contact.jsx

import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contactHero from "../assets/logo/ivexia-factory1.jpg";
import { useTranslation } from "react-i18next";

export default function Contact() {

  const SERVICE_ID = "service_1z6v6jt";
const ADMIN_TEMPLATE_ID = "template_pwsxd64";
const USER_TEMPLATE_ID ="template_mjc6q7n";
const PUBLIC_KEY = "ta8Q-yyT_dFz4z1SE";

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);
  setError("");

  const form = e.target;

  const formData = {
    from_name: form.from_name.value,
    from_email: form.from_email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value,
    time: new Date().toLocaleString(),
  };

  try {
await emailjs.send(
  SERVICE_ID,
  ADMIN_TEMPLATE_ID,
  formData,
  PUBLIC_KEY
);

await emailjs.send(
  SERVICE_ID,
  USER_TEMPLATE_ID,
  formData,
  PUBLIC_KEY
);

    setSuccess(true);
    form.reset();

  } catch (err) {
    console.error(err);
    setError("Failed to send message. Please try again.");
  }

  setLoading(false);
};

  return (
    <div className="bg-[#FFF8F5] min-h-screen pt-16 md:pt-20">
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-20">
        {/* TOP HEADER BLOCK */}
        <div className="mb-10 md:mb-12">
          <h1 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d2d47]">
            {t("contactPage.title")}
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-700 max-w-2xl">
            {t("contactPage.subtitle")}
          </p>
        </div>

        {/* MAIN TWO-COLUMN: FORM + IMAGE */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-stretch">
          {/* LEFT: CONTACT FORM */}
          <div className="bg-white shadow-sm border border-gray-100  p-6 md:p-8 flex flex-col">
            <h2 className="text-lg md:text-xl font-semibold text-[#0d2d47] mb-1">
              {t("contactPage.formTitle")}
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mb-6">
              {t("contactPage.formSubtitle")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 flex-1">
              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                  {t("contactPage.email")} <span className="text-red-500">*</span>
                </label>
                <input
  name="from_email"
  type="email"
  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                             focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5]"
                  placeholder={t("contactPage.emailPlaceholder")}
                />
              </div>

              {/* NAME + PHONE ROW */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                    {t("contactPage.fullName")}
                  </label>
                 <input
  name="from_name"
  type="text"
                    className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                               focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5]"
                    placeholder={t("contactPage.fullNamePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                    {t("contactPage.phone")}
                  </label>
                  <input
  name="phone"
  type="tel"
                    className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                               focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5]"
                    placeholder={t("contactPage.phonePlaceholder")}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                  {t("contactPage.subject")}
                </label>
                <input
  name="subject"
  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                             focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5]"
                  placeholder={t("contactPage.subjectPlaceholder")}
                />
              </div>

              {/* MESSAGE */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-[#0d2d47] mb-1.5">
                  {t("contactPage.message")}
                </label>
              <textarea
  name="message"
  rows={5}
                  className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm md:text-base
                             focus:outline-none focus:ring-2 focus:ring-[#19a6b5] focus:border-[#19a6b5] resize-y"
                  placeholder={t("contactPage.messagePlaceholder")}
                />
              </div>

              {/* BUTTON */}
              <div className="pt-2">
                <button
  type="submit"
  disabled={loading}
  className="
    inline-flex items-center justify-center
    px-7 md:px-9 py-2.5 md:py-3
    text-sm md:text-base font-semibold
    rounded-full
    bg-gradient-to-r from-[#0d2d47] to-[#19a6b5]
    text-white
    shadow-md hover:opacity-90 hover:translate-y-[1px]
    transition
    disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer
  "
>
  {loading ? "Sending..." : t("contactPage.submit")}
</button>
{success && (
  <p className="text-green-600 mt-3">
    Message sent successfully!
  </p>
)}

{error && (
  <p className="text-red-600 mt-3">
    {error}
  </p>
)}
              </div>
            </form>
          </div>

          {/* RIGHT: HERO IMAGE BLOCK */}
          <div className="relative overflow-hidden shadow-sm border border-gray-100">
            <img
              src={contactHero}
              alt={t("contactPage.heroAlt")}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2d47]/80 via-[#0d2d47]/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white">
              <p className="text-[11px] tracking-[0.25em] uppercase mb-2 text-white/80">
                Ivexia Pharmaceuticals
              </p>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
                {t("contactPage.heroTitle")}
              </h2>
              <p className="text-xs md:text-sm text-white/90 max-w-md">
                {t("contactPage.heroSubtitle")}
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
                {t("contactPage.contactTitle")}
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                {t("contactPage.contactDesc")}
              </p>
            </div>

            <div className="space-y-4 text-sm md:text-[15px] text-gray-700">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#0d2d47]">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="font-semibold text-[#0d2d47]">
                    {t("contactPage.phone")}
                  </p>
                  <p>+91 9998887770</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#0d2d47]">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="font-semibold text-[#0d2d47]">{t("contactPage.email")}</p>
                  <p>	edwebshop18@gmail.com</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-semibold text-[#0d2d47] mb-2">{t("contactPage.followUs")}</p>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0d2d47] flex items-center justify-center text-white hover:opacity-90" aria-label="Instagram">
                    <FaInstagram className="text-sm" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90" aria-label="WhatsApp">
                    <FaWhatsapp className="text-sm" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0088cc] flex items-center justify-center text-white hover:opacity-90" aria-label="Telegram">
                    <FaTelegramPlane className="text-sm" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90" aria-label="LinkedIn">
                    <FaLinkedinIn className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ADDRESS BLOCK */}
          <div className="bg-white shadow-sm border border-gray-100 p-5 md:p-6">
            <div className="border-l-4 border-[#0d2d47] pl-4 mb-4">
              <h2 className="text-base md:text-lg font-semibold text-[#0d2d47]">
                {t("contactPage.addressTitle")}
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                {t("contactPage.addressDesc")}
              </p>
            </div>

            <div className="space-y-4 text-sm md:text-[15px] text-gray-700">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#0d2d47]">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="font-semibold text-[#0d2d47]">{t("contactPage.officeLabel")}</p>
                  <p>
                    14, P Box 3351 Chand Manzi, <br />
                    14 Old Bandil Poora, Mandvi <br />
                    Mumbai –400003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
