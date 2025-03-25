import React from "react";
import { GoArrowRight } from "react-icons/go";
import {
  FiChevronDown,
  FiTrendingUp,
  FiTarget,
  FiHeadphones,
} from "react-icons/fi";

// Hero Section Component
function HeroSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
        Boost Your SEM Performance
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover our data-driven solutions to improve your search engine
        marketing and drive more qualified traffic to your website.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center">
          Get Started <GoArrowRight className="ml-2" />
        </button>
        <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 flex items-center">
          Learn More <FiChevronDown className="ml-2" />
        </button>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
      <div className="text-blue-600 mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

// Features Section Component
function FeaturesSection() {
  // Example feature data with ES6 imports
  const features = [
    {
      title: "Data Insights",
      description:
        "Utilize real-time analytics to fine-tune your SEM strategy.",
      icon: FiTrendingUp,
    },
    {
      title: "Optimized Campaigns",
      description: "Increase conversion rates with targeted optimizations.",
      icon: FiTarget,
    },
    {
      title: "Expert Support",
      description:
        "Our team of experts is here to help you every step of the way.",
      icon: FiHeadphones,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
        Our Features
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

// Testimonials Section Component (Sample Layout)
function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-lg shadow">
          <p className="text-gray-600 italic text-center mb-4">
            "Since we started using this platform, our SEM results have improved
            dramatically. The insights are game-changing!"
          </p>
          <p className="text-gray-800 font-bold text-center">
            — Alex Johnson, Marketing Director
          </p>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-sm hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

// Complete Page Component
function SEMLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default SEMLandingPage;
