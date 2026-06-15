export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line/10 py-16 sm:py-20">
      <div className="mx-auto grid max-w-page gap-8 px-5 sm:px-7 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-teal">// contact</p>
          <h2 className="mt-4 max-w-3xl font-mono text-3xl font-semibold leading-tight tracking-[-0.04em] text-paper sm:text-5xl">
            Let’s build something worth measuring.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
            Open to AI/ML, NLP, computer vision, data, backend, MLOps, and AI quality internships.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <a
            className="button-primary"
            href="mailto:nttkien080925@gmail.com?subject=Internship%20or%20project%20opportunity"
          >
            nttkien080925@gmail.com
          </a>
          <a className="text-link font-mono text-xs text-muted" href="tel:+84815180935">
            +84 815 180 935
          </a>
        </div>
      </div>
    </section>
  );
}
