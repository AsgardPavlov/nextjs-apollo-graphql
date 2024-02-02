import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import StatisticItems from '@/components/StatisticItems'
import Reviews from '@/sections/Reviews'
import LeaveYourApplication from '@/sections/LeaveYourApplication'
import Image from 'next/image'
import SimplicityVerticalImage from '@/public/page/about/simplicity-vertical.jpeg'
import SimplicityHorizontalImage from '@/public/page/about/simplicity-horizontal.jpg'
import HumanityVerticalImage from '@/public/page/about/humanity-vertical.jpeg'
import HumanityHorizontalImage from '@/public/page/about/humanity-horizontal.jpg'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const locale = await getDictionary(lang)
  const { page } = locale

  return (
    <>
      <div className='container flex gap-6 lg:mt-[90px]'>
        <div className='flex flex-col justify-between gap-6 lg:w-3/5 lg:gap-0'>
          <div className='flex flex-col gap-6'>
            <h1 className='max-w-[700px] font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
              {page.about.hero.title}
            </h1>
          </div>

          <div className='ml-auto grid grid-cols-2 gap-3 lg:mt-16 lg:flex lg:w-3/4 lg:flex-col lg:gap-[90px]'>
            <div className='flex flex-col justify-end gap-3 lg:justify-start lg:gap-6'>
              <h2 className='font-sans text-xs font-bold uppercase tracking-wider lg:text-2xl'>
                {page.about.hero.subtitle}
              </h2>
              <p className='whitespace-pre-wrap font-mono text-[10px] font-normal leading-normal tracking-widest lg:text-lg lg:font-medium'>
                {page.about.hero.description}
              </p>
            </div>
            <Image
              alt='humantiy-tuimaada-real-estate'
              src={HumanityHorizontalImage}
              className='h-[210px] bg-zinc-300 object-cover lg:h-[390px]'
            />
          </div>

          <Image
            alt='humantiy-tuimaada-real-estate'
            src={HumanityVerticalImage}
            className='h-[210px] bg-zinc-300 object-cover lg:hidden'
            style={{
              objectPosition: '25% 20%'
            }}
          />
        </div>

        <Image
          alt='humantiy-tuimaada-real-estate'
          src={HumanityVerticalImage}
          className='hidden max-h-[960px] w-2/5 bg-zinc-300 object-cover lg:flex'
        />
      </div>

      <div className='container my-6 flex flex-col gap-6 lg:my-32 lg:flex-row'>
        <Image
          alt='simplicity-tuimaada-real-estate'
          src={SimplicityVerticalImage}
          className='hidden max-h-[960px] bg-zinc-300 object-cover lg:flex lg:w-2/5'
        />

        <div className='flex flex-col justify-between lg:w-3/5'>
          <div className='ml-auto flex max-w-[580px] flex-col gap-3 lg:mb-[90px] lg:gap-6'>
            <h2 className='font-sans text-xs font-bold uppercase tracking-wider lg:text-2xl'>
              {page.about.simplicity.title}
            </h2>
            <p className='whitespace-pre-wrap font-mono text-[10px] font-medium leading-normal tracking-widest lg:text-lg'>
              {page.about.simplicity.description}
            </p>
          </div>

          <div className='mr-auto hidden w-3/4 flex-col lg:flex'>
            <Image
              alt='simplicity-tuimaada-real-estate'
              src={SimplicityHorizontalImage}
              className='h-[390px] bg-zinc-300 object-cover'
            />
          </div>
        </div>
      </div>

      <StatisticItems
        items={[
          page.about.statistic.clients,
          page.about.statistic.experience,
          page.about.statistic.licence,
          page.about.statistic.sales
        ]}
      />

      <Reviews params={{ lang }} />

      <LeaveYourApplication locale={locale} />
    </>
  )
}
