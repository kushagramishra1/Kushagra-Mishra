export function ContactCta() {
  return (
    <div className="rounded-[32px] border border-slate-700 bg-slate-900 px-8 py-10 text-center sm:px-12">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Let's connect</p>
      <h2 className="mt-4 text-3xl font-serif font-semibold text-white sm:text-4xl">
        Let's build something meaningful.
      </h2>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="https://mecverse.com/contact#schedule"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Request a Demo
        </a>
        <a
          href="https://www.linkedin.com/in/kushagra-mishra-04-/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-accent hover:text-accent"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}
