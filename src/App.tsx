import { Sparkles } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';

const heroImageUrl = `${import.meta.env.BASE_URL}hero-ai-showcase.jpg`;

function App() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0d0d] text-white">
      <section className="relative border-b border-white/10">
        <img
          src={heroImageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96),rgba(2,6,23,0.78)_42%,rgba(2,6,23,0.34)),linear-gradient(0deg,rgba(2,6,23,0.4),transparent_38%),radial-gradient(circle_at_18%_22%,rgba(45,212,191,0.2),transparent_32%)]" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm text-teal-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-teal-300" aria-hidden="true" />
              AI product lab
            </div>
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              AI Projects Showcase
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A collection of experimental AI applications built with modern cloud and generative AI technology.
            </p>
            <button
              type="button"
              onClick={scrollToProjects}
              className="mt-9 inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Enter the Lab
            </button>
          </div>
        </div>
      </section>

      <section id="projects" className="relative px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-96 max-w-4xl rounded-full bg-teal-300/[0.08] blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Featured work</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Five AI concepts, one portfolio.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Explore polished MVPs spanning image styling, virtual try-on, matchmaking, and creative AI workflows.
            </p>
          </div>

          <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={project.id === 'aurelium'} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
