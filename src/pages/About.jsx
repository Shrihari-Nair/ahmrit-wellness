import Reveal from '../components/Reveal'
import { getProductById } from '../data/products'

const storyImage = getProductById('golden-glow-facepack')?.images[0]

const stats = [
  { title: 'Authentic Ingredients', desc: 'Sourced from trusted growers using traditional Ayurvedic practices.' },
  { title: 'Small-Batch Crafted', desc: 'Made in limited quantities to ensure freshness and quality.' },
  { title: 'Honest Formulations', desc: 'No harsh chemicals, no unnecessary additives — just what your skin needs.' },
]

export default function About() {
  return (
    <div>
      {/* Our Story */}
      <div className="container-app pt-10 pb-16">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <Reveal className="min-w-0">
            <p className="eyebrow mb-3">Our Story</p>
            <h1 className="text-4xl mb-6 leading-tight">Ancient Wisdom. Modern Wellness. One Purpose.</h1>
            <p className="text-ink/70 leading-relaxed mb-4">
              AHMrit Wellness was born from a simple belief — Ayurveda should be a part of everyday life,
              not just something we turn to when we need it.
            </p>
            <p className="text-ink/70 leading-relaxed mb-4">
              With roots in traditional Ayurvedic knowledge and a vision for conscious, effective wellness,
              we set out to create products that bring the goodness of Ayurveda into modern routines.
            </p>
            <p className="text-ink/70 leading-relaxed mb-4">
              Our formulations are thoughtfully developed by doctors and inspired by authentic Ayurvedic
              texts, combining time-tested herbal ingredients with a practical approach to today&apos;s needs.
            </p>
            <p className="text-ink/70 leading-relaxed mb-4">
              From skincare to everyday wellness, every AHMrit product is created with care, purpose, and
              respect for the wisdom of Ayurveda.
            </p>
            <p className="text-ink/70 leading-relaxed mb-6">
              We believe in keeping things simple — authentic ingredients, thoughtful formulations, and
              wellness you can trust.
            </p>
            <p className="font-display text-xl italic text-ink/80">
              AHMrit Wellness — bringing the wisdom of Ayurveda closer to you, one product at a time.
            </p>
          </Reveal>

          <Reveal delay={150} className="min-w-0 md:sticky md:top-24">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <img src={storyImage} alt="AHMrit Wellness — handcrafted Ayurvedic ingredients" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Our Ayurveda Philosophy */}
      <section className="bg-sand">
        <div className="container-app py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-3">Our Ayurveda Philosophy</p>
              <h2 className="text-3xl leading-tight mb-6">Balance is the foundation of true wellness.</h2>
              <p className="text-ink/70 leading-relaxed mb-4">
                Ayurveda is more than an ancient system of healing — it is a way of understanding the
                relationship between the body, mind, nature, and everyday life.
              </p>
              <p className="text-ink/70 leading-relaxed mb-4">
                At AHMrit Wellness, we believe in the Ayurvedic approach of working with the body, not
                against it. Our philosophy is rooted in understanding individual needs, respecting the
                natural rhythm of the body, and choosing ingredients that have been valued in Ayurveda for
                generations.
              </p>
              <p className="text-ink/70 leading-relaxed mb-4">
                We draw inspiration from authentic Ayurvedic texts and traditional herbal wisdom, while
                thoughtfully adapting that knowledge to the needs of modern living.
              </p>
              <p className="text-ink/70 leading-relaxed mb-8">
                For us, Ayurveda means simplicity, balance, purity, and consistency — making conscious
                wellness a natural part of everyday life.
              </p>
              <p className="font-display text-xl italic text-ink/80">
                Ancient knowledge. Thoughtful formulations. Everyday wellness.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <div className="container-app py-16">
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <h3 className="text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-ink/60">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
