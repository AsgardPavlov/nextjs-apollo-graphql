import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Items({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page, common } = await getDictionary(lang)

  return (
    <div className='container mb-[60px] mt-[60px] flex grid-cols-2 flex-col gap-6 lg:mb-60 lg:mt-[120px] lg:grid lg:gap-0'>
      <div className='flex flex-col gap-6 lg:mr-24 lg:gap-[60px] lg:border-b'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {page.services.processes.title}
        </h1>
        <p className='font-mono text-xs font-normal leading-normal tracking-widest lg:text-lg lg:font-medium'>
          {page.services.processes.description}
        </p>

        <div className='mt-auto hidden h-[780px] bg-zinc-300 lg:flex' />
      </div>

      <div className='flex flex-col gap-[30px] lg:gap-12'>
        {page.services.processes.items.map(({ label, description }, index) => (
          <div
            key={label}
            className='flex flex-col gap-3 border-b-[0.5px] pb-6 lg:gap-6 lg:border-b-1'
          >
            <h4 className='font-sans text-xs font-bold uppercase tracking-widest lg:text-3xl'>
              {label}
            </h4>
            <div className='flex justify-between gap-2 lg:gap-0'>
              <span className='mr-8 font-sans text-lg  font-bold uppercase tracking-wide lg:mr-0 lg:text-[42px] lg:tracking-[2.52px]'>
                {index + 1}
              </span>
              <p className='max-w-[480px] font-mono text-[10px] font-medium leading-normal tracking-widest lg:text-lg'>
                {description}
              </p>
            </div>
          </div>
        ))}

        <div className='h-60 bg-zinc-300 lg:hidden' />
      </div>
    </div>
  )
}
