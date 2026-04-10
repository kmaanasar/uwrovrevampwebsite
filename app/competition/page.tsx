import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Competition",
  description: "UWROV competes in the Explorer Class of the MATE ROV World Championship — the most advanced student ROV competition in the world.",
};

export default function CompetitionPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black text-gray-900 mb-2">The Competition</h1>
        <p className="text-[#4b2e83] text-lg mb-12 font-semibold">
          We compete in the Explorer Class of the MATE ROV Competition.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About MATE</h2>
            <Image src="https://uwrov.org/wp-content/uploads/2024/11/bluemate.png" alt="MATE ROV Competition logo" width={225} height={100} className="mb-4" />
            <p className="text-gray-600 leading-relaxed">
              The MATE ROV Competition tasks students with building their own underwater robots and developing skills crucial to solving real-world ocean problems.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Explorer Class</h2>
            <p className="text-gray-600 leading-relaxed">
              The Explorer Class is the most advanced class within the MATE competition. Competitors are expected to perform at a higher level and more professionally than teams in other classes.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 mb-12">
          <Image src="https://uwrov.org/wp-content/uploads/2024/11/mate-2023_day-2-330.jpg" alt="UWROV team at the 2023 MATE World Championship" width={1024} height={512} className="w-full object-cover max-h-80" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our History</h2>
            <Image src="https://uwrov.org/wp-content/uploads/2024/11/20231210_155655.jpg" alt="UWROV team photo" width={400} height={250} className="w-full rounded-lg mb-4 object-cover" />
            <p className="text-gray-600 leading-relaxed mb-4">
              We have historically performed very well at the World MATE Competition, placing within the top 10 consistently for the last four years.
            </p>
            <Link href="/past-rovs" className="uw-link inline-flex items-center gap-1">Past ROVs →</Link>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Learn More</h2>
            <p className="text-gray-600 mb-6">Visit the official MATE Competition website to learn more about rules, themes, and results.</p>
            <a href="https://materovcompetition.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">MATE Website</a>
          </div>
        </div>
      </div>
    </div>
  );
}
