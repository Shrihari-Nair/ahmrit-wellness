import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import logo from '../images/processed/logo-animated.webp'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [logoSrc, setLogoSrc] = useState(logo)
  const { totalItems } = useCart()

  useEffect(() => {
    const interval = setInterval(() => {
      const next = `${logo}?r=${Date.now()}`
      // Preload off-screen first so the visible <img> swaps to an
      // already-decoded frame instead of flashing blank while it loads.
      const preload = new Image()
      preload.onload = () => setLogoSrc(next)
      preload.src = next
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const linkClass = ({ isActive }) =>
    `nav-link text-sm tracking-wide uppercase transition-colors pb-1 ${
      isActive ? 'text-gold-dark active' : 'text-ink/80 hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-40">
      <div className="container-app relative flex items-center justify-between gap-4 py-5">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoSrc}
            alt="AHMrit Wellness"
            className="h-16 w-auto sm:h-20"
          />
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 rounded-full bg-white px-8 py-3.5 shadow-card lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm tracking-wide uppercase text-ink shadow-card"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M6 8h12l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[11px] text-ink font-medium">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="lg:hidden text-ink"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-5 rounded-2xl bg-white shadow-card lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-5">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
