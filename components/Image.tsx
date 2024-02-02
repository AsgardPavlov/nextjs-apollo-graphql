'use client'

import { Image, ImageProps } from '@nextui-org/react'

export default function ClientImage({ ...imgProps }: ImageProps) {
  return <Image {...imgProps} />
}
