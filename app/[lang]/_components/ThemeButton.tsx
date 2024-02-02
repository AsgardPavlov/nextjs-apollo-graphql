'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='hover:bg-zinc-100 dark:hover:bg-zinc-700 mr-auto flex
        items-center justify-center rounded-lg p-2 transition-colors lg:col-span-2'
      onClick={handleToggleTheme}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='text-orange-300 h-6 w-6' />
      ) : (
        <MoonIcon className='text-slate-800 h-6 w-6' />
      )}
    </button>
  )
}

export default ThemeButton
