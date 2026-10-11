import { useRef, useState } from 'react'

export default function ImageCarousel({ images, alt, fit = 'cover' }) {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(null)

  const count = images.length
  const goTo = (index) => setActive((index + count) % count)
  const prev = () => goTo(active - 1)
  const next = () => goTo(active + 1)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  const imgClass = fit === 'contain' ? 'object-contain p-6' : 'object-cover'
  const bgClass = fit === 'contain' ? 'bg-white' : 'bg-sand'

  return (
    <div>
      <div
        className={`group relative aspect-square overflow-hidden rounded-2xl ${bgClass}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img src={images[active]} alt={`${alt} — view ${active + 1}`} className={`h-full w-full ${imgClass}`} />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-cream opacity-0 transition-opacity hover:bg-ink group-hover:opacity-100"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-cream opacity-0 transition-opacity hover:bg-ink group-hover:opacity-100"
            >
              ›
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to image ${idx + 1}`}
                  onClick={() => goTo(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === active ? 'w-5 bg-cream' : 'w-1.5 bg-cream/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => goTo(idx)}
              className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 ${
                active === idx ? 'border-gold-dark' : 'border-transparent'
              }`}
            >
              <img src={img} alt="" className={`h-full w-full ${fit === 'contain' ? 'object-contain bg-white p-1' : 'object-cover'}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
