'use client'

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import ObjectCard from '@/app/[lang]/_components/ObjectCard'
import { getClient } from '@/lib/client'
import { Query, QueryFindManyObjectArgs } from '@/gql/types/graphql'
import { FIND_MANY_OBJECT } from '@/gql/gqls'
import Slider from '@/components/sliders/Slider'
import { useQuery } from '@apollo/client'

export const dynamic = 'force-dynamic'

export default function NewObjects({
  params: { lang },
  locale
}: {
  params: { lang: Locale }
  locale: Awaited<ReturnType<typeof getDictionary>>
}) {
  const { page, common, section } = locale

  const client = getClient()
  const { data } = useQuery<Query, QueryFindManyObjectArgs>(FIND_MANY_OBJECT, {
    client: client,
    variables: {
      take: 3
    },
    fetchPolicy: 'no-cache'
  })

  const newObjectLocations = [
    {
      label: common.dubai,
      path: 'objects/dubai/'
    },
    {
      label: common.moscow,
      path: 'objects/moscow/'
    }
  ]

  return (
    <div className='container mt-[60px] flex flex-col gap-6 lg:mt-[180px] lg:gap-[60px]'>
      <div className='flex justify-between'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {page.home.newObjects}
        </h1>

        <div className='col-span-2 ml-auto hidden py-[15px] lg:flex'>
          <ul className='flex divide-x'>
            {newObjectLocations.map(({ label, path }) => (
              <li key={label} className='px-1.5'>
                <Link href={path} className='font-sans text-2xl'>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!!data?.findManyObject && (
        <Slider
          viewAllLink={`/${lang}/objects`}
          viewAll={section.reviews.viewAll}
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
          {data.findManyObject.map(object => (
            <ObjectCard
              key={object.id}
              link={`/${lang}/objects/${object.id}`}
              object={object}
              cost={`${common.cost}: ${
                lang === 'en' ? `$${object.costUSD}` : `${object.costRUB}РУБ`
              }`}
            />
          ))}
        </Slider>
      )}
    </div>
  )
}
