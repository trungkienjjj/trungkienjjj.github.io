import { ExternalLink } from "./components/ExternalLink";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Hero } from "./components/Hero";
import { MoreProjects } from "./components/MoreProjects";
import { Nav } from "./components/Nav";
import { SectionHeader } from "./components/SectionHeader";
import { FeaturedWork } from "./components/FeaturedWork";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <section id="projects" className="ledger-section pt-4">
          <div className="mx-auto max-w-page px-5 sm:px-7">
            <SectionHeader
              eyebrow="Selected work"
              title="Explore my projects."
              intro="Choose a case study or browse the project catalog below."
            />
            <FeaturedWork />
            <MoreProjects />
          </div>
        </section>
        <Capabilities />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-line/10 py-7">
        <div className="mx-auto flex max-w-page flex-col gap-3 px-5 font-mono text-[0.65rem] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p>(c) {new Date().getFullYear()} Nguyen Tran Trung Kien</p>
          <div className="flex gap-4">
            <ExternalLink className="text-link" href="https://github.com/trungkienjjj">GitHub</ExternalLink>
            <ExternalLink className="text-link" href="https://www.linkedin.com/in/trungkienjjj/">LinkedIn</ExternalLink>
            <a className="text-link" href="#home">Top</a>
          </div>
        </div>
      </footer>
    </>
  );
}
