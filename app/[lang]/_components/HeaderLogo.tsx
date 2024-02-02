'use client'

import Link from 'next/link'
import Image from 'next/image'
import TreLogo from '@/public/logos/tre-extra-horizontal-logo.svg'
import TreLogoDark from '@/public/logos/tre-extra-horizontal-logo-dark.svg'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const HeaderLogo = () => {
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
    <Link href='/' className='col-start-3 col-end-5 mx-auto h-[42px]'>
      <Image
        src={isDark ? TreLogo : TreLogoDark}
        alt='tre-logo'
        className='ml-8 w-auto object-contain'
      />
    </Link>
  )
}

export default HeaderLogo
