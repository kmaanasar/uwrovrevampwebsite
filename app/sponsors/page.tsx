import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors & Donations",
  description: "Support UWROV through sponsorship or donation. Help UW students build world-class underwater robots and advance ocean technology.",
};

export default function SponsorsPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black text-gray-900 mb-4">Sponsors & Donations</h1>
        <p className="text-gray-500 text-lg mb-12">Your support helps us build world-class underwater robots.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Donate via TogetherUW</h2>
            <p className="text-gray-600 mb-6">Make a tax-deductible donation to UWROV through the University of Washington&apos;s official giving platform.</p>
            <a href="https://together.uw.edu/campaign/uwrov2" target="_blank" rel="noopener noreferrer" className="btn-primary">Donate via TogetherUW</a>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Become a Sponsor</h2>
            <p className="text-gray-600 mb-6">Interested in sponsoring UWROV? We&apos;d love to connect with companies and individuals passionate about ocean technology and STEM.</p>
            <a href="mailto:uwrov@uw.edu" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
