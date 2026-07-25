import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Hero } from "./components/Hero";
import { MoreProjects } from "./components/MoreProjects";
import { Nav } from "./components/Nav";
import { DeepSeekCaseStudy } from "./components/CaseStudy/DeepSeekCaseStudy";
import { HistoricalOcrCaseStudy } from "./components/CaseStudy/HistoricalOcrCaseStudy";
import { LegalGraphCaseStudy } from "./components/CaseStudy/LegalGraphCaseStudy";
import { SpendSenseCaseStudy } from "./components/CaseStudy/SpendSenseCaseStudy";
import { SectionHeader } from "./components/SectionHeader";
import { GraphExplorer } from "./components/TheGraph/GraphExplorer";

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
              figure="// fig. 03"
              eyebrow="Selected work"
              title="Projects made visible through their systems and measurements."
              intro="Explore relationships first, then move through four full case studies and seven compact records."
            />
            <GraphExplorer />
            <div className="mt-14">
              <DeepSeekCaseStudy />
              <HistoricalOcrCaseStudy />
              <LegalGraphCaseStudy />
              <SpendSenseCaseStudy />
            </div>
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
            <a className="text-link" href="https://github.com/trungkienjjj" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-link" href="https://linkedin.com/in/trungkienjjj" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-link" href="#home">Top</a>
          </div>
        </div>
      </footer>
    </>
  );
}
