import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { calculateShipping, FREE_SHIPPING_THRESHOLD } from '../utils/shipping'

export default function Cart() {
  const { items, updateQty, removeItem, subtotal, totalItems } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="container-app py-24 text-center">
        <h1 className="text-3xl mb-4">Your cart is empty</h1>
        <p className="text-ink/60 mb-8">Looks like you haven&apos;t added anything yet.</p>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  const shipping = calculateShipping(subtotal, totalItems)
  const total = subtotal + shipping

  return (
    <div className="container-app pt-8 pb-28 lg:pb-14">
      <h1 className="text-3xl mb-10">Your Cart</h1>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-card divide-y divide-ink/10">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
              <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover bg-sand" />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between">
                  <Link to={`/product/${item.id}`} className="font-medium hover:text-gold-dark">
                    {item.name}
                  </Link>
                  <button onClick={() => removeItem(item.id)} className="text-xs text-ink/40 hover:text-ink">
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-ink/20">
                    <button className="px-3 py-2 text-lg" onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span className="px-3">{item.qty}</span>
                    <button className="px-3 py-2 text-lg" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <span className="font-medium">₹{item.price * item.qty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-card h-fit">
          <h2 className="text-xl mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm text-ink/70">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-ink/10 pt-4 text-lg font-medium">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button onClick={() => navigate('/checkout')} className="btn-primary mt-6 w-full">
            Proceed to Checkout
          </button>
          {subtotal < FREE_SHIPPING_THRESHOLD && (
            <p className="mt-3 text-xs text-ink/50">
              Add ₹{FREE_SHIPPING_THRESHOLD - subtotal} more for free shipping.
            </p>
          )}
        </div>
      </div>

      {/* Mobile sticky checkout bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-4 rounded-t-2xl border-t border-ink/10 bg-cream/95 px-5 py-3 shadow-card backdrop-blur lg:hidden">
        <div>
          <p className="text-xs text-ink/50">Total</p>
          <p className="text-lg font-medium text-ink">₹{total}</p>
        </div>
        <button onClick={() => navigate('/checkout')} className="btn-primary flex-1 py-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}
