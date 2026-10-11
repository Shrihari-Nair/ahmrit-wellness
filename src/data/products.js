// Eagerly load every processed product photo; Vite resolves these to build-time URLs.
const productImageModules = import.meta.glob('../images/processed/products/*/*.webp', {
  eager: true,
  import: 'default',
})

function getProductImages(slug) {
  return Object.keys(productImageModules)
    .filter((path) => path.includes(`/products/${slug}/`))
    .sort((a, b) => {
      const na = parseInt(a.match(/(\d+)\.webp$/)[1], 10)
      const nb = parseInt(b.match(/(\d+)\.webp$/)[1], 10)
      return na - nb
    })
    .map((path) => productImageModules[path])
}

// Category hierarchy used to structure the Shop page and homepage sections.
export const categoryTree = [
  { name: 'Skincare', subcategories: ['Facepacks', 'Sunscreens'] },
  { name: 'Wellness & Home', subcategories: ['Dhoop'] },
]

export const products = [
  {
    id: 'golden-glow-facepack',
    name: 'Golden Glow Face Pack',
    category: 'Skincare',
    subcategory: 'Facepacks',
    bestFor: 'Dull-looking skin',
    keyFocus: 'Brightening care',
    frequency: '4–5 times weekly',
    price: 189,
    tagline: 'Hydrate. Brighten. Glow — the natural way.',
    description:
      'Give your skin a naturally nourishing and radiant care routine with AHMrit Golden Glow Face Pack, a carefully formulated blend of 6 Ayurvedic herbs traditionally valued for skincare. This herbal powder face pack helps deeply cleanse the skin, absorb excess oil and impurities, soothe irritation, and promote a clearer, brighter-looking complexion — leaving skin feeling fresh, clean, smooth and naturally radiant.',
    howToUse:
      'Mix 1-2 tsp of powder with rose water, milk or curd to a smooth paste. Apply evenly on clean skin, leave for 10-15 minutes, then rinse with lukewarm water. Use 3-4 times a week for best results.',
    ingredients: 'Multani Mitti, Lodhra, Amalaki, Manjishta, Nimba, Haridra',
    netQuantity: '70 g',
    bestBefore: '12 months from the date of manufacture',
    stock: 30,
    images: getProductImages('golden-glow-facepack'),
    imageFit: 'cover',
  },
  {
    id: 'anti-acne-facepack',
    name: 'Anti Acne Face Pack',
    category: 'Skincare',
    subcategory: 'Facepacks',
    bestFor: 'Acne-prone skin',
    keyFocus: 'Clarifying care',
    frequency: '4–5 times weekly',
    price: 189,
    tagline: 'A refreshing, purifying routine for clearer skin.',
    description:
      'Give your skin a naturally refreshing and purifying care routine with AHMrit Anti Acne Face Pack, a carefully formulated blend of 7 Ayurvedic herbs traditionally valued for skincare. This powder-based face pack is designed to help cleanse the skin, absorb excess oil and leave your skin feeling fresh, clean and refreshed.',
    howToUse:
      'Mix 1-2 tsp of powder with rose water, milk or curd to a smooth paste. Apply evenly on clean skin, leave for 10-15 minutes, then rinse with lukewarm water. Use 3-4 times a week for best results.',
    ingredients: 'A blend of 7 Ayurvedic herbs (full list on pack)',
    netQuantity: '70 g',
    bestBefore: '12 months from the date of manufacture',
    stock: 30,
    images: getProductImages('anti-acne-facepack'),
    imageFit: 'cover',
  },
  {
    id: 'spot-clear-facepack',
    name: 'Spot Clear Face Pack',
    category: 'Skincare',
    subcategory: 'Facepacks',
    bestFor: 'Uneven tone & dark spots',
    keyFocus: 'Spot-focused care',
    frequency: '4–5 times weekly',
    price: 199,
    tagline: 'Ayurvedic dark spot care for clear, even-looking skin.',
    description:
      'A naturally soothing and refreshing care routine with AHMrit Spot Clear Face Pack, a carefully formulated blend of 8 Ayurvedic herbs traditionally valued for supporting clear, even-looking and radiant skin. Designed to gently cleanse the skin while helping improve the appearance of dark spots, uneven skin tone and dullness, leaving skin feeling fresh, smooth and rejuvenated.',
    howToUse:
      'Mix 1-2 tsp of powder with rose water, milk or curd to a smooth paste. Apply evenly on clean skin, leave for 10-15 minutes, then rinse with lukewarm water. Use 3-4 times a week for best results.',
    ingredients: 'Yashtimadhu, Lodhra, Amalaki, Manjishta, Sariva, Shweta Chandan, Mango Ginger, Punarnava',
    netQuantity: '70 g',
    bestBefore: '12 months from the date of manufacture',
    stock: 30,
    images: getProductImages('spot-clear-facepack'),
    imageFit: 'cover',
  },
  {
    id: 'kumkumadi-sunscreen',
    name: 'Kumkumadi Sunscreen',
    category: 'Skincare',
    subcategory: 'Sunscreens',
    price: 379,
    tagline: 'SPF 50 PA+++ mineral + herbal sunscreen with saffron',
    description:
      'A pure Ayurvedic-inspired mineral and herbal sunscreen formulated with skin-nourishing oils, herbs, antioxidants and mineral UV filters. Enriched with Kumkumadi essence, aloe vera, saffron, green tea and other botanical ingredients, providing broad-spectrum UVA & UVB protection while helping nourish and protect the skin from environmental stressors.',
    howToUse:
      'Apply generously 15-20 minutes before sun exposure. Reapply every 2-3 hours for continued protection.',
    ingredients: 'Zinc Oxide, Titanium Dioxide, Kumkumadi essence, Aloe Vera, Saffron, Green Tea, Carrot Seed & botanical extracts',
    netQuantity: '60 g',
    bestBefore: '18 months from the date of manufacturing',
    stock: 22,
    images: getProductImages('kumkumadi-sunscreen'),
    imageFit: 'cover',
  },
  {
    id: 'butterscotch-coffee-sunscreen',
    name: 'Butterscotch Coffee Sunscreen',
    category: 'Skincare',
    subcategory: 'Sunscreens',
    price: 349,
    tagline: 'SPF 50 PA+++ mineral + herbal sunscreen, antioxidant-rich',
    description:
      'Daily sun protection with a nourishing and antioxidant-rich skincare routine. Enriched with butterscotch coffee essence, aloe vera, vitamin E, green tea and botanical extracts, along with nourishing coconut, flaxseed and almond oils, shea butter and kokum butter, providing broad-spectrum UVA & UVB protection.',
    howToUse:
      'Apply generously 15-20 minutes before sun exposure. Reapply every 2-3 hours for continued protection.',
    ingredients:
      'Zinc Oxide, Titanium Dioxide, Aloe Vera, Vitamin E, Green Tea, Carrot Seed, Broccoli, Asparagus, Spinach, Coconut Oil, Flaxseed Oil, Almond Oil, Shea Butter, Kokum Butter & Butterscotch Coffee Essence',
    netQuantity: '60 g',
    bestBefore: '18 months from the date of manufacturing',
    stock: 20,
    images: getProductImages('butterscotch-coffee-sunscreen'),
    imageFit: 'cover',
  },
  {
    id: 'aqua-cool-sunscreen',
    name: 'Aqua Cool Sunscreen',
    category: 'Skincare',
    subcategory: 'Sunscreens',
    price: 349,
    tagline: 'SPF 50 PA+++ mineral + herbal sunscreen, refreshing cool fragrance',
    description:
      'Refreshing daily sun protection and nourishing care with a mineral and herbal sunscreen formulated with skin-nourishing oils, botanical extracts, antioxidants and mineral UV filters. Enriched with aloe vera, rose water, vitamin E, green tea and nourishing coconut, flaxseed and almond oils, shea and kokum butter, with a refreshing cool fragrance.',
    howToUse:
      'Apply generously 15-20 minutes before sun exposure. Reapply every 2-3 hours for continued protection.',
    ingredients:
      'Zinc Oxide, Titanium Dioxide, Nano Gold 24K, Nano Silver 99.5%, Aloe Vera, Rose Water, Vitamin E, Green Tea, Carrot Seed, Broccoli, Asparagus, Spinach & botanical extracts',
    netQuantity: '60 g',
    bestBefore: '18 months from the date of manufacturing',
    stock: 20,
    images: getProductImages('aqua-cool-sunscreen'),
    imageFit: 'cover',
  },
  {
    id: 'forest-noir-dhoop',
    name: 'Forest Noir Premium Cup Dhoops',
    category: 'Wellness & Home',
    subcategory: 'Dhoop',
    price: 189,
    tagline: 'The deep, earthy essence of the forest — 12 cups',
    description:
      'Bring the deep, earthy essence of the forest into your space with AHMrit Forest Noir Premium Cup Dhoops, a premium aromatic dhoop inspired by the tranquillity of ancient woods. Releases a rich, woody fragrance with notes of cedar, ancient wood and earthy forest character — ideal for relaxation, meditation, prayer and everyday home ambience.',
    howToUse: 'Place one dhoop cup in the included holder, light it, and let the gentle smoke fill your space.',
    ingredients: 'Fragrance Profile: Ancient Wood, Dark Forest, Cedar, Earthy Notes',
    netQuantity: '12 Cups (includes 1 Cup Holder)',
    bestBefore: null,
    stock: 25,
    images: getProductImages('forest-noir-dhoop'),
    imageFit: 'cover',
  },
  {
    id: 'oud-elite-dhoop',
    name: 'Oud Élité Premium Cup Dhoops',
    category: 'Wellness & Home',
    subcategory: 'Dhoop',
    price: 189,
    tagline: 'Rich, warm and luxurious oud fragrance — 12 cups',
    description:
      'Transform your space with the rich, warm and luxurious fragrance of AHMrit Oud Élité Premium Cup Dhoops. Inspired by rare agarwood (oud), golden amber and precious resins, these cup dhoops release a fragrant, velvety smoke for a calm, elegant ambience — traditionally used for Dhoopana, relaxation, meditation and prayer.',
    howToUse: 'Place one dhoop cup in the included holder, light it, and let the gentle smoke fill your space.',
    ingredients: 'Fragrance Profile: Oud, Golden Amber, Precious Resin',
    netQuantity: '12 Cups (includes 1 Cup Holder)',
    bestBefore: null,
    stock: 25,
    images: getProductImages('oud-elite-dhoop'),
    imageFit: 'cover',
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)
