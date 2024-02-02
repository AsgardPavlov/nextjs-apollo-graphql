import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { getClient } from '@/lib/client'
import { Query, QueryFindUniqueObjectArgs } from '@/gql/types/graphql'
import { FIND_UNIQUE_OBJECT } from '@/gql/gqls'
import LeaveYourApplication from '@/sections/LeaveYourApplication'
import Slider from '@/components/sliders/Slider'
import ClientImage from '@/components/Image'

export default async function Blog({
  params: { lang, objectId }
}: {
  params: { lang: Locale; objectId: string }
}) {
  const locale = await getDictionary(lang)
  const { page } = locale

  const { data, loading } = await getClient().query<
    Query,
    QueryFindUniqueObjectArgs
  >({
    query: FIND_UNIQUE_OBJECT,
    variables: {
      where: { id: objectId }
    }
  })

  return (
    <>
      <div className='container flex flex-col gap-6 lg:mt-[90px] lg:gap-[60px]'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {page.objects.filters.objects.label}
        </h1>

        {data.findUniqueObject && (
          <>
            <div className='flex flex-col gap-6 lg:flex-row'>
              <div className='flex flex-col border-b-[0.5px] lg:w-2/5 lg:border-none'>
                <h2 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
                  {data.findUniqueObject.title}
                </h2>
                <p className='mb-[18px] mt-6 font-mono text-xs font-normal leading-[14px] tracking-wide lg:mb-6 lg:mt-[60px] lg:text-2xl lg:font-medium lg:leading-[30px] lg:tracking-wider'>
                  {data.findUniqueObject.description}
                </p>
                {[
                  data.findUniqueObject.address?.toUpperCase(),
                  `${page.objects.filters.square.label.toUpperCase()}: ${
                    data.findUniqueObject.space
                  } м2`,
                  `${page.objects.filters.bedrooms.title.toUpperCase()}: -`,
                  `${page.objects.filters.bathrooms.title.toUpperCase()}: ${
                    data.findUniqueObject.bathrooms
                  }`,
                  `${page.objects.filters.developer.toUpperCase()}: ${
                    data.findUniqueObject.developer
                  }`
                ].map(text => (
                  <p
                    key={text}
                    className='border-t-[0.5px] py-3 font-mono text-xs font-medium leading-[14px] tracking-wide lg:border-t lg:py-6 lg:text-2xl lg:leading-[30px] lg:tracking-wider'
                  >
                    {text}
                  </p>
                ))}
                <p className='hidden border-y-[0.5px] py-[30px] font-mono text-[54px] font-medium uppercase tracking-[3.24px] lg:flex lg:border-y'>
                  {lang === 'en'
                    ? `$${data.findUniqueObject.costUSD}`
                    : `${data.findUniqueObject.costRUB}₽`}
                </p>
              </div>
              <div className='flex flex-col lg:w-3/5'>
                <Slider
                  options={{
                    initial: 0,
                    slides: { perView: 1, spacing: 24 }
                  }}
                >
                  {data.findUniqueObject.images.map(img => (
                    <ClientImage
                      key={img}
                      className='keen-slider__slide flex h-[204px] w-full lg:h-[768px]'
                      src={img}
                      width='100%'
                      radius='none'
                      alt=''
                    />
                  ))}
                </Slider>

                <p className='border-b-[0.5px] py-3 text-right font-mono text-lg font-medium leading-[14px] tracking-wide lg:hidden'>
                  {lang === 'en'
                    ? `$${data.findUniqueObject.costUSD}`
                    : `${data.findUniqueObject.costRUB} ₽`}
                </p>
              </div>
            </div>
            {data.findUniqueObject.aboutImg && (
              <div className='mt-[60px] flex grid-cols-2 flex-col-reverse gap-6 lg:mt-[120px] lg:grid'>
                <img
                  src={data.findUniqueObject.aboutImg}
                  alt={data.findUniqueObject.title}
                  className='w-full'
                />
                <div className='flex flex-col gap-6 lg:gap-[36px]'>
                  <h2 className='font-sans text-lg font-bold uppercase tracking-wide text-teal-900 dark:text-white lg:text-3xl lg:tracking-widest'>
                    {page.objects.aboutObject}
                  </h2>
                  <p className='font-mono text-xs font-normal leading-[14px] tracking-wide lg:text-2xl lg:font-medium lg:leading-[30px] lg:tracking-wider'>
                    {data.findUniqueObject.about}
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <LeaveYourApplication locale={locale} />
    </>
  )
}
