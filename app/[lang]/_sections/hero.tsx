import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import PrimaryButton from '@/components/PrimaryButton'
import HeroLogo from '@/app/[lang]/_components/HeroLogo'
import OutlineButton from '@/components/OutlineButton'

export default async function Hero({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page, common } = await getDictionary(lang)

  return (
    <div className='container flex max-h-[966px] grid-cols-2 grid-rows-3 flex-col gap-y-10 lg:grid lg:h-[calc(100vh-209px)] lg:min-h-[550px] lg:divide-x'>
      <div className='row-start-2 mr-3 flex flex-col justify-center gap-3'>
        <div className='flex items-center gap-4'>
          <HeroLogo className='flex max-h-[120px] w-[75%] object-contain light:fill-teal-900' />
          <div className='h-[0.5px] w-[25%] bg-teal-900 dark:bg-white lg:h-[2px]' />
        </div>
        <div className='grid grid-cols-2 items-center gap-2 lg:gap-0'>
          <div className='h-[0.5px] bg-teal-900 dark:bg-white lg:mr-8 lg:h-[2px]' />
          <p className='whitespace-pre-line text-right font-mono text-[8px] font-medium uppercase tracking-[3.24px] lg:text-lg '>
            {page.home.hero.agency}
          </p>
        </div>
      </div>
      <div className='row-start-3 hidden flex-col justify-between border-none lg:flex'>
        <div className='grid grid-cols-2'>
          <PrimaryButton>{common.contact}</PrimaryButton>
        </div>
        <div className='grid grid-cols-2'>
          <div className='col-start-2 pb-3 pr-3 lg:border-b-[1px]'>
            <p className='ml-auto flex h-[72px] w-60 items-center whitespace-pre-line text-left font-mono text-lg font-medium uppercase tracking-[3.24px]'>
              {page.home.hero.experts}
            </p>
          </div>
        </div>
      </div>
      <div className='relative row-span-3 overflow-hidden lg:border-b-[0.5px]'>
        <div className='absolute -bottom-1 -left-1 -right-1 -top-1 z-10 flex items-end justify-center bg-gradient-to-t from-black to-transparent'>
          <OutlineButton className='mb-[60px]' link='objects' isLightMode>
            {page.home.hero.outlineButton.toUpperCase()}
          </OutlineButton>
        </div>
        <video
          className='row-span-3 h-[520px] w-full scale-105 object-none lg:h-full xl:scale-125'
          autoPlay
          loop
          muted
          src={require('@/public/page/home/promo.mp4')}
        />
      </div>
      <div className='grid grid-cols-2 items-end justify-between border-none lg:hidden'>
        <PrimaryButton className='mr-[46px]'>{common.contact}</PrimaryButton>
        <div className='flex border-b-[0.5px] pb-3'>
          <p className='text-right font-mono text-[10px] font-medium uppercase'>
            {page.home.hero.experts}
          </p>
        </div>
      </div>
    </div>
  )
}
