import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with UWROV — the University of Washington underwater robotics team. Reach out about joining, sponsoring, or collaborating.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-black text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 text-lg mb-12">Have questions? We&apos;d love to hear from you.</p>
        <div className="space-y-4">
          {[
            { label: "General Inquiries", href: "mailto:uwrov@uw.edu", text: "uwrov@uw.edu", icon: "✉️" },
            { label: "Newsletter", href: "https://uwrov.substack.com", text: "Subscribe on Substack", icon: "📰" },
            { label: "GitHub", href: "https://github.com/uwrov", text: "github.com/uwrov", icon: "💻" },
          ].map((c) => (
            <a key={c.href} href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="card flex items-center gap-4 p-6 group">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="text-gray-400 text-xs mb-0.5">{c.label}</div>
                <div className="text-gray-900 font-semibold group-hover:text-[#4b2e83] transition-colors">{c.text}</div>
              </div>
              <span className="ml-auto text-[#4b2e83] text-lg">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
