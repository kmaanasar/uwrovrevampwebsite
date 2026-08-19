import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past ROVs",
  description: "Explore the history of UWROV's underwater robots, from early designs to our latest award-winning Boxfish ROV.",
};

export default function PastROVsPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black text-gray-900 mb-4">Past ROVs</h1>
        <p className="text-gray-500 text-lg mb-12">Over a decade of innovation beneath the surface.</p>
        <div className="card p-10 text-center">
          <div className="text-6xl mb-4">🤿</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">ROV Archive</h2>
          <p className="text-gray-600 mb-6">Detailed documentation and history of each UWROV robot is available on our main website.</p>
          <a href="https://uwrov.org/past-rovs/" target="_blank" rel="noopener noreferrer" className="btn-primary">View on uwrov.org</a>
        </div>
      </div>
    </div>
  );
}
