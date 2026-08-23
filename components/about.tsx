import { Code2, Database, LayoutDashboard, Boxes } from 'lucide-react'
import { site } from '@/data/site'
import { Reveal } from '@/components/reveal'

const focuses = [
  { icon: Code2, label: 'Web Applications' },
  { icon: Boxes, label: 'Business Systems' },
  { icon: LayoutDashboard, label: 'Dashboards' },
  { icon: Database, label: 'Databases' },
]

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden />
                About
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                A developer focused on{' '}
                <span className="text-primary">practical software</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 flex flex-col gap-4 border-l-2 border-primary pl-5 font-mono text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground">Name</span> —{' '}
                  {site.fullName}
                </p>
                <p>
                  <span className="text-foreground">Role</span> — {site.role} /{' '}
                  {site.subRole}
                </p>
                <p>
                  <span className="text-foreground">Location</span> —{' '}
                  {site.location}
                </p>
                <p>
                  <span className="text-foreground">University</span> —{' '}
                  {site.university}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100} className="flex flex-col gap-6">
              <p className="text-pretty text-lg leading-relaxed sm:text-xl">
                I&apos;m a software engineering student and developer building
                web applications and business systems that solve real problems.
                My work spans responsive interfaces, structured databases and
                data-rich dashboards.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                I care about clean, reusable code and interfaces that stay clear
                as they grow. Whether it&apos;s a management platform or a
                marketing site, I focus on turning requirements into practical,
                maintainable software.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-8">
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
                {focuses.map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-col items-start gap-3 bg-card p-5 transition-colors hover:bg-secondary"
                  >
                    <f.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium leading-snug">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
