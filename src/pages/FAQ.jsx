import { useState } from 'react'

const faqGroups = [
  {
    name: 'About AHMrit Wellness',
    items: [
      {
        q: 'What is AHMrit Wellness?',
        a: 'AHMrit Wellness is an Ayurvedic wellness brand focused on bringing traditional Ayurvedic wisdom into modern everyday routines. Our products are thoughtfully formulated by doctors and inspired by authentic Ayurvedic texts and herbal ingredients.',
      },
      {
        q: 'Are AHMrit products Ayurvedic?',
        a: 'Yes. Our formulations are rooted in Ayurvedic principles and traditional herbal knowledge. We take inspiration from authentic Ayurvedic texts while developing products for contemporary use.',
      },
      {
        q: 'Who formulates AHMrit products?',
        a: 'Our products are formulated by doctors with an emphasis on thoughtful ingredient selection, traditional Ayurvedic knowledge, and practical everyday use.',
      },
      {
        q: 'Are your products made with natural ingredients?',
        a: 'We focus on herbal and naturally derived ingredients wherever appropriate. The complete ingredient list for each product is provided on its respective product page and packaging.',
      },
      {
        q: 'Do AHMrit products contain chemicals?',
        a: "We believe in keeping our formulations as simple and purposeful as possible, without unnecessary additives. Please refer to the individual product's ingredient list for complete formulation details.",
      },
    ],
  },
  {
    name: 'Product & Usage',
    items: [
      {
        q: 'How do I know which AHMrit product is right for me?',
        a: 'Each product is created for a specific purpose and has its own recommended usage. You can explore the product descriptions on our website or contact us for help choosing the right product for your needs.',
      },
      {
        q: 'How often should I use AHMrit products?',
        a: 'Usage varies from product to product. Always follow the directions mentioned on the product packaging or product page for the recommended frequency and method of application.',
      },
      {
        q: 'Can I use AHMrit products every day?',
        a: 'Some products are suitable for regular use, while others have specific recommended frequencies. Please follow the instructions provided with each product.',
      },
      {
        q: 'How long does it take to see results?',
        a: 'Results can vary depending on the product, individual skin/body characteristics, consistency of use, and lifestyle. Ayurvedic care generally emphasizes consistency and long-term wellness rather than instant results.',
      },
      {
        q: 'Can I use more than one AHMrit product together?',
        a: 'It depends on the products and their intended use. If you are unsure about combining products, we recommend contacting us before using them together.',
      },
    ],
  },
  {
    name: 'Skin & Safety',
    items: [
      {
        q: 'Should I do a patch test before using a skincare product?',
        a: 'Yes. We recommend performing a patch test before first use, particularly if you have sensitive or reactive skin. Discontinue use if irritation or discomfort occurs.',
      },
      {
        q: 'Can I use AHMrit products if I have sensitive skin?',
        a: 'Product suitability can vary from person to person. Check the ingredients and product-specific instructions before use. If you have a known allergy or a skin condition, consult an appropriate healthcare professional before introducing a new product.',
      },
      {
        q: 'Are AHMrit products suitable for everyone?',
        a: 'Individual suitability depends on the product and the person. Please read the product information carefully and contact us if you need help selecting a product.',
      },
      {
        q: 'Are AHMrit products tested on animals?',
        a: 'AHMrit Wellness is committed to cruelty-free practices.',
      },
      {
        q: 'Where can I find the complete ingredients?',
        a: 'The ingredients are listed on the respective product packaging and product page. We encourage customers to review the ingredient list before use, especially if they have known sensitivities.',
      },
    ],
  },
  {
    name: 'Orders & Delivery',
    items: [
      {
        q: 'How can I place an order?',
        a: 'You can place your order through the purchasing options available on our website. You can also contact us directly through WhatsApp or Instagram for assistance.',
      },
      {
        q: 'Do you deliver across India?',
        a: 'Yes, AHMrit Wellness offers delivery across India.',
      },
      {
        q: 'How long will my order take to arrive?',
        a: 'Delivery time can vary depending on your location, courier availability, and other logistical factors. The estimated delivery timeline will be communicated during the ordering process.',
      },
      {
        q: 'Can I track my order?',
        a: 'If tracking is available for your shipment, the tracking details will be shared with you once your order has been dispatched.',
      },
      {
        q: 'Can I cancel or modify my order after placing it?',
        a: 'Please contact us as soon as possible if you need to make changes or cancel an order. Once an order has been processed or dispatched, cancellation or modification may not be possible.',
      },
      {
        q: 'What should I do if my package arrives damaged?',
        a: 'Please contact us promptly with your order details and clear photographs/videos of the package and product received. Our team will review the issue and assist you accordingly.',
      },
    ],
  },
  {
    name: 'Returns & Support',
    items: [
      {
        q: 'Do you accept returns or exchanges?',
        a: 'Returns and exchanges are subject to our return policy and the condition of the product. Please check our Returns & Refunds Policy before placing an order.',
      },
      {
        q: 'What if I receive the wrong product?',
        a: 'Contact us as soon as possible with your order details and photographs of the product received. We will review the issue and help resolve it.',
      },
      {
        q: 'How can I contact AHMrit Wellness?',
        a: 'You can reach us through WhatsApp at +91 70204 71671, email us at ahmritwellnessofficial@gmail.com, or send us a direct message on Instagram. Our team will be happy to assist you.',
      },
    ],
  },
]

const shippingInfo = [
  'Orders are processed within 1-2 business days.',
  'Free shipping on all orders above ₹899.',
  'For smaller orders, shipping starts at ₹60 and increases slightly with quantity.',
  'We currently deliver Pan-India.',
  'You will receive tracking details via WhatsApp/email once your order ships.',
]

const returnInfo = [
  'Returns are accepted only if the product is damaged or the wrong product was delivered.',
  'A clear, complete unboxing video is required to raise any damage or wrong-item claim.',
  'Contact us on WhatsApp or email with your order details and the unboxing video.',
  'Once verified, we will arrange a replacement or refund.',
]

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium">{item.q}</span>
        <span className="text-xl text-ink/50">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="pb-5 text-sm text-ink/70 leading-relaxed">{item.a}</p>}
    </div>
  )
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState('0-0')

  return (
    <div className="container-app pt-10 pb-16">
      <div className="text-center mb-16">
        <p className="eyebrow mb-2">FAQ</p>
        <h1 className="text-4xl">Frequently Asked Questions</h1>
      </div>

      <div className="mx-auto max-w-2xl mb-20 space-y-12">
        {faqGroups.map((group, gi) => (
          <div key={group.name}>
            <h2 className="mb-2 text-xl">{group.name}</h2>
            <div>
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`
                return (
                  <AccordionItem
                    key={key}
                    item={item}
                    isOpen={openKey === key}
                    onToggle={() => setOpenKey(openKey === key ? '' : key)}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-12 sm:grid-cols-2 max-w-4xl mx-auto">
        <div id="shipping">
          <h2 className="text-2xl mb-4">Shipping Policy</h2>
          <ul className="space-y-2 text-sm text-ink/70">
            {shippingInfo.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-ink/40">–</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div id="returns">
          <h2 className="text-2xl mb-4">Returns &amp; Refunds</h2>
          <ul className="space-y-2 text-sm text-ink/70">
            {returnInfo.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-ink/40">–</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-2xl border-t border-ink/10 pt-10 text-center">
        <p className="eyebrow mb-3">A Small Note</p>
        <p className="font-display text-lg italic text-ink/80 mb-4">
          Ayurveda is about individual care.
        </p>
        <p className="text-sm text-ink/60 leading-relaxed">
          Our products are created for everyday wellness and skincare and are not intended to
          diagnose, treat, cure, or prevent any medical condition. If you have a medical condition,
          are taking medication, or have specific health concerns, consult a qualified healthcare
          professional before use.
        </p>
      </div>
    </div>
  )
}
