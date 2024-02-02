import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Hero({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page, common } = await getDictionary(lang)

  return (
    <div className='container flex grid-cols-2 flex-col gap-6 lg:mt-[90px] lg:grid lg:gap-0'>
      <div className='flex flex-col gap-6 border-b lg:mr-24 lg:gap-[60px]'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {page.services.hero.title}
        </h1>
        <p className='hidden whitespace-pre-wrap font-mono text-lg font-medium leading-normal tracking-widest lg:flex'>
          {page.services.hero.description}
        </p>

        <div className='h-60 bg-zinc-300 lg:hidden' />
      </div>

      <div className='hidden h-[600px] bg-zinc-300 lg:flex' />

      <p className='whitespace-pre-wrap border-b-[0.5px] pb-[18px] font-mono text-xs font-normal leading-[14px] tracking-wide lg:hidden'>
        {page.services.hero.description}
      </p>
    </div>
  )
}
