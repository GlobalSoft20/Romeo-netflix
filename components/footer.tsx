import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { site, navLinks } from '@/data/site'

export function Footer() {
  return (
    <footer className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
            >
              <span className="grid h-8 w-8 place-items-center bg-primary font-mono text-sm font-bold text-primary-foreground">
                JR
              </span>
              {site.name}
            </Link>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Building digital systems that matter — modern web applications and
              business systems from {site.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
              Navigate
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
              Get in touch
            </span>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {site.email}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              WhatsApp: {site.whatsapp}
            </a>
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
              {site.profiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {profile.label}
                </a>
              ))}
            </div>
            <Link
              href="#home"
              className="mt-2 inline-flex w-fit items-center gap-2 border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-widest">
            Black · White · Yellow
          </p>
        </div>
      </div>
    </footer>
  )
}
