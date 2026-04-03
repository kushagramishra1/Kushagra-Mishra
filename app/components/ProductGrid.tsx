const products = [
  {
    name: 'FlowTux',
    description: 'AI infrastructure workflow platform for modern development teams.',
    link: 'https://mecverse.com/products/flowtux',
    featured: true,
  },
  {
    name: 'BringRings',
    description: 'Voice gateway platform for secure communication and automation.',
    link: 'https://bringrings.com',
  },
  {
    name: 'WorkClave',
    description: 'Attendance and session analytics for hybrid teams.',
    link: 'https://mecverse.com',
  },
  {
    name: 'VishIQ',
    description: 'Session intelligence that surfaces team insights and opportunity signals.',
    link: 'https://mecverse.com',
  },
  {
    name: 'KodeYum',
    description: 'Developer tooling for faster integration, testing, and deployment.',
    link: 'https://mecverse.com',
  },
  {
    name: 'DriftSocket',
    description: 'Secure tunneling for remote infrastructure and live development.',
    link: 'https://mecverse.com',
  },
];

export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.name}
          className={`group rounded-3xl border px-6 py-8 transition-colors ${
            product.featured ? 'border-accent bg-slate-950' : 'border-slate-800 bg-slate-900'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{product.description}</p>
            </div>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300">
              →
            </span>
          </div>
          <a
            href={product.link}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex text-sm font-semibold text-accent hover:text-blue-400"
          >
            Learn more
          </a>
        </article>
      ))}
    </div>
  );
}
