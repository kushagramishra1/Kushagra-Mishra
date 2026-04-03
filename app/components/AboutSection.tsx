export function AboutSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 sm:p-10">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-600 text-3xl font-bold text-white">
          KM
        </div>
        <div className="mt-6 space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Kushagra Mishra</p>
          <h2 className="text-2xl font-serif font-semibold text-white">Co-founder of Mecverse</h2>
          <p className="text-sm text-slate-300">Builder, product infrastructure operator, and growth partner.</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 text-sm">
          <a href="https://www.linkedin.com/in/kushagra-mishra-04-/" className="text-accent hover:text-blue-400">
            LinkedIn
          </a>
          <a href="https://mecverse.com" className="text-accent hover:text-blue-400">
            mecverse.com
          </a>
        </div>
      </div>
      <div className="space-y-6 text-slate-300">
        <p className="text-base leading-8">
          I build products and infrastructure for founders and engineering teams who want reliable systems without the
          overhead. I focus on simplicity, operational clarity, and tools that make AI-first workflows feel natural.
        </p>
        <p className="text-base leading-8">
          My best work happens at the intersection of developer experience and automation, where systems are fast, secure,
          and easy to adopt.
        </p>
        <p className="text-base leading-8">
          Open to speaking with investors, partners, and teams who want to accelerate product infrastructure for AI and
          voice-native applications.
        </p>
      </div>
    </div>
  );
}
