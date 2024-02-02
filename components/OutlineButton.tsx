'use client'

import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface OutlineButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  link?: string
  isLightMode?: boolean
}

const OutlineButton = ({
  children,
  className = '',
  onClick,
  link,
  isLightMode
}: OutlineButtonProps) => {
  const router = useRouter()

  const colorStyles = isLightMode
    ? 'border-white text-white'
    : 'border-neutral-400 text-neutral-400'

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${colorStyles} group flex justify-center border px-3.5 py-2.5 
      text-center font-sans text-xs font-normal hover:border-stone-500 
      lg:px-5 lg:py-3.5 lg:text-2xl ${className}`}
      type='button'
      tabIndex={0}
      onClick={link ? () => router.push(link) : onClick}
    >
      <span
        className='group-hover:bg-gradient-to-r group-hover:from-stone-500
          group-hover:via-orange-200 group-hover:to-stone-500
          group-hover:bg-clip-text group-hover:text-transparent'
      >
        {children}
      </span>
    </motion.button>
  )
}

export default OutlineButton
