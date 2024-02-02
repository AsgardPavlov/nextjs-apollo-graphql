import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import PrimaryButton from '@/components/PrimaryButton'
import EmarHorizontal from '@/public/page/home/emar-horizontal.png'
import EmarVertical from '@/public/page/home/emar-vertical.png'
import Image from 'next/image'

export default async function BestOffer({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page, common } = await getDictionary(lang)

  return (
    <div className='container flex gap-6 pt-[60px] lg:pt-32'>
      <div className='flex flex-col justify-between gap-6 lg:w-3/5 lg:gap-0'>
        <div className='grid grid-cols-2 flex-col gap-3 lg:flex lg:gap-6'>
          <h1 className='col-span-2 max-w-[700px] font-sans text-lg font-bold uppercase tracking-wide text-teal-900 dark:text-white lg:text-5xl lg:tracking-[2.88px]'>
            {page.home.bestOffer.title}
          </h1>
          <p
            className='flex h-full max-w-[580px] flex-col whitespace-pre-wrap
            font-mono text-[10px] font-medium leading-normal tracking-widest
            lg:h-auto lg:text-lg'
          >
            {page.home.bestOffer.description}

            <PrimaryButton className='mr-[46px] mt-auto lg:hidden'>
              {page.home.bestOffer.buttonTitle}
            </PrimaryButton>
          </p>
          <Image
            src={EmarVertical}
            alt='emar'
            className='h-[210px] bg-zinc-300 object-cover object-center lg:hidden'
          />
        </div>

        <div className='flex flex-col gap-[60px] lg:ml-auto lg:w-3/4'>
          <PrimaryButton className='hidden lg:flex'>
            {page.home.bestOffer.buttonTitle}
          </PrimaryButton>
          <Image
            src={EmarHorizontal}
            alt='emar'
            className='h-[210px] bg-zinc-300 object-cover object-center lg:h-[390px]'
          />
        </div>
      </div>

      <Image
        src={EmarVertical}
        alt='emar'
        className='hidden h-[960px] w-2/5 bg-zinc-300 object-cover object-center lg:flex'
      />
    </div>
  )
}
