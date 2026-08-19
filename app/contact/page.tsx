import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with UWROV — the University of Washington underwater robotics team. Reach out about joining, sponsoring, or collaborating.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-black text-gray-900 mb-4">
          We are currently accepting and reviewing applications!
        </h1>

        <a
          href="#"
          className="btn-primary inline-block mt-4 mb-10"
        >
          Apply Now
        </a>

        <div className="border-t border-gray-200 pt-8 space-y-6 text-gray-600 leading-relaxed">
          <p>
            Our members study Engineering, Computer Science, Oceanography, Marine Biology,
            Environmental Health, and more. We encourage you to apply regardless of your
            academic background!
          </p>

          <p className="text-center font-semibold text-gray-900">
            2026–2027 Application Form Coming Soon!
          </p>

          <p>
            Applications are currently open, and can be accessed via the button above. The
            priority application is due <strong>October 3rd, 2025</strong> at midnight. They
            are reviewed on a rolling basis as of Spring 2026. Please note the response time
            will be slower after October 3rd. Additionally, if you would like to be on our
            interest form to get updates about recruitment events and the application, please
            fill out{" "}
            <a href="#" className="text-[#4b2e83] underline">
              this form.
            </a>
          </p>

          <p className="text-center">
            Please reach out to{" "}
            <a href="mailto:uwrov@uw.edu" className="text-[#4b2e83] underline">
              uwrov@uw.edu
            </a>{" "}
            with any questions.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Mailing Info</h2>
          <p className="text-gray-600 leading-relaxed">
            School of Oceanography
            <br />
            University of Washington
            <br />
            Room 239 OSB, Box 355351
            <br />
            Seattle, WA, 98195-5351
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Contact Info and Social Media</h2>
          <div className="space-y-4">
            {[
              { label: "Email", href: "mailto:uwrov@uw.edu", text: "uwrov@uw.edu" },
              { label: "Instagram", href: "https://instagram.com/uwrov", text: "@uwrov" },
            ].map((c) => (
              <div key={c.href} className="border border-gray-200 p-6">
                <div className="text-gray-400 text-xs mb-0.5">{c.label}</div>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="text-gray-900 font-semibold"
                >
                  {c.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}