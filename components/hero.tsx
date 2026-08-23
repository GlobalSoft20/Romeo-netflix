'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Download } from 'lucide-react'
import { site } from '@/data/site'

export function Hero() {
  const headline = 'Building digital systems that matter.'
  const [typedHeadline, setTypedHeadline] = useState('')

  useEffect(() => {
    if (typedHeadline.length >= headline.length) return

    const timeout = window.setTimeout(() => {
      setTypedHeadline(headline.slice(0, typedHeadline.length + 1))
    }, 55)

    return () => window.clearTimeout(timeout)
  }, [headline, typedHeadline])

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="animate-in-up flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for work · {site.location}
        </div>

        <div className="mt-8 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:gap-8">
          <div>
            <h1
              className="animate-in-up min-h-[5.5rem] max-w-3xl text-balance font-display text-3xl font-bold leading-[1.08] tracking-tight sm:min-h-[7rem] sm:text-5xl md:text-6xl"
              style={{ animationDelay: '80ms' }}
            >
              {typedHeadline}
              <span className="ml-1 text-primary" aria-hidden>
                |
              </span>
            </h1>

            <p
              className="animate-in-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: '160ms' }}
            >
              I build modern web applications, business systems, dashboards and
              responsive digital experiences that turn ideas and real-world problems
              into practical solutions.
            </p>

            <div
              className="animate-in-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: '240ms' }}
            >
              <Link
                href="#work"
                className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View My Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Let&apos;s Talk
              </Link>
              <a
                href="/Romeo%20Resume.pdf"
                download="Romeo-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[280px] overflow-hidden border border-border bg-card">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/Romeo-image.jpeg"
                alt="Jean Romeo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <dl
          className="animate-in-up mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-3"
          style={{ animationDelay: '320ms' }}
        >
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Focus
            </dt>
            <dd className="mt-2 font-display text-lg font-semibold">
              Web & Business Systems
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Based in
            </dt>
            <dd className="mt-2 font-display text-lg font-semibold">Rwanda</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Studying
            </dt>
            <dd className="mt-2 font-display text-lg font-semibold">
              Software Engineering
            </dd>
          </div>
        </dl>

      </div>
    </section>
  )
}
