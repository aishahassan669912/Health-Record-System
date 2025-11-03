import React from "react";
import heroBg from "../assets/images/hero-bg.png"; // ✅ Make sure this path is correct

export default function Home() {
  return (
    <main className="text-white">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 5, 80, 0.6), rgba(0,0,50,0.6)), url(${heroBg})`,
        }}
      >
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Simplifying Healthcare Record Management 💙
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          MediCare helps patients, doctors, and admins manage health records,
          appointments, and prescriptions in a secure and efficient digital platform.
        </p>
        <div className="flex gap-4">
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="/register"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* ================= VISION & MISSION SIDE-BY-SIDE ================= */}
      <section className="bg-blue-800 py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        {/* Vision */}
        <div className="md:w-2/6 bg-blue-700 p-10 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Vision 💫</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            To revolutionize healthcare management by providing a digital system that
            connects patients, doctors, and administrators seamlessly — promoting
            accessibility, accuracy, and trust in healthcare data worldwide.
          </p>
        </div>

        {/* Mission */}
        <div className="md:w-2/6 bg-white-900 p-10 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Mission 🚀</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Our mission is to simplify and secure the handling of medical records by
            integrating technology into every step of healthcare management. We aim to
            empower hospitals, clinics, and patients through reliable and transparent
            digital tools that improve care delivery and save time.
          </p>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="bg-blue-950 py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Join MediCare Today 💙</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Be part of the digital healthcare transformation — manage your records,
          appointments, and prescriptions in one secure platform.
        </p>
        <a
          href="/register"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
