'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='col-span-2 ml-auto flex py-[15px]'>
      <ul className='flex divide-x'>
        {i18n.locales.map(locale => (
          <li key={locale} className='px-1.5'>
            <Link
              href={redirectedPathName(locale)}
              className='font-sans text-2xl'
            >
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
