import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Slider from '@/components/sliders/Slider'
import StarSolidIcon from '@/components/icons/StarSolidIcon'
import { getClient } from '@/lib/client'
import { FIND_MANY_REVIEW } from '@/gql/gqls'
import { Query, QueryFindManyReviewArgs, Review } from '@/gql/types/graphql'
import ReviewCard from '@/sections/Reviews/components/ReviewCard'

export default async function Reviews({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const locale = await getDictionary(lang)
  const { section } = locale

  const { data } = await getClient().query<Query, QueryFindManyReviewArgs>({
    query: FIND_MANY_REVIEW
  })

  return (
    <div className='container mt-[60px] flex flex-col gap-6	lg:mt-[90px] lg:gap-[60px]'>
      <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
        {section.reviews.title}
      </h1>
      {!!data.findManyReview && (
        <Slider
          options={{
            initial: 0,
            breakpoints: {
              '(min-width: 200px)': {
                slides: { perView: 1.3, spacing: 12 }
              },
              '(min-width: 1000px)': {
                slides: { perView: 4, spacing: 24 }
              }
            },
            slides: { perView: 1 }
          }}
        >
          {data.findManyReview.map(review => (
            <ReviewCard key={review.id} locale={locale} review={review} />
          ))}
        </Slider>
      )}
    </div>
  )
}
