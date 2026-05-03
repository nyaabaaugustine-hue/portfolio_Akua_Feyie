'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }

    const enter = () => cursorRef.current?.classList.add('scale-150')
    const leave = () => cursorRef.current?.classList.remove('scale-150')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-gold-500/60 pointer-events-none z-[9999] transition-transform duration-200 ease-out hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-500 pointer-events-none z-[9999] hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
