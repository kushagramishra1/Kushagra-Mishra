import { AboutSection } from './components/AboutSection';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MecverseSpotlight } from './components/MecverseSpotlight';
import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { FadeInSection } from './components/FadeInSection';

export default function HomePage() {
  return (
    <main id="top" className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
      <FadeInSection className="mb-10">
        <Navbar />
      </FadeInSection>

      <FadeInSection className="mb-16">
        <Hero />
      </FadeInSection>

      <hr className="section-divider my-16" />

      <FadeInSection className="mb-16" id="mecverse">
        <MecverseSpotlight />
      </FadeInSection>

      <hr className="section-divider my-16" />

      <FadeInSection className="mb-16" id="products">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Product portfolio</p>
            <h2 className="mt-4 text-3xl font-serif font-semibold text-white sm:text-4xl">
              Products designed for AI-first teams and secure developer workflows.
            </h2>
          </div>
          <ProductGrid />
        </div>
      </FadeInSection>

      <hr className="section-divider my-16" />

      <FadeInSection className="mb-16" id="about">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About me</p>
          <div className="mt-8">
            <AboutSection />
          </div>
        </div>
      </FadeInSection>

      <hr className="section-divider my-16" />

      <FadeInSection className="mb-16" id="contact">
        <ContactCta />
      </FadeInSection>

      <hr className="section-divider my-16" />

      <Footer />
    </main>
  );
}
