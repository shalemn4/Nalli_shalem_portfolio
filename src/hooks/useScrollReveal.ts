import { useEffect, useRef } from 'react'

/**
 * Attach this to any ref and it will add/remove the `.visible` class
 * when the element enters the viewport.
 */
export function useScrollReveal(threshold = 0.15, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}

/**
 * Observe multiple elements at once and toggle `.visible` on each.
 */
export function useScrollRevealGroup(selector: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])
}
