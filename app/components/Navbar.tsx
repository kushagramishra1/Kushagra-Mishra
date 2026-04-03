export function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 py-6 text-sm font-medium text-slate-100">
      <a href="#top" className="font-semibold text-lg text-slate-50">
        Kushagra Mishra
      </a>
      <div className="flex flex-1 items-center justify-end gap-4 sm:gap-6">
        <div className="hidden md:flex items-center gap-6 text-slate-400">
          <a href="#about" className="hover:text-accent">
            About
          </a>
          <a href="#mecverse" className="hover:text-accent">
            Mecverse
          </a>
          <a href="#products" className="hover:text-accent">
            Products
          </a>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
        </div>
        <a
          href="https://mecverse.com/contact#schedule"
          className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
