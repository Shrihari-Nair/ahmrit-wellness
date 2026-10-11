import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { calculateShipping } from '../utils/shipping'

const paymentOptions = [
  { id: 'upi', label: 'UPI', desc: 'Pay via UPI ID / QR code' },
  { id: 'gateway', label: 'Card / Wallet', desc: 'Pay securely via Razorpay' },
]

export default function Checkout() {
  const { items, subtotal, totalItems, clearCart } = useCart()
  const [payment, setPayment] = useState('upi')
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', pincode: '' })

  if (items.length === 0 && !placed) {
    return <Navigate to="/shop" replace />
  }

  const shipping = calculateShipping(subtotal, totalItems)
  const total = subtotal + shipping

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Payment processing will be wired up once the backend is integrated.
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <div className="container-app py-24 text-center">
        <p className="text-gold-dark text-4xl mb-4">✓</p>
        <h1 className="text-3xl mb-3">Order Received!</h1>
        <p className="text-ink/60 mb-8 max-w-md mx-auto">
          Thank you, {form.name || 'friend'}! We&apos;ve noted your order and will reach out on WhatsApp/phone to confirm payment.
        </p>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="container-app pt-8 pb-14">
      <h1 className="text-3xl mb-10">Checkout</h1>
      <div className="grid gap-10 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl mb-4">Delivery Details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="min-w-0 rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm sm:col-span-2"
              />
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="min-w-0 rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm"
              />
              <input
                required
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="min-w-0 rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm"
              />
              <input
                required
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                className="min-w-0 rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm sm:col-span-2"
              />
              <input
                required
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="min-w-0 rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm sm:col-span-2"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-4">Payment Method</h2>
            <div className="space-y-3">
              {paymentOptions.map((opt) => (
                <label
                  key={opt.id}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 ${
                    payment === opt.id ? 'border-gold-dark bg-white' : 'border-ink/15'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={opt.id}
                    checked={payment === opt.id}
                    onChange={() => setPayment(opt.id)}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-medium">{opt.label}</p>
                    <p className="text-sm text-ink/60">{opt.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            Place Order — ₹{total}
          </button>
        </form>

        <div className="rounded-2xl bg-white p-6 shadow-card h-fit">
          <h2 className="text-xl mb-4">Order Summary</h2>
          <ul className="space-y-2 text-sm text-ink/70 mb-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 text-sm text-ink/70 border-t border-ink/10 pt-4">
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
        </div>
      </div>
    </div>
  )
}
