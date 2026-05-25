import { useEffect, useRef, useState } from 'react'

/**
 * Returns a smoothed scroll progress value 0–1
 * and the raw scrollY value, updated via rAF.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const rawY    = useRef(0)
  const smoothY = useRef(0)
  const rafId   = useRef<number>(0)

  useEffect(() => {
    const onScroll = () => { rawY.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    const tick = () => {
      smoothY.current += (rawY.current - smoothY.current) * 0.06
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(smoothY.current / Math.max(total, 1))
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return progress
}
