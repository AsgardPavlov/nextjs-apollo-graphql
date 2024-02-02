'use client'

import Image from 'next/image'
import TreBigLogo from '@/public/logos/tre-horizontal-logo.svg'
import TreBigLogoDark from '@/public/logos/tre-horizontal-logo-dark.svg'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const HeroLogo = ({ className }: { className: string }) => {
  const { resolvedTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <Image
      src={isDark ? TreBigLogo : TreBigLogoDark}
      alt='tre-big-logo'
      className={className}
    />
  )
}

export default HeroLogo
