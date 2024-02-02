import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import TreLogo from '@/public/logos/tre-horizontal-without-logo.svg'
import Link from 'next/link'
import {
  dubaiPhoneNumber,
  email,
  formatPhoneToLink,
  russianPhoneNumber
} from '@/utils/contacts-helper'

export default async function Footer({ lang }: { lang: Locale }) {
  const { navigation, apartmentType, common } = await getDictionary(lang)

  const mainNavigationItems = [
    { label: navigation.about, path: 'about' },
    { label: navigation.services, path: 'services' },
    { label: navigation.objects, path: 'objects' },
    { label: navigation.blog, path: 'blog' },
    { label: navigation.contacts, path: 'contacts' }
  ]

  const dubaiNavigationItems = [
    { label: common.dubai, path: 'objects/dubai' },
    { label: apartmentType.apartments.label, path: 'objects/dubai/apartments' },
    { label: apartmentType.townhouses.label, path: 'objects/dubai/townhouses' },
    { label: apartmentType.villas.label, path: 'objects/dubai/villas' },
    { label: apartmentType.plots.label, path: 'objects/dubai/plots' }
  ]

  const moscowNavigationItems = [
    { label: common.moscow, path: 'objects/moscow' },
    {
      label: apartmentType.apartments.label,
      path: 'objects/moscow/apartments'
    },
    {
      label: apartmentType.townhouses.label,
      path: 'objects/moscow/townhouses'
    },
    { label: apartmentType.villas.label, path: 'objects/moscow/villas' },
    { label: apartmentType.plots.label, path: 'objects/moscow/plots' }
  ]

  const navItemsContainerClass =
    'flex flex-col justify-between gap-3 lg:gap-[30px]'
  const navItemLinkClass =
    'font-mono lg:text-xl text-xs font-medium uppercase tracking-wide lg:tracking-[3.60px] text-white'

  return (
    <footer className='mt-[60px] bg-teal-900 dark:bg-transparent lg:mt-32 lg:border-t-[1px] lg:pb-60 lg:pt-32'>
      <div className='container grid grid-cols-2 gap-x-3 gap-y-6 border-t-[0.5px] pb-[60px] pt-[60px] lg:grid-cols-5 lg:gap-x-6 lg:border-none lg:pb-0 lg:pt-0'>
        <div className='flex flex-col justify-between'>
          <Image
            src={TreLogo}
            alt='tre-big-logo'
            className='flex h-[30px] w-min object-contain light:fill-teal-900 lg:h-min lg:w-auto'
          />

          <div className='flex flex-col gap-0.5	lg:gap-1.5'>
            <Link
              href={formatPhoneToLink(russianPhoneNumber)}
              className='font-mono text-[10px] uppercase tracking-wide text-white lg:text-sm'
            >
              {russianPhoneNumber}
            </Link>
            <p className='font-mono text-[10px] tracking-[2.52px] text-stone-300 lg:text-sm'>
              {`(${common.russia})`}
            </p>
            <Link
              href={formatPhoneToLink(dubaiPhoneNumber)}
              className='font-mono text-[10px] uppercase tracking-wide text-white lg:text-sm'
            >
              {dubaiPhoneNumber}
            </Link>
            <p className='font-mono text-[10px] tracking-[2.52px] text-stone-300 lg:text-sm'>
              {`(${common.dubai})`}
            </p>
            <Link
              href={`mailto:${email}`}
              className='font-mono text-[10px] uppercase tracking-wide text-white lg:text-sm'
            >
              {email}
            </Link>
          </div>
        </div>

        <div className={`${navItemsContainerClass} lg:col-start-3`}>
          {mainNavigationItems.map(({ label, path }) => (
            <Link
              key={path}
              href={`/${lang}/${path}`}
              className={`${navItemLinkClass} text-right lg:text-left`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className={`${navItemsContainerClass}`}>
          {dubaiNavigationItems.map(({ label, path }) => (
            <Link
              key={path}
              href={`/${lang}/${path}`}
              className={`${navItemLinkClass}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className={`${navItemsContainerClass}`}>
          {moscowNavigationItems.map(({ label, path }) => (
            <Link
              key={path}
              href={`/${lang}/${path}`}
              className={`${navItemLinkClass} text-right lg:text-left`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
