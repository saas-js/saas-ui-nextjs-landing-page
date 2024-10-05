import { usePathname } from 'next/navigation'

import { useEffect, useRef } from 'react'

const useRouteChanged = (fn: () => void) => {
  const pathname = usePathname()

  const lastPathname = useRef(pathname)

  useEffect(() => {
    if (lastPathname.current === null) {
      return
    }

    if (pathname !== lastPathname.current) {
      fn()
    }
  }, [pathname, fn])
}

export default useRouteChanged
