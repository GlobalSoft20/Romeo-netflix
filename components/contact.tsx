'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Mail, MapPin, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site, projectTypes } from '@/data/site'
import { Reveal } from '@/components/reveal'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

export function Contact() {
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const message = (data.get('message') as string)?.trim()

    const next: Errors = {}
    if (!name) next.name = 'Please enter your name.'
    if (!email) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = 'Please enter a valid email address.'
    if (!message) next.message = 'Please enter a message.'
    else if (message.length < 10)
      next.message = 'Message should be at least 10 characters.'

    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
      form.reset()
    }
  }

  const inputClass =
    'w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary'

  return (
    <section id="contact" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* CTA */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden />
                Contact
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-balance font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Have an <span className="text-primary">idea?</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Let&apos;s turn it into a practical digital solution.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex w-fit items-center gap-3 border border-border px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                {site.email}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-3 border border-border px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                {site.whatsapp}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="inline-flex w-fit items-center gap-3 px-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {site.location}
              </span>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {submitted ? (
                <div className="flex h-full min-h-64 flex-col items-center justify-center gap-4 border border-primary bg-card p-10 text-center">
                  <span className="grid h-14 w-14 place-items-center bg-primary text-primary-foreground">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-bold">
                    Message ready to send
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thanks for reaching out. Your details have been validated —
                    connect a form backend to deliver messages to your inbox.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={cn(inputClass, errors.name && 'border-primary')}
                      />
                      {errors.name ? (
                        <p id="name-error" className="text-xs text-primary">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@email.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={cn(inputClass, errors.email && 'border-primary')}
                      />
                      {errors.email ? (
                        <p id="email-error" className="text-xs text-primary">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="text-sm font-medium">
                      Project type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue={projectTypes[0]}
                      className={cn(inputClass, 'cursor-pointer')}
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-background">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your idea..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={cn(inputClass, 'resize-none', errors.message && 'border-primary')}
                    />
                    {errors.message ? (
                      <p id="message-error" className="text-xs text-primary">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      Start a Project
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                    >
                      Contact Me
                    </a>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
