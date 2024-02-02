import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import BlogCard from '@/components/BlogCard'
import LeaveYourApplication from '@/sections/LeaveYourApplication'
import { getClient } from '@/lib/client'
import { Query, QueryFindManyBlogArgs } from '@/gql/types/graphql'
import { FIND_MANY_BLOG } from '@/gql/gqls'

export default async function Blog({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const locale = await getDictionary(lang)
  const { page } = locale

  const { data } = await getClient().query<Query, QueryFindManyBlogArgs>({
    query: FIND_MANY_BLOG
  })

  return (
    <>
      <div className='container flex flex-col gap-6 lg:mt-[90px] lg:gap-[60px]'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {page.blog.title}
        </h1>

        {data.findManyBlog && (
          <div className='flex grid-cols-3 grid-rows-3 flex-col gap-x-6 gap-y-6 lg:grid lg:gap-y-[60px]'>
            {data.findManyBlog.map((blog, i) => (
              <BlogCard
                link={`/${lang}/blog/${blog.id}`}
                classNames={{
                  main: (i === 0 && 'col-span-2 row-span-2') || undefined,
                  img: (i === 0 && 'h-full') || undefined
                }}
                key={i}
                blog={blog}
              />
            ))}
          </div>
        )}
      </div>

      <LeaveYourApplication locale={locale} />
    </>
  )
}
