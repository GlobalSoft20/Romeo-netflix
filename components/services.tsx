import {
  Globe,
  Workflow,
  LayoutDashboard,
  Database,
  Smartphone,
  Wrench,
} from 'lucide-react'
import { services } from '@/data/site'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const icons = [Globe, Workflow, LayoutDashboard, Database, Smartphone, Wrench]

export function Services() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I build."
          description="From single interfaces to complete database-driven systems — built to be practical, reliable and maintainable."
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 80}
                className="group relative flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center border border-border text-primary transition-colors group-hover:border-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs tracking-widest text-muted-foreground/60">
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
