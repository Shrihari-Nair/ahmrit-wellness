import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — this will be wired to an email/API service later.
    setSent(true)
  }

  return (
    <div className="container-app pt-10 pb-16">
      <div className="text-center mb-12">
        <p className="eyebrow mb-2">Get in Touch</p>
        <h1 className="text-4xl">We&apos;d Love to Hear From You</h1>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-xl mb-4">Reach Us Directly</h2>
          <div className="space-y-4">
            <a
              href="https://wa.me/917020471671"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card hover:shadow-lg transition-shadow"
            >
              <span className="text-2xl">💬</span>
              <div className="min-w-0">
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-ink/60">+91 70204 71671</p>
              </div>
            </a>
            <a
              href="mailto:ahmritwellnessofficial@gmail.com"
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card hover:shadow-lg transition-shadow"
            >
              <span className="text-2xl">✉️</span>
              <div className="min-w-0">
                <p className="font-medium">Email</p>
                <p className="text-sm text-ink/60 break-words">ahmritwellnessofficial@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="text-xl mb-4">Send Us a Message</h2>
          {sent ? (
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <p className="text-gold-dark text-2xl mb-2">✓</p>
              <p>Thank you! We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm"
              />
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm"
              />
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
