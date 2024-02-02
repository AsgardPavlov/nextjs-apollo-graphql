import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { getClient } from '@/lib/client'
import { Query, QueryFindUniqueBlogArgs } from '@/gql/types/graphql'
import { FIND_UNIQUE_BLOG } from '@/gql/gqls'
import dayjs from 'dayjs'
import BlogImage from '@/app/[lang]/blog/[blogId]/BlogImage'
import LeaveYourApplication from '@/sections/LeaveYourApplication/LeaveYourApplication'
import Slider from '@/components/sliders/Slider'
import { Image } from '@nextui-org/react'

export default async function Blog({
  params: { lang, blogId }
}: {
  params: { lang: Locale; blogId: string }
}) {
  const locale = await getDictionary(lang)
  const { page } = locale

  const { data } = await getClient().query<Query, QueryFindUniqueBlogArgs>({
    query: FIND_UNIQUE_BLOG,
    variables: {
      where: { id: blogId }
    }
  })

  return (
    <>
      <div className='container flex flex-col gap-3 lg:mt-[90px] lg:gap-[60px]'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {page.blog.title}
        </h1>

        {data.findUniqueBlog && (
          <>
            <div className='flex justify-between border-t pt-3 font-mono text-[10px] font-medium uppercase tracking-[2.52px] lg:pt-6 lg:text-sm'>
              <div className='flex flex-col gap-3'>
                <p className='uppercase'>{page.blog.topic}</p>
                <h2 className='font-sans text-base font-normal uppercase tracking-widest lg:text-5xl lg:tracking-[5.76px]'>
                  {data.findUniqueBlog.title}
                </h2>
              </div>
              <div className='flex flex-col gap-3 text-right'>
                <p className='uppercase'>
                  {dayjs(data.findUniqueBlog.createdAt).format('DD/MM/YYYY')}
                </p>
              </div>
            </div>
            <BlogImage
              img={data.findUniqueBlog.img}
              title={data.findUniqueBlog.title}
              className='h-[204px] w-full bg-zinc-300 lg:h-[780px] '
            />
            <div className='flex flex-col gap-3 lg:flex-row lg:gap-6'>
              <h3 className='font-sans text-base font-normal uppercase leading-[30px] tracking-wide lg:w-1/3 lg:text-3xl lg:tracking-widest'>
                {data.findUniqueBlog.title}
              </h3>
              <p className='font-mono text-[10px] font-medium leading-[10px] tracking-wide lg:w-2/3 lg:text-2xl lg:leading-[30px] lg:tracking-wider'>
                {data.findUniqueBlog.description}
              </p>
            </div>

            <Slider
              options={{
                initial: 0,
                slides: { perView: 1.5, spacing: 12 }
              }}
            >
              {data.findUniqueBlog.images.map((img, i) => (
                <BlogImage
                  key={i}
                  img={img}
                  title='img'
                  className='keen-slider__slide flex h-[180px] lg:h-[540px]'
                />
              ))}
            </Slider>
          </>
        )}
      </div>

      <LeaveYourApplication locale={locale} />
    </>
  )
}
