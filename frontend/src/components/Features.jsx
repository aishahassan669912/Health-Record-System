import React from "react";
import patientsImg from "../assets/images/patients.png";
import doctorsImg from "../assets/images/doctors.png";
import appointmentsImg from "../assets/images/appointments.png";
import prescriptionsImg from "../assets/images/prescriptions.png";

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Key Features 💙</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
          <img src={patientsImg} alt="Patients" className="w-20 h-20 mb-4 object-cover rounded-full" />
          <h3 className="text-xl font-semibold mb-2">Patients</h3>
          <p>Manage patient records efficiently and securely.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
          <img src={doctorsImg} alt="Doctors" className="w-20 h-20 mb-4 object-cover rounded-full" />
          <h3 className="text-xl font-semibold mb-2">Doctors</h3>
          <p>Manage doctors, schedules, and appointments seamlessly.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
          <img src={appointmentsImg} alt="Appointments" className="w-20 h-20 mb-4 object-cover rounded-full" />
          <h3 className="text-xl font-semibold mb-2">Appointments</h3>
          <p>Schedule and track appointments easily.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
          <img src={prescriptionsImg} alt="Prescriptions" className="w-20 h-20 mb-4 object-cover rounded-full" />
          <h3 className="text-xl font-semibold mb-2">Prescriptions</h3>
          <p>Track and manage prescriptions digitally.</p>
        </div>
      </div>
    </section>
  );
}
