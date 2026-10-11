import { products } from '../data/products'
import ProductCard from './ProductCard'
import Reveal from './Reveal'

export default function AlsoRecommended({ currentProduct }) {
  const sameSubcategory = products.filter(
    (p) => p.id !== currentProduct.id && p.subcategory === currentProduct.subcategory
  )
  const fallback = products.filter(
    (p) => p.id !== currentProduct.id && p.category === currentProduct.category && p.subcategory !== currentProduct.subcategory
  )
  const recommended = [...sameSubcategory, ...fallback].slice(0, 3)

  if (recommended.length === 0) return null

  return (
    <div className="mt-16 border-t border-ink/10 pt-10">
      <h2 className="text-2xl mb-6">You Might Also Like</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {recommended.map((p, i) => (
          <Reveal key={p.id} delay={i * 75} className="h-full">
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
