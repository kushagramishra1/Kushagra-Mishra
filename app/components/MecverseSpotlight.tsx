export function MecverseSpotlight() {
  const tags = ['AI Infrastructure', 'Workflow Automation', 'Developer Tools', 'Voice Tech'];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:items-start">
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Mecverse spotlight</p>
          <h2 className="mt-4 text-3xl font-serif font-semibold text-white sm:text-4xl">
            The flagship company shaping the next wave of AI product infrastructure.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-slate-300">
          Mecverse builds infrastructure services that help AI teams move faster, stay secure, and deliver intelligent
          tooling at scale. Our product lineup bridges developer workflows with next-generation automation.
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="https://mecverse.com"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-accent hover:text-accent"
        >
          Visit mecverse.com →
        </a>
      </div>
      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">FlowTux</p>
        <h3 className="mt-4 text-2xl font-serif font-semibold text-white">Flagship product for AI operations</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          FlowTux streamlines team infrastructure with secure workflows, monitoring, and real-time collaboration for
          product builders.
        </p>
        <div className="mt-8 space-y-4 border-t border-slate-700 pt-6 text-sm text-slate-300">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">3x faster deployment</span>
            <span>than legacy stacks</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">99.9%</span>
            <span>uptime for developer tools</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">Built for teams</span>
            <span>and enterprise workflows</span>
          </div>
        </div>
      </div>
    </div>
  );
}
