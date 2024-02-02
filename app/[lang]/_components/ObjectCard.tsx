'use client'

import { Object } from '@/gql/types/graphql'
import { HomeIcon, MapPinIcon, ScanIcon } from 'lucide-react'
import { Image } from '@nextui-org/react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ObjectCard = ({
  link,
  object,
  cost
}: {
  link: string
  object: Object
  cost: string
}) => {
  const iconStyles: string =
    'h-3 w-3 text-emerald-950 dark:text-white group-hover:text-white lg:h-6 lg:w-6'

  const infoItemTextStyles: string =
    'text-emerald-950 group-hover:text-white dark:text-white font-mono text-[10px] font-normal ' +
    'tracking-widest lg:text-sm'

  const itemStyles: string = 'flex items-center gap-1.5'

  return (
    <Link
      href={link}
      className='keen-slider__slide group flex h-min flex-col border-1
      border-emerald-950 hover:border-stone-500 dark:border-white
      dark:hover:border-stone-500'
    >
      {object.aboutImg || !!object.images.length ? (
        <Image
          isZoomed
          src={object.aboutImg || object.images[0]}
          className='h-[150px] w-full lg:h-[270px]'
          classNames={{
            img: 'h-[150px] w-full lg:h-[270px]',
            wrapper: 'h-[150px] w-full lg:h-[270px]',
            zoomedWrapper: 'h-[150px] w-full lg:h-[270px]',
            blurredImg: 'h-[150px] w-full lg:h-[270px]'
          }}
          fallbackSrc={
            <div className='h-[150px] w-full bg-zinc-300 lg:h-[270px]' />
          }
          width='100%'
          radius='none'
          alt={object.title}
        />
      ) : (
        <div className='h-[150px] w-full bg-zinc-300 lg:h-[270px]' />
      )}
      <div className='flex h-full flex-col gap-3 pt-3 group-hover:bg-teal-900 dark:group-hover:bg-emerald-950'>
        <h3 className='px-3 font-mono text-sm font-medium uppercase tracking-[2.88px] text-emerald-950 group-hover:text-white dark:text-white lg:text-2xl'>
          {object.title}
        </h3>

        <div className='flex flex-col gap-1.5 px-3'>
          <div className={itemStyles}>
            <MapPinIcon className={iconStyles} />
            <p className={infoItemTextStyles}>{object.address}</p>
          </div>

          <div className={itemStyles}>
            <HomeIcon className={iconStyles} />
            <p className={infoItemTextStyles}>{object.type}</p>
          </div>

          <div className={itemStyles}>
            <ScanIcon className={iconStyles} />
            <p className={infoItemTextStyles}>{`${object.space} м2`}</p>
          </div>
        </div>

        <div className='mx-2 h-[1px] bg-emerald-950 group-hover:bg-stone-500 dark:bg-white' />

        <p className='px-3 font-mono text-sm font-medium uppercase tracking-widest text-emerald-950 group-hover:text-white dark:text-white lg:text-[10px] lg:text-lg'>
          {cost}
        </p>

        <div className='grid grid-cols-3 items-center divide-x divide-emerald-950 border-t border-emerald-950 group-hover:divide-stone-500 group-hover:border-stone-500 dark:divide-white dark:border-white'>
          <div className='flex justify-center py-1.5'>
            <PhoneIcon className={iconStyles} />
          </div>
          <div className='flex justify-center py-1.5'>
            <EnvelopeIcon className={iconStyles} />
          </div>
          <div className='flex justify-center py-1.5'>
            <svg
              className={`${iconStyles} fill-emerald-950 group-hover:fill-white dark:fill-white`}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              // fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='Outline/Brands/Whatsapp'>
                <g id='Icon'>
                  <path
                    d='M8.88583 7.16985C9.06879 7.17475 9.27163 7.18465 9.46461 7.61303C9.59259 7.89821 9.80817 8.42321 9.98378 8.85087C10.1204 9.18366 10.2329 9.45751 10.261 9.51356C10.3253 9.64156 10.3649 9.78926 10.2808 9.96156C10.2709 9.98188 10.2615 10.0013 10.2525 10.02C10.1851 10.16 10.137 10.2597 10.0236 10.3899C9.97696 10.4435 9.92837 10.5022 9.87996 10.5607C9.79482 10.6636 9.71023 10.7658 9.63772 10.838C9.50912 10.9659 9.37551 11.1039 9.5239 11.3599C9.67238 11.6159 10.1918 12.4579 10.9586 13.1373C11.7829 13.8712 12.4997 14.1805 12.862 14.3368C12.9324 14.3672 12.9894 14.3918 13.0312 14.4126C13.2885 14.5406 13.4418 14.5209 13.5902 14.3486C13.7387 14.1762 14.2333 13.6001 14.4065 13.3441C14.5747 13.0881 14.7478 13.1275 14.9853 13.2161C15.2227 13.3047 16.4891 13.9251 16.7463 14.0531C16.7971 14.0784 16.8447 14.1012 16.8887 14.1224C17.0677 14.2082 17.1894 14.2665 17.2409 14.3535C17.3052 14.4618 17.3052 14.9739 17.0926 15.5746C16.8749 16.1752 15.8262 16.7513 15.3513 16.7956C15.3063 16.7999 15.2616 16.8053 15.2155 16.8108C14.7803 16.8635 14.2278 16.9303 12.2595 16.1555C9.83412 15.2018 8.2331 12.8354 7.90941 12.357C7.88386 12.3192 7.86626 12.2932 7.85685 12.2806L7.85138 12.2733C7.70411 12.0762 6.80316 10.8707 6.80316 9.62685C6.80316 8.43682 7.38938 7.81726 7.65677 7.53467C7.67372 7.51676 7.68938 7.50021 7.70354 7.48494C7.94094 7.22895 8.21802 7.16495 8.39113 7.16495C8.56433 7.16495 8.73744 7.16495 8.88583 7.16985Z'
                    // fill='white'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2.18406 21.3314C2.10224 21.6284 2.37273 21.9025 2.67078 21.8247L7.27812 20.6213C8.73247 21.409 10.3699 21.8275 12.037 21.8275H12.0419C17.5279 21.8275 21.9999 17.3815 21.9999 11.9163C21.9999 9.26735 20.9659 6.77594 19.0862 4.90491C17.2064 3.03397 14.7082 2 12.0419 2C6.55595 2 2.08399 6.44605 2.08399 11.9114C2.08336 13.65 2.54228 15.3582 3.41467 16.8645L2.18406 21.3314ZM4.86079 17.2629C4.96761 16.8752 4.91425 16.4608 4.71269 16.1127C3.97253 14.8348 3.58346 13.3855 3.58399 11.9114C3.58399 7.28158 7.37725 3.5 12.0419 3.5C14.3118 3.5 16.4294 4.37698 18.028 5.96805C19.6247 7.55737 20.4999 9.66611 20.4999 11.9163C20.4999 16.5459 16.7066 20.3275 12.0419 20.3275H12.037C10.6205 20.3275 9.22851 19.9718 7.99254 19.3023C7.65802 19.1211 7.26714 19.0738 6.89904 19.17L4.13664 19.8915L4.86079 17.2629Z'
                    // fill='white'
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ObjectCard
