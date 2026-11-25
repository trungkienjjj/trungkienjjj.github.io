import { ExternalLink } from "./ExternalLink";
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line/10 py-16 sm:py-20">
      <div className="mx-auto grid max-w-page gap-8 px-5 sm:px-7 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-teal">Contact</p>
          <h2 className="mt-4 max-w-3xl font-mono text-3xl font-semibold leading-tight tracking-[-0.04em] text-paper sm:text-5xl">
            Let's talk about AI engineering or evaluation.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
            I'm based in Ho Chi Minh City, Vietnam, and open to internships, junior roles,
            and remote projects in AI/ML engineering, model evaluation, and data quality.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-3 lg:justify-end">
          <a className="button-primary" href="mailto:nttkien080925@gmail.com">
            Email
          </a>
          <ExternalLink className="button-secondary" href="https://www.linkedin.com/in/trungkienjjj/">
            LinkedIn
          </ExternalLink>
          <ExternalLink className="button-secondary" href="https://github.com/trungkienjjj">
            GitHub
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
