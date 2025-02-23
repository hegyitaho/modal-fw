import { useEffect, useRef } from 'react'

const PORTAL_ROOT_ELEMENT_ID = 'portal-root'

export function useCreatePortal() {
  const portalRoot = useRef<HTMLElement | null>(null)
  useEffect(
    () => {
      const portalRootElement = document.createElement('div')
      portalRootElement.id = PORTAL_ROOT_ELEMENT_ID
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
