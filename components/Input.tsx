'use client'

import React from 'react'
import {
  Input as NextUIInput,
  InputProps as NextUIInputProps
} from '@nextui-org/react'

export interface Input extends Omit<NextUIInputProps, 'classNames'> {}

const Input = ({ ...inputProps }: Input) => {
  return (
    <NextUIInput
      classNames={{
        base: 'font-mono',
        label: 'text-neutral-400 text-xs 2xl:text-sm font-medium uppercase mb-3'
      }}
      {...inputProps}
    />
  )
}

export default Input
