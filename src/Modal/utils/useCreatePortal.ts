import { useEffect, useRef } from 'react'

export function useCreatePortal() {
  const portalRoot = useRef<HTMLElement | null>(null)
  useEffect(
    () => {
      const portalRootElement = document.createElement('div')
      document.body.appendChild(portalRootElement)
      portalRoot.current = portalRootElement

      return () => {
        if (portalRoot.current) {
          document.body.removeChild(portalRoot.current)
        }
      }
    },
    [])

  return { portalRoot }
}
