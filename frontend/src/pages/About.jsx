import React from "react";
import aboutImg from "../assets/images/image1.png"; // ✅ Make sure this path matches your file name and folder

export default function About() {
  return (
    <main className="bg-blue-900 text-white">
      {/* ================= HEADER SECTION ================= */}
      <section className="bg-blue-950 py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">About MediCare 💙</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-200">
          MediCare Health Record System is a digital healthcare management platform
          designed to connect patients, doctors, and administrators through a secure,
          efficient, and user-friendly interface.
        </p>
      </section>

      {/* ================= WHO WE ARE SECTION ================= */}
      <section className="py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-12 bg-blue-800">
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="Healthcare Team"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Who We Are 👩‍⚕️👨‍⚕️</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            MediCare was founded with a vision to make healthcare record management
            seamless and secure. We believe that technology should simplify healthcare —
            not complicate it. Our system bridges communication gaps between hospitals,
            clinics, doctors, and patients, ensuring that everyone stays informed and connected.
          </p>
        </div>
      </section>

      {/* ================= OUR VALUES SECTION ================= */}
      <section className="bg-blue-700 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Core Values 🌟</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-blue-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-200">
              We embrace technology to continuously improve the way healthcare records
              are managed, accessed, and protected.
            </p>
          </div>
          <div className="bg-blue-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Security</h3>
            <p className="text-gray-200">
              Data privacy and patient confidentiality are at the heart of MediCare’s
              foundation — every record is encrypted and protected.
            </p>
          </div>
          <div className="bg-blue-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Compassion</h3>
            <p className="text-gray-200">
              We are driven by empathy and the desire to make healthcare management
              easier and more human-centered for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="bg-blue-800 py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Why Choose MediCare? 💡</h2>
          <ul className="text-lg text-gray-200 space-y-4">
            <li>✔️ User-friendly platform designed for all healthcare professionals</li>
            <li>✔️ Secure storage and instant access to patient health records</li>
            <li>✔️ Streamlined appointment management for doctors and patients</li>
            <li>✔️ Real-time updates and prescription tracking</li>
            <li>✔️ Built with modern web technology for reliability and speed</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <div className="bg-blue-900 p-10 rounded-2xl shadow-xl">
            <p className="text-lg leading-relaxed">
              At MediCare, our goal is to eliminate paperwork, reduce delays, and improve
              accuracy in healthcare management. Whether you're a patient tracking your
              medical history or a doctor managing appointments — MediCare makes it easy,
              efficient, and secure.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-blue-950 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Future of Healthcare Today 💙</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-200">
          Experience a smarter, safer, and more connected healthcare environment.
          MediCare is transforming the way health records are managed — one click at a time.
        </p>
        <a
          href="/register"
          className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
