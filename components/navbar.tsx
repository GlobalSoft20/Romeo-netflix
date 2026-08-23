'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, site } from '@/data/site'

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const to = (hash: string) => (isHome ? hash : `/${hash}`)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[]
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center bg-primary font-mono text-sm font-bold text-primary-foreground">
            JR
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={to(link.href)}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                  active === link.href && 'text-primary',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={to('#contact')}
            className="hidden items-center gap-1.5 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'grid overflow-hidden border-border bg-background transition-all duration-300 md:hidden',
          open ? 'grid-rows-[1fr] border-t' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0">
          <ul className="flex flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={to(link.href)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center justify-between border-b border-border py-4 font-display text-xl font-semibold',
                    active === link.href ? 'text-primary' : 'text-foreground',
                  )}
                >
                  {link.label}
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <Link
                href={to('#contact')}
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-primary px-4 py-3 font-semibold text-primary-foreground"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
