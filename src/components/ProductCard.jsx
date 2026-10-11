import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className={`relative aspect-square overflow-hidden ${product.imageFit === 'contain' ? 'bg-white' : 'bg-sand'}`}>
        <img
          src={product.images[0]}
          alt={product.name}
          className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
            product.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'
          }`}
          loading="lazy"
        />
        <span className="absolute top-2 left-2 rounded-full bg-ink/85 px-2 py-0.5 text-[9px] uppercase tracking-wide text-cream backdrop-blur sm:top-3 sm:left-3 sm:px-3 sm:py-1 sm:text-[10px]">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="text-sm leading-snug text-ink sm:text-lg">{product.name}</h3>
        <p className="mt-1 text-xs text-ink/60 line-clamp-2 sm:text-sm">{product.tagline}</p>
        <div className="mt-auto flex items-baseline gap-2 pt-2 sm:pt-3">
          <span className="text-sm font-medium text-ink sm:text-base">₹{product.price}</span>
        </div>
      </div>
    </Link>
  )
}
