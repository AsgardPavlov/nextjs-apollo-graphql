import Image from 'next/image'
import WomenImage from '@/public/page/home/women.jpeg'
import MenImage from '@/public/page/home/men.jpeg'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page, common } = await getDictionary(lang)

  return (
    <div className='container grid grid-cols-2 gap-6 pb-[60px] pt-[66px] lg:flex lg:pb-44 lg:pt-32'>
      <div className='flex flex-col gap-x-1.5 gap-y-3 lg:w-2/5 lg:gap-6'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {page.home.about.title}
        </h1>
        <p className='font-mono text-[10px] font-medium leading-normal tracking-widest lg:text-lg'>
          {page.home.about.description}
        </p>
        <Image
          src={MenImage}
          alt='buildings'
          className='mt-auto object-cover'
        />
      </div>
      <div className='flex flex-col gap-[60px] lg:w-3/5	lg:gap-[216px]'>
        <div className='flex flex-col gap-6 lg:ml-auto lg:w-fit lg:gap-[60px]'>
          <Image
            src={WomenImage}
            alt='women'
            className='h-[157px] w-auto max-w-[581px] bg-zinc-300 object-cover lg:h-[420px]'
          />
          <h2 className='mr-10 max-w-[540px] font-sans text-xs font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
            {page.home.about.tagline}
          </h2>
        </div>
        <p className='max-w-[581px] font-mono text-[10px] font-medium leading-normal tracking-widest lg:text-lg'>
          {page.home.about.taglineDescription}
        </p>
      </div>
    </div>
  )
}
