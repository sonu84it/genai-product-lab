import { ArrowUpRight, Github, Youtube } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

const isPlaceholderLink = (link: string) => link === '#';
const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type ActionLinkProps = {
  href: string;
  label: string;
  disabledLabel?: string;
  icon: ReactNode;
  variant: 'primary' | 'youtube' | 'outline';
};

const actionStyles = {
  primary:
    'bg-teal-300 text-slate-950 hover:bg-teal-200',
  youtube:
    'border border-red-300/20 bg-red-400/10 text-red-50 hover:border-red-200/40 hover:bg-red-400/15',
  outline:
    'border border-white/12 text-white hover:border-white/25 hover:bg-white/10',
};
const disabledActionStyle =
  'border border-white/10 bg-white/10 text-slate-400 shadow-inner shadow-white/5 backdrop-blur';

function ActionLink({ href, label, disabledLabel = 'Coming soon', icon, variant }: ActionLinkProps) {
  const isDisabled = isPlaceholderLink(href);
  const className = `inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition ${actionStyles[variant]}`;

  if (isDisabled) {
    return (
      <span aria-disabled="true" className={`${className} ${disabledActionStyle} cursor-not-allowed`}>
        {icon}
        {disabledLabel}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {icon}
      {label}
    </a>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isInLab = project.status === 'in-lab';

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.052] shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-300/45 hover:bg-white/[0.075] hover:shadow-glow">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={assetUrl(project.imagePath)}
          alt={`${project.name} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        {isInLab && (
          <div className="absolute inset-4 flex items-end rounded-2xl border border-white/12 bg-slate-950/24 p-4 opacity-95 shadow-2xl shadow-black/30 backdrop-blur-[2px]">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-200">
              In lab
            </span>
          </div>
        )}
      </div>

      <div className="flex min-h-[330px] flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.meta.map((item) => (
            <span key={item} className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {item}
            </span>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={
                tag === 'Luxury'
                  ? 'rounded-full border border-amber-200/50 bg-amber-200/8 px-3 py-1 text-xs font-medium text-amber-100'
                  : 'rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-100'
              }
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-white">{project.name}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>

        <div className="mt-6 grid grid-cols-1 gap-3 transition duration-300 sm:grid-cols-3 lg:opacity-85 lg:group-hover:opacity-100">
          <ActionLink
            href={project.appLink}
            label="App"
            icon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
            variant="primary"
          />
          <ActionLink
            href={project.youtubeLink}
            label="YouTube"
            icon={<Youtube className="h-4 w-4" aria-hidden="true" />}
            variant="youtube"
          />
          <ActionLink
            href={project.githubLink}
            label="GitHub"
            icon={<Github className="h-4 w-4" aria-hidden="true" />}
            variant="outline"
          />
        </div>
      </div>
    </article>
  );
}
