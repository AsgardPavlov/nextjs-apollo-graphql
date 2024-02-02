'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'
import OutlineButton from '@/components/OutlineButton'

export default function MobileLocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='mb-[30px] mt-6 grid grid-cols-2 gap-3'>
      {i18n.locales.map(locale => (
        <OutlineButton
          key={locale}
          link={redirectedPathName(locale)}
          className='font-sans text-2xl'
        >
          {locale}
        </OutlineButton>
      ))}
    </div>
  )
}
