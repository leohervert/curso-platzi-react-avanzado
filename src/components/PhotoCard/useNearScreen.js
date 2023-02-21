import { useState, useEffect, useRef } from 'react'

export function useNearScreen () {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    async function observeElement () {
      Promise.resolve(
        typeof window.IntersectionObserver !== 'undefined'
          ? window.IntersectionObserver
          : import('intersection-observer')
      ).then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
      })
    }
    observeElement()
  }, [ref])

  return [show, ref]
}
