"use client";

import profile from "@/data/profile";

export default function CVContent() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 md:py-16 print:px-4 print:py-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10 print:mb-6">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white print:text-black">
            {profile.name}
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 print:text-gray-600">
            {profile.title}
          </p>
          <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start text-sm">
            <a href={`mailto:${profile.email}`} className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 print:text-gray-700">
              {profile.email}
            </a>
            <span className="text-zinc-300 dark:text-zinc-600 print:text-gray-400">|</span>
            <a href={`tel:${profile.phone}`} className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 print:text-gray-700">
              {profile.phone}
            </a>
            <span className="text-zinc-300 dark:text-zinc-600 print:text-gray-400">|</span>
            <span className="text-zinc-600 dark:text-zinc-400 print:text-gray-700">{profile.website}</span>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="mb-8 print:mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 print:text-red-800">
          About
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed print:text-gray-700">
          {profile.about}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8 print:mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 print:text-red-800">
          Work Experience
        </h2>
        <div className="space-y-6 print:space-y-3">
          {profile.experiences.map((exp) =>
            exp.promotions.map((promo) => (
              <div key={promo.title + promo.year}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-sm print:text-black">
                    {promo.title}
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 print:text-gray-500 whitespace-nowrap">
                    {promo.year}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2 print:text-gray-500">
                  {exp.company}
                </p>
                <ul className="space-y-1">
                  {promo.summary.map((s) => (
                    <li key={s} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2 print:text-gray-700">
                      <span className="text-primary mt-0.5 print:text-red-800">&#8226;</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8 print:mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 print:text-red-800">
          Education
        </h2>
        {profile.education.map((edu) => (
          <div key={edu.title}>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-white print:text-black">
              {edu.title}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 print:text-gray-500">
              {edu.school} · {edu.year}
            </p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8 print:mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 print:text-red-800">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {profile.allSkills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 print:bg-gray-100 print:text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Social */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 print:text-red-800">
          Links
        </h2>
        <div className="flex flex-wrap gap-4">
          {profile.socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors print:text-gray-700"
            >
              {social.url.replace("https://", "")}
            </a>
          ))}
        </div>
      </section>

      {/* Print button */}
      <div className="mt-10 text-center no-print">
        <button
          onClick={() => window.print()}
          className="px-6 py-2.5 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          Print / Save as PDF
        </button>
      </div>
    </main>
  );
}
