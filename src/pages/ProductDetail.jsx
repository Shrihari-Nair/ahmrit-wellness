import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'
import ImageCarousel from '../components/ImageCarousel'
import AlsoRecommended from '../components/AlsoRecommended'
import { FREE_SHIPPING_THRESHOLD } from '../utils/shipping'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [qty, setQty] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container-app py-24 text-center">
        <h1 className="text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="btn-secondary">Back to Shop</Link>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product, qty || 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    addItem(product, qty || 1)
    navigate('/cart')
  }

  return (
    <div className="container-app pt-6 pb-28 md:pb-12">
      <nav className="mb-8 text-xs uppercase tracking-wide text-ink/50">
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <span>{product.category}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="min-w-0">
          <ImageCarousel images={product.images} alt={product.name} fit={product.imageFit} />
        </div>

        <div className="min-w-0">
          <p className="eyebrow mb-2">{product.category}</p>
          <h1 className="text-3xl mb-2">{product.name}</h1>
          <p className="text-ink/60 mb-4">{product.tagline}</p>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-medium">₹{product.price}</span>
          </div>

          <p className="mt-6 text-ink/80 leading-relaxed">{product.description}</p>

          <div className="mt-6 space-y-2 text-sm text-ink/70">
            <p><span className="font-medium text-ink">How to use: </span>{product.howToUse}</p>
            <p><span className="font-medium text-ink">Ingredients: </span>{product.ingredients}</p>
            <p><span className="font-medium text-ink">Net Quantity: </span>{product.netQuantity}</p>
            {product.bestBefore && (
              <p><span className="font-medium text-ink">Best Before: </span>{product.bestBefore}</p>
            )}
            <p className="text-gold-dark">
              {product.stock > 0 ? `In stock — ${product.stock} left` : 'Out of stock'}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-ink/20">
              <button className="px-4 py-3 text-lg" onClick={() => setQty((q) => Math.max(0, q - 1))}>−</button>
              <span className="px-4">{qty}</span>
              <button className="px-4 py-3 text-lg" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <button onClick={handleAdd} className="btn-secondary hidden flex-1 md:inline-flex">
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
          </div>
          <button onClick={handleBuyNow} className="btn-primary mt-3 hidden w-full md:block">
            Buy Now
          </button>

          <div className="mt-6 text-xs text-ink/50 space-y-1">
            <p>✓ Free shipping on orders above ₹{FREE_SHIPPING_THRESHOLD}</p>
            <p>✓ Returns accepted for damaged or incorrect items (unboxing video required)</p>
          </div>
        </div>
      </div>

      {/* Mobile sticky Add to Cart bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-4 rounded-t-2xl border-t border-ink/10 bg-cream/95 px-5 py-3 shadow-card backdrop-blur md:hidden">
        <div>
          <p className="text-xs text-ink/50">Price</p>
          <p className="text-lg font-medium text-ink">₹{product.price * (qty || 1)}</p>
        </div>
        <button onClick={handleAdd} className="btn-primary flex-1 py-4">
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>

      <AlsoRecommended currentProduct={product} />
    </div>
  )
}
