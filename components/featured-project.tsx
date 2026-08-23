import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, GitBranch, ExternalLink, Check } from 'lucide-react'
import { featuredProject as project } from '@/data/projects'
import { Reveal } from '@/components/reveal'

export function FeaturedProject() {
  return (
    <section id="work" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-4">
          <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden />
            Featured Project
          </span>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {project.name}
            </h2>
            <span className="font-mono text-sm text-muted-foreground">
              {project.category} · {project.year}
            </span>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Link
            href={`/work/${project.slug}`}
            className="group relative block overflow-hidden border border-border bg-card"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={project.cover || '/placeholder.svg'}
                alt={`${project.name} — ${project.tagline}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                {project.type}
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal className="flex flex-col gap-6">
              <p className="text-pretty text-lg leading-relaxed">
                {project.overview}
              </p>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Key Features
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={100} className="flex flex-col gap-6 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  My Role
                </h3>
                <p className="mt-2 font-display text-lg font-semibold">
                  {project.role}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Technologies
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="border border-border px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={`/work/${project.slug}`}
                  className="group inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                {project.links?.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                ) : null}
                {project.links?.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                  >
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
