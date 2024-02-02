'use client'

import React from 'react'
import { extendVariants, Input } from '@nextui-org/react'

const InputButton = extendVariants(Input, {
  variants: {
    // <- modify/add variants
    color: {
      default: {
        base: 'font-mono',
        label:
          'text-neutral-400 text-xs 2xl:text-sm font-medium uppercase mb-3',
        input: 'text-left uppercase',
        innerWrapper: '!text-neutral-400'
      },
      gradient: {
        base: 'font-mono',
        label:
          'text-neutral-400 text-xs 2xl:text-sm font-medium uppercase mb-3',
        input: 'text-left uppercase',
        innerWrapper:
          'bg-gradient-to-r from-stone-500 via-orange-200 to-stone-500 bg-clip-text text-transparent',
        inputWrapper:
          'after:w-full after:bg-gradient-to-r after:from-stone-500 after:via-orange-200 after:to-stone-500'
      },
      stone: {
        // <- add a new color variant
        inputWrapper: [
          // <- Select wrapper slot
          'bg-zinc-100',
          'border',
          'shadow',
          'transition-colors',
          'focus-within:bg-zinc-100',
          'data-[hover=true]:border-zinc-600',
          'data-[hover=true]:bg-zinc-100',
          'group-data-[focus=true]:border-zinc-600',
          // dark theme
          'dark:bg-zinc-900',
          'dark:border-zinc-800',
          'dark:data-[hover=true]:bg-zinc-900',
          'dark:focus-within:bg-zinc-900'
        ],
        input: [
          // <- Select element slot
          'text-zinc-800',
          'placeholder:text-zinc-600',
          // dark theme
          'dark:text-zinc-400',
          'dark:placeholder:text-zinc-600'
        ]
      }
    }
  },
  defaultVariants: {
    color: 'default'
  }
})

export default InputButton
