import './overlay.css'
import { PropsWithChildren, useEffect } from 'react'

// interface OverlayProps {
//   isVisible: boolean
// }

export function Overlay({ children }: PropsWithChildren) {
  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return (
    <div className="overlay">
      {children}
    </div>
  )
}
