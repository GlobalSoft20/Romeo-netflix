import { process } from '@/data/site'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Process() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How I Work"
          title="A simple, deliberate process."
          description="A clear path from problem to delivered software — no unnecessary steps."
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal
              key={item.step}
              delay={i * 80}
              className="flex flex-col gap-4 bg-card p-6 sm:p-8"
            >
              <span className="font-display text-5xl font-bold text-primary">
                {item.step}
              </span>
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
