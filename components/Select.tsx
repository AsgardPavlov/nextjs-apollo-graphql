'use client'

import React from 'react'
import {
  Select as NextUISelect,
  SelectProps as NextUISelectProps
} from '@nextui-org/react'

export interface SelectProps extends Omit<NextUISelectProps, 'classNames'> {}

const Select = ({ ...inputProps }: SelectProps) => {
  return (
    <NextUISelect
      classNames={{
        base: 'font-mono',
        label: 'text-neutral-400 text-xs 2xl:text-sm font-medium uppercase mb-3'
      }}
      {...inputProps}
    />
  )
}

export default Select
