import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand text-ink">
      <div className="container-app grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="font-display text-xl mb-3">AHMrit Wellness</h4>
          <p className="text-sm text-ink/70 leading-relaxed">
            Authentic Ayurvedic skincare and home essentials, crafted with tradition and made for modern living.
          </p>
        </div>

        <div>
          <h5 className="text-xs tracking-[0.2em] uppercase text-ink/60 font-medium mb-3">Explore</h5>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><Link to="/shop" className="hover:text-ink">Shop All</Link></li>
            <li><Link to="/about" className="hover:text-ink">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-ink">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs tracking-[0.2em] uppercase text-ink/60 font-medium mb-3">Policies</h5>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><Link to="/faq#shipping" className="hover:text-ink">Shipping Policy</Link></li>
            <li><Link to="/faq#returns" className="hover:text-ink">Returns &amp; Refunds</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs tracking-[0.2em] uppercase text-ink/60 font-medium mb-3">Get in Touch</h5>
          <ul className="space-y-2 text-sm text-ink/70">
            <li>
              <a href="https://wa.me/917020471671" target="_blank" rel="noreferrer" className="hover:text-ink">
                WhatsApp: +91 70204 71671
              </a>
            </li>
            <li>
              <a href="mailto:ahmritwellnessofficial@gmail.com" className="break-words hover:text-ink">
                ahmritwellnessofficial@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/ahmritwellness_official?stkn=MXgwbXowNG9nMnM5Nw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="AHMrit Wellness on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink/70 transition-colors hover:border-ink hover:text-ink"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1KUdXqM4uM/"
              target="_blank"
              rel="noreferrer"
              aria-label="AHMrit Wellness on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink/70 transition-colors hover:border-ink hover:text-ink"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                <path d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2H15l-.5 3H11.5v6h-3v-6H6.5v-3H8.5v-2.3A4.2 4.2 0 0 1 12.7 5H15v3.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 py-5 text-center text-xs text-ink/50">
        © {new Date().getFullYear()} AHMrit Wellness. All rights reserved.
      </div>
    </footer>
  )
}
