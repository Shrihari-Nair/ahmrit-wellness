import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position on every route change, since browsers don't do this
// automatically for client-side routing. If the URL has a hash (e.g. /shop#dhoop),
// scrolls to that section instead of the top.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
