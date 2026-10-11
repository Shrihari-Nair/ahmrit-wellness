export const FREE_SHIPPING_THRESHOLD = 899
const BASE_SHIPPING = 60
const PER_EXTRA_ITEM = 20

export function calculateShipping(subtotal, totalItems) {
  if (subtotal >= FREE_SHIPPING_THRESHOLD || totalItems <= 0) return 0
  return BASE_SHIPPING + PER_EXTRA_ITEM * (totalItems - 1)
}
