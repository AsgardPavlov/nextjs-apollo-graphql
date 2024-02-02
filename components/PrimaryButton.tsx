'use client'

import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Spinner } from '@nextui-org/react'

type MotionButtonProps = React.ComponentProps<typeof motion.button>

interface PrimaryButtonProps
  extends Omit<MotionButtonProps, 'whileTap' | 'tabIndex' | 'onClick'> {
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  link?: string
  loading?: boolean
}

const PrimaryButton = ({
  children,
  className,
  onClick,
  link,
  type = 'button',
  loading,
  disabled,
  ...motionButtonProps
}: PrimaryButtonProps) => {
  const router = useRouter()

  const disabledStyles = 'opacity-50'

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`peer relative flex h-[30px] max-w-[354px] items-center border-b-[0.5px] pb-3 font-sans text-xs font-bold uppercase lg:h-[60px] lg:border-b-[1.5px] lg:pb-0 lg:text-xl lg:tracking-[3.60px]
      ${className && className}
      ${(loading || disabled) && disabledStyles}
      `}
      type={type}
      tabIndex={0}
      onClick={link ? () => router.push(link) : onClick}
      disabled={disabled || loading}
      {...motionButtonProps}
    >
      {loading && <Spinner size='sm' color='default' className='mr-3' />}

      {children}

      <span className='absolute -bottom-[6.5px] -right-[4.5px] lg:-bottom-[8.5px]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='h-3 w-3 lg:h-4 lg:w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </span>
    </motion.button>
  )
}

export default PrimaryButton
