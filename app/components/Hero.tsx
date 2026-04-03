export function Hero() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Co-founder & Builder</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl font-serif">
          Building product infrastructure for the next generation of AI teams.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          At Mecverse, we design infrastructure that scales AI product workflows, developer velocity, and voice-enabled
          systems for modern teams.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://mecverse.com"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
          >
            Explore Mecverse →
          </a>
          <a
            href="https://www.linkedin.com/in/kushagra-mishra-04-/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-accent hover:text-accent"
          >
            View LinkedIn
          </a>
        </div>
      </div>
      <div className="rounded-[20px] border border-slate-700 bg-slate-900 p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Founder spotlight</p>
        <h2 className="mt-4 text-2xl font-serif font-semibold text-white">Mecverse product direction</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Building the foundation for AI-first workflows, developer tooling, and automated infrastructure across emerging
          enterprise products.
        </p>
      </div>
    </div>
  );
}
