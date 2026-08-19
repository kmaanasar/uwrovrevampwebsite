import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outreach",
  description: "UWROV supports K-12 STEM education through Mini-MATE workshops, mentorship, and volunteering at regional ROV competitions.",
};

export default function OutreachPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black text-gray-900 mb-4">Outreach</h1>
        <p className="text-gray-500 text-lg mb-12">Inspiring the next generation of ocean engineers.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Mini-MATE Program</h2>
            <p className="text-gray-600 leading-relaxed">We run Mini-MATE workshops that introduce K-12 students to underwater robotics, engineering design, and ocean science.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Regional Support</h2>
            <p className="text-gray-600 leading-relaxed">UWROV volunteers at and mentors teams in regional MATE competition events, helping grow the underwater robotics community.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
