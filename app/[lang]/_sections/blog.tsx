import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { getClient } from '@/lib/client'
import { Query, QueryFindManyBlogArgs } from '@/gql/types/graphql'
import { FIND_MANY_BLOG } from '@/gql/gqls'
import BlogCard from '@/components/BlogCard'
import Slider from '@/components/sliders/Slider'

export default async function Blog({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page, common } = await getDictionary(lang)
  const { data } = await getClient().query<Query, QueryFindManyBlogArgs>({
    query: FIND_MANY_BLOG
  })

  if (!data.findManyBlog) return null

  return (
    <div className='container mt-[60px] flex flex-col gap-[60px] lg:mt-[180px]'>
      <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
        {page.blog.title}
      </h1>

      {!!data.findManyBlog && (
        <Slider
          viewAllLink={`/${lang}/blog`}
          viewAll={common.viewAll}
          options={{
            initial: 0,
            breakpoints: {
              '(min-width: 200px)': {
                slides: { perView: 1, spacing: 12 }
              },
              '(min-width: 1000px)': {
                slides: { perView: 3, spacing: 24 }
              }
            },
            slides: { perView: 1 }
          }}
        >
          {data.findManyBlog.map(blog => (
            <BlogCard
              link={`/${lang}/blog/${blog.id}`}
              key={blog.id}
              blog={blog}
            />
          ))}
        </Slider>
      )}
    </div>
  )
}
