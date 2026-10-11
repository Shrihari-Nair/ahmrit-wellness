const messages = ['Free shipping on orders above ₹899', 'Pan India shipping']

export default function OfferBanner() {
  return (
    <div className="relative h-9 overflow-hidden bg-sand text-ink sm:h-10">
      <div className="marquee-track absolute inset-y-0 left-0 flex w-max items-center gap-16 py-2.5 text-xs tracking-wide sm:text-sm">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-16" aria-hidden={copy === 1}>
            {messages.map((msg) => (
              <span key={msg} className="whitespace-nowrap">{msg}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
