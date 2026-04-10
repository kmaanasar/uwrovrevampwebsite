import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini-MATE Program",
  description: "UWROV's Mini-MATE program introduces K-12 students to underwater robotics, engineering design, and ocean technology through hands-on workshops.",
};

export default function MiniMatePage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black text-gray-900 mb-4">Mini-MATE</h1>
        <p className="text-gray-500 text-lg mb-12">Bringing underwater robotics to the next generation.</p>
        <div className="card p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Program</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mini-MATE is UWROV&apos;s outreach initiative that introduces K-12 students to the exciting world of underwater robotics. Through hands-on workshops and guided challenges, students experience the engineering design process firsthand.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Participants work in teams to design and build small ROVs, learning about electronics, buoyancy, programming, and teamwork along the way.
          </p>
        </div>
      </div>
    </div>
  );
}
