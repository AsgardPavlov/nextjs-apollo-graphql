'use client'

import { Image } from '@nextui-org/react'

export default function BlogImage({
  img,
  title,
  className = ''
}: {
  img: string
  title: string
  className?: string
}) {
  return (
    <Image
      className={`${className}`}
      width='100%'
      radius='none'
      src={img}
      alt={`${title}-img`}
    />
  )
}
