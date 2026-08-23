import { skillGroups } from '@/data/site'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Download } from 'lucide-react'

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="The technology I build with."
          description="A focused stack I use to design, build and ship modern web applications and business systems."
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 80}
              className="flex flex-col gap-5 bg-card p-6 sm:p-8"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-bold">{group.label}</h3>
                <span className="font-mono text-xs text-primary">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320} className="mt-8">
          <a
            href="/Romeo%20Resume.pdf"
            download="Romeo-Resume.pdf"
            className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  )
}
