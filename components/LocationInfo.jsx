"use client";

import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="custom-container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
          A Strategic and Serene Setting
        </h2>
        <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed mb-8">
          Located in Ulukhola, within the thriving area of Purbachal New Town,
          Anondo Baari offers quick and seamless connectivity while being
          distant enough to offer peace and natural beauty. The River Turag
          flows along our southern boundary, offering scenic waterfront views
          and opportunities for riverside recreation.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="bg-white border rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-secondary mb-3">
              <FaMapMarkerAlt className="inline-block mr-2 text-primary" />
              Corporate Office
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Anondo Baari, Printers’ Building, <br />5 RAJUK Avenue, Dilkusha,
              Dhaka
            </p>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-secondary mb-3">
              <FaMapMarkerAlt className="inline-block mr-2 text-primary" />
              Project Location
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ulukhola, Purbachal New Town, <br />
              just 20 minutes from Hazrat Shahjalal International Airport
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
