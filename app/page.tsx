import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "UWROV – UW Underwater Robotics Team",
  description:
    "Build underwater robots at UW. UWROV is an interdisciplinary club that designs, builds, and competes with ROVs at the MATE World Championship.",
};

const teams = [
  {
    name: "Mechanical",
    icon: "⚙️",
    description: "Designs and manufactures the frame, pressure hull, manipulator, and other systems using CAD software and rapid prototyping.",
    image: "https://uwrov.org/wp-content/uploads/2024/10/cad-boxfish.png",
  },
  {
    name: "Electrical",
    icon: "⚡",
    description: "Designs and supports electronic systems including internal circuitry, sensors, and thrusters. Uses ECAD to design custom circuit boards.",
    image: "https://uwrov.org/wp-content/uploads/2024/11/rasppipcb.png",
  },
  {
    name: "Software",
    icon: "💻",
    description: "Develops command & control software including pilot interfaces, autonomous systems, machine learning, and computer vision.",
    image: "https://uwrov.org/wp-content/uploads/2022/11/screen-shot-2022-11-03-at-5.02.17-pm.png",
  },
  {
    name: "Business",
    icon: "📊",
    description: "Organizes outreach, connects with sponsors, and composes competition-critical materials including marketing displays and technical documentation.",
    image: "https://uwrov.org/wp-content/uploads/2025/11/uwrov-marketing-display-2025-1-1.png",
  },
];

const achievements = [
  { stat: "Top 10", label: "MATE World Championship", sub: "4 consecutive years" },
  { stat: "1st", label: "Engineering Presentation", sub: "2025 MATE Championship" },
  { stat: "1st", label: "Technical Documentation", sub: "Published in Journal of Ocean Technology" },
  { stat: "1st", label: "Machine Learning Challenge", sub: "2025 MATE Championship" },
];

const openSource = [
  { label: "Boxfish 2.0 CAD & Documentation", href: "https://cad.onshape.com/documents/b552b8a10e5ba0f2e8b8d98f/w/d73461d7e6c29a09c69c034b/e/b2adaa076967a7831fcccb27" },
  { label: "T-200 Thruster Guards", href: "https://uwrov.org/2023/06/23/uwrov-t-200-thruster-module/" },
  { label: "GitHub", href: "https://github.com/uwrov" },
  { label: "Past ROVs", href: "/past-rovs" },
];

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#4b2e83]/10 text-[#4b2e83] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
              University of Washington
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-6">
              Learn, Design,{" "}
              <span className="gradient-text">Build.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              The Underwater Remotely Operated Vehicles Team (UWROV) at the University of Washington
              is an interdisciplinary club where students make underwater robots. Our unique mix of
              passion in both oceanography and engineering results in amazing ROVs and a fun team culture.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Would you like to join us?</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe82YhpZVW22KgC2KjTKcbZlaZlW_83nLEyGWaAmY9JyK_N-g/viewform"
                target="_blank" rel="noopener noreferrer" className="btn-primary">
                Applications
              </a>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-semibold mb-2">Support Us:</p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://together.uw.edu/campaign/uwrov2" target="_blank" rel="noopener noreferrer" className="uw-link text-sm">Together UW</a>
                <a href="/sponsors" className="uw-link text-sm">Sponsors</a>
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-semibold mb-2">Open Source Content:</p>
              <div className="flex flex-col gap-1">
                {openSource.map((r) => (
                  <a key={r.href} href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="uw-link text-sm">
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="float-slow">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="https://uwrov.org/wp-content/uploads/2025/11/rovmainrender-website-2.png"
                alt="UWROV underwater robot ROV render"
                width={600}
                height={450}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="sr-only">Achievements</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((a) => (
              <div key={a.stat + a.label} className="card p-6 text-center">
                <div className="text-3xl font-black gradient-text mb-1">{a.stat}</div>
                <div className="text-gray-900 font-semibold text-sm mb-1">{a.label}</div>
                <div className="text-gray-500 text-xs">{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Who We Are</h2>
          <div className="prose prose-gray max-w-3xl space-y-4 text-gray-600 leading-relaxed">
            <p>
              UWROV was founded over 10 years ago by UW Oceanography students interested in ocean
              technology and has continued to expand its scope to other engineering and marine science
              disciplines ever since. Our team has competed in the MATE ROV Competition since 2011,
              as well as supporting regional events through volunteering and mentorship.
            </p>
            <p>
              In 2024, we placed 8th overall at the 2024 MATE World Championships, performing very
              well with our marketing display and technical documentation, earning 4th and 5th place respectively.
            </p>
            <p>
              Most recently, we continued our streak of placing in the top 10 teams at the 2025 MATE
              World Championships and received the Innovation Award. We earned 1st place in the
              Engineering Presentation and Technical Documentation, which was later published in the{" "}
              <a href="https://www.thejot.net/article-preview/?show_article_preview=1666"
                target="_blank" rel="noopener noreferrer" className="uw-link">
                Journal of Ocean Technology
              </a>. We also placed 1st in the Machine Learning Challenge.
            </p>
            <p>
              We strive to continue giving UW students hands-on experience in ocean technology,
              interdisciplinary engineering, and professional skills.
            </p>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Our Work</h2>
          <p className="text-gray-500 mb-12 max-w-2xl">
            Four specialized sub-teams collaborate to design, build, and operate world-class ROVs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team) => (
              <div key={team.name} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={team.image}
                    alt={`${team.name} team`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{team.icon}</span>
                    <h3 className="text-gray-900 font-bold">{team.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{team.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="purple-bar py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Build the Future of Ocean Tech?
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Join UWROV and gain hands-on experience in underwater robotics, interdisciplinary engineering, and professional skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe82YhpZVW22KgC2KjTKcbZlaZlW_83nLEyGWaAmY9JyK_N-g/viewform"
              target="_blank" rel="noopener noreferrer"
              className="bg-white text-[#4b2e83] font-bold px-8 py-3 rounded-md hover:bg-purple-50 transition-colors">
              Apply Now
            </a>
            <Link href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
