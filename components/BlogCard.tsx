'use client'

import { Blog } from '@/gql/types/graphql'
import dayjs from 'dayjs'
import { Image } from '@nextui-org/react'
import Link from 'next/link'

const BlogCard = ({
  link,
  blog,
  classNames = {
    main: '',
    img: ''
  }
}: {
  link: string
  blog: Blog
  classNames?: {
    main?: string
    img?: string
  }
}) => {
  return (
    <Link
      href={link}
      className={`keen-slider__slide group flex flex-col border-t-[0.5px] hover:border-stone-500 lg:h-full lg:border-t-1 
        ${classNames.main}`}
    >
      <div className='flex flex-col gap-3 py-6'>
        <div className='flex justify-between font-mono text-[10px] font-medium uppercase tracking-[2.52px] lg:text-sm'>
          <p
            className='group-hover:bg-gradient-to-r group-hover:from-stone-500
                group-hover:via-orange-200 group-hover:to-stone-500
                group-hover:bg-clip-text group-hover:text-transparent'
          >
            {blog.title}
          </p>
          <p
            className='group-hover:bg-gradient-to-r group-hover:from-stone-500
                group-hover:via-orange-200 group-hover:to-stone-500
                group-hover:bg-clip-text group-hover:text-transparent'
          >
            {dayjs(blog.createdAt).format('DD/MM/YYYY')}
          </p>
        </div>

        <h3
          className='line-clamp-1 font-sans text-base font-normal uppercase tracking-[2.88px]
            group-hover:bg-gradient-to-r group-hover:from-stone-500
            group-hover:via-orange-200 group-hover:to-stone-500
            group-hover:bg-clip-text group-hover:text-transparent lg:text-2xl'
        >
          {blog.description}
        </h3>
      </div>

      {blog.img ? (
        <Image
          isZoomed
          src={blog.img}
          className={`min-h-[204px] w-full lg:min-h-[300px] ${classNames.img}`}
          alt={blog.title}
          width='100%'
          height='100%'
          radius='none'
          classNames={{
            wrapper: 'h-full',
            img: 'h-full',
            zoomedWrapper: 'h-full'
          }}
        />
      ) : (
        <div
          className={`min-h-[204px] w-full bg-zinc-300 lg:min-h-[300px] ${classNames.img}`}
        />
      )}
    </Link>
  )
}

export default BlogCard
