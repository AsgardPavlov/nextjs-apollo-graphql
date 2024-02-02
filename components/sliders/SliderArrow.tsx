'use client'

import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface PrimaryButtonProps {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  disabled: boolean
  dir: 'right' | 'left'
}

const SliderArrow = ({
  className,
  onClick,
  disabled,
  dir
}: PrimaryButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`
      arrow peer relative
      flex h-full w-full max-w-[120px] items-center text-xl 
      font-bold uppercase tracking-[3.60px]
      ${className && className}
      ${disabled && 'arrow--disabled'}
      ${dir === 'right' && 'arrow-right'}
      ${dir === 'left' && 'arrow-left'}
      `}
      type='button'
      tabIndex={0}
      onClick={onClick}
    >
      <div className='h-[1.5px] w-full bg-emerald-950 dark:bg-white' />
      {dir === 'left' && (
        <span
          className='absolute -left-[6px] top-[50%]'
          style={{
            transform: 'translate(0, -50%)'
          }}
        >
          <ChevronLeftIcon className='h-4 w-4' strokeWidth={2} />
        </span>
      )}
      {dir === 'right' && (
        <span
          className='absolute -right-[6px] top-[50%]'
          style={{
            transform: 'translate(0, -50%)'
          }}
        >
          <ChevronRightIcon className='h-4 w-4' strokeWidth={2} />
        </span>
      )}
    </motion.button>
  )
}

export default SliderArrow
