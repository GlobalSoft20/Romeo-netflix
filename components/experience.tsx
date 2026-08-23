import { experience } from '@/data/site'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience & Learning"
          title="Where I'm coming from."
          description="A factual look at my education and hands-on development experience."
        />

        <ol className="mt-12 flex flex-col">
          {experience.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              as="li"
              className="group grid gap-4 border-t border-border py-8 last:border-b md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-sm text-primary">
                  {item.period}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-xl font-bold sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {item.org}
                </p>
                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
