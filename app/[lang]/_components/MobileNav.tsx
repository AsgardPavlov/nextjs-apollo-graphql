'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TreLogo from '@/public/logos/tre-horizontal-without-logo.svg'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import MobileLocaleSwitcher from '@/app/[lang]/_components/MobileLocaleSwitcher'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import ThemeButton from '@/app/[lang]/_components/ThemeButton'
import { useTheme } from 'next-themes'
import TreLogoDark from '@/public/logos/tre-horizontal-logo-dark.svg'

const MobileNav = ({
  items,
  lang
}: {
  items: { [key: string]: string }[]
  lang: Locale
}) => {
  const { resolvedTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  const handleToggleMenu = () => {
    setIsMenuOpen(o => !o)
  }

  return (
    <>
      <nav className='mb-[46px] flex w-full items-center justify-between border-b-[0.5px] py-[18px] lg:hidden'>
        <Link href='/'>
          <Image
            src={isDark ? TreLogo : TreLogoDark}
            alt='tre-big-logo'
            className='h-6 w-min'
          />
        </Link>
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='hover:bg-zinc-100 dark:hover:bg-zinc-700 flex items-center justify-center rounded-lg p-2 transition-colors'
          onClick={handleToggleMenu}
        >
          <Bars3Icon className='h-6 w-6' />
        </button>
      </nav>

      <Modal size='full' isOpen={isMenuOpen} onClose={handleToggleMenu}>
        <ModalContent className='container gap-0 dark:bg-emerald-950'>
          {onClose => (
            <>
              <ModalHeader className='container flex border-b-[0.5px] px-0 py-[18px]'>
                <Link href='/'>
                  <Image
                    src={isDark ? TreLogo : TreLogoDark}
                    alt='tre-big-logo'
                    className='h-6 w-min'
                  />
                </Link>
              </ModalHeader>
              <ModalBody className='container gap-[30px] p-0'>
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2'>
                    <ThemeButton />
                    <MobileLocaleSwitcher />
                  </div>

                  <ul className='flex flex-col gap-[18px]'>
                    {items.map(({ label, path }) => (
                      <li key={path} onClick={handleToggleMenu}>
                        <Link
                          href={`/${lang}/${path}`}
                          className='flex border-b-[0.5px] pb-3 font-sans text-lg font-normal'
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default MobileNav
