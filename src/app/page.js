"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 px-6 py-2 flex items-center justify-between">
        <Image
          src="/Logo.jpg"
          alt="Moon People Logo"
          width={100}
          height={100}
        />

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-3xl"
          >
            ☰
          </button>

          {isMenuOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md p-4 space-y-2 z-10">
              <li>
                <a href="#home" className="block hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="block hover:text-blue-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="block hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Sections */}
      <section
        id="home"
        className="h-170 items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-25 py-50"
      >
        <div className="max-w-2xl px-4 mx-auto pt-20">
          <h2 className="text-5xl font-bold mb-6 text-center">
            Welcome to Moon People
          </h2>

          <p className="text-gray-700 mb-6 pt-10">
            Moon People specializes in providing HR solutions tailored to the
            needs of early to mid-stage Web3 and AI startups. Our services help
            streamline essential HR operations, from setting up HRIS and payroll
            systems to developing recruiting strategies and company policies.
            Whether it&#39;s building your employee handbook, facilitating
            mission and values workshops, or managing state tax registration, we
            ensure your HR foundation is solid.
          </p>

          <p className="text-gray-700">
            Our expertise also extends to global workforce management, including
            EOR and contractor setups for international workers. We optimize
            your internal systems to ensure seamless HR and recruiting
            processes. With flexible initial contracts from 1–6 months, we offer
            the support you need to scale efficiently.
          </p>
        </div>
      </section>

      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-30"
      >
        <div className="max-w-2xl px-4 pt-20">
          <h3 className="text-3xl font-semibold mb-4">About Us</h3>
          <div className="flex justify-center gap-6 py-6">
            <Image src="/lgbit.jpg" alt="LG" width={200} height={200} />
            <Image src="/TOSHBIT.JPEG" alt="Toshiba" width={200} height={200} />
          </div>
          <p className="text-gray-700 pt-5">
            At Moon People, we believe every organization thrives when its
            people thrive. Our team brings decades of experience in human
            resources, organizational design, and employee engagement.
          </p>
        </div>
      </section>

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="max-w-4xl px-4">
          <h3 className="text-3xl font-semibold mb-6 text-center">Services</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 list-disc list-inside text-gray-700 pt-10">
            <li>Employee Onboarding</li>
            <li>HR Policy Development</li>
            <li>Performance Management</li>
            <li>Employee Engagement</li>
            <li>Training and Development</li>
            <li>Conflict Resolution and Mediation</li>
            <li>Compensation and Benefits</li>
            <li>HRIS Setup and Management</li>
            <li>State Tax Registration</li>
            <li>Payroll Setup and Compliance</li>
            <li>Legal Compliance</li>
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-xl px-4 text-center">
          <h3 className="text-3xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-6 text-gray-700">
            We&#39;d love to hear from you. Whether you&#39;re seeking a partner
            in people strategy or just want to say hello — reach out!
          </p>
          <a
            href="mailto:hello@moonpeople.xyz"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <footer className="text-center text-sm py-6 text-gray-500">
        &copy; {new Date().getFullYear()} Moon People. All rights reserved.
      </footer>
    </div>
  );
}
