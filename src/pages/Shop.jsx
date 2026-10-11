import { Link } from 'react-router-dom'
import { products, categoryTree } from '../data/products'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function Shop() {
  return (
    <div className="container-app pt-8 pb-14">
      <div className="mb-10 text-center">
        <p className="eyebrow mb-2">Shop</p>
        <h1 className="text-4xl">All Products</h1>
      </div>

      <nav className="mb-16 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
        {categoryTree.flatMap((cat) => cat.subcategories).map((sub) => (
          <a key={sub} href={`#${slugify(sub)}`} className="text-ink/60 uppercase tracking-wide underline underline-offset-4 hover:text-ink">
            {sub}
          </a>
        ))}
      </nav>

      <div className="space-y-20">
        {categoryTree.map((cat) => (
          <section key={cat.name}>
            <h2 className="mb-10 text-2xl uppercase tracking-wide">{cat.name}</h2>
            <div className="space-y-14">
              {cat.subcategories.map((sub) => {
                const items = products.filter((p) => p.subcategory === sub)
                return (
                  <div key={sub} id={slugify(sub)} className="scroll-mt-24">
                    <h3 className="mb-6 text-lg text-ink/70">{sub}</h3>
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
                      {items.map((p, i) => (
                        <Reveal key={p.id} delay={(i % 3) * 75} className="h-full">
                          <ProductCard product={p} />
                        </Reveal>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm text-ink/60 mb-4">Not sure where to start?</p>
        <Link to="/contact" className="btn-secondary">Get in Touch</Link>
      </div>
    </div>
  )
}
