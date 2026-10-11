import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import heroBg from '../images/processed/hero-home-bg.webp'

const whyPoints = [
  {
    title: 'Authentic Ayurveda',
    desc: 'Inspired by traditional Ayurvedic knowledge and classical texts.',
  },
  {
    title: 'Formulated by Doctors',
    desc: 'Every formulation is thoughtfully developed with professional knowledge and care.',
  },
  {
    title: 'Pure & Herbal',
    desc: 'We focus on naturally derived ingredients and avoid unnecessary additives.',
  },
  {
    title: 'Made with Purpose',
    desc: 'Every product is created to bring the wisdom of Ayurveda into your everyday wellness routine.',
  },
]

const trustPoints = [
  'Authentic Ayurvedic formulations',
  'Doctor formulated',
  'Carefully selected ingredients',
  'Pan-India delivery',
  'Secure ordering',
  'Customer support via WhatsApp',
]

export default function Home() {
  const sunscreens = products.filter((p) => p.subcategory === 'Sunscreens')
  const dhoops = products.filter((p) => p.subcategory === 'Dhoop')

  return (
    <div>
      {/* Hero — background photo with centered text; pulled up behind the transparent header */}
      <section className="relative -mt-[130px] overflow-hidden pt-[130px] md:-mt-[150px] md:pt-[150px]">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative container-app py-28 sm:py-36">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-body text-4xl sm:text-5xl leading-tight">Rooted in Ayurveda. Made for Today.</h1>
            <p className="mt-5 text-ink/70 leading-relaxed">
              Authentic Ayurvedic formulations, thoughtfully crafted for everyday skincare and wellness.
            </p>
            <div className="mt-9">
              <Link to="/shop" className="btn-primary">
                Explore Our Products
              </Link>
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
              Formulated and Tested by Doctors
            </p>
          </div>
        </div>
      </section>

      {/* Sunscreens */}
      <section className="bg-sand py-20">
        <div className="container-app">
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="eyebrow mb-2">Skincare · Sunscreens</p>
                <h2 className="text-3xl">SPF 50 Ayurvedic Sunscreens</h2>
              </div>
              <Link to="/shop#sunscreens" className="hidden sm:inline text-sm uppercase tracking-wide underline underline-offset-4">
                View all
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {sunscreens.map((p, i) => (
              <Reveal key={p.id} delay={i * 75} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness & Home */}
      <section className="container-app py-20">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-2">Wellness &amp; Home · Dhoop</p>
              <h2 className="text-3xl">Everyday Rituals for the Home</h2>
            </div>
            <Link to="/shop#dhoop" className="hidden sm:inline text-sm uppercase tracking-wide underline underline-offset-4">
              View all
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:mx-auto lg:max-w-2xl">
          {dhoops.map((p, i) => (
            <Reveal key={p.id} delay={i * 75} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why customers choose AHMrit */}
      <section className="bg-sand py-20">
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl leading-tight">Why customers choose AHMrit</h2>
            </div>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-3xl gap-x-10 gap-y-5 sm:grid-cols-2">
            {trustPoints.map((point, i) => (
              <Reveal key={point} delay={i * 60}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-ink/40" aria-hidden="true">✓</span>
                  <span className="text-ink/80">{point}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why AHMrit */}
      <section>
        <div className="container-app py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl leading-tight">Rooted in Ayurveda. Crafted by Doctors. Made for You.</h2>
              <p className="mt-5 text-ink/70 leading-relaxed">
                At AHMrit Wellness, we believe true wellness begins with going back to the roots. Our products
                are thoughtfully formulated by doctors, inspired by authentic Ayurvedic texts, and created
                with carefully selected herbal ingredients.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 75}>
                <div className="border-t border-ink/15 pt-5">
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <p className="mt-16 text-center font-display text-2xl italic text-ink/80">
              Rooted in Tradition. Made for Modern Living.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
