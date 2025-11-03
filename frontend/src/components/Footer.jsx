import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">MediCare Health Record System 💙</h2>
        <p className="max-w-lg mx-auto text-gray-300 mb-6">
          MediCare is a secure digital health system that connects patients, doctors, and administrators.  
          Manage records, appointments, and prescriptions anytime, anywhere.
        </p>

        <div className="flex justify-center space-x-6 text-2xl mb-6">
          <FaFacebook className="hover:text-blue-400 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
        </div>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} MediCare Health Record System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
