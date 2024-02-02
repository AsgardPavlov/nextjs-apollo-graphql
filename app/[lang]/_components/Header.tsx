import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './LocaleSwitcher'
import ThemeButton from '@/app/[lang]/_components/ThemeButton'
import HeaderLogo from '@/app/[lang]/_components/HeaderLogo'
import MobileNav from './MobileNav'
export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  const items = [
    {
      label: navigation.services,
      path: 'services'
    },
    {
      label: navigation.objects,
      path: 'objects'
    },
    {
      label: navigation.blog,
      path: 'blog'
    },
    {
      label: navigation.contacts,
      path: 'contacts'
    },
    {
      label: navigation.about,
      path: 'about'
    },
    {
      label: navigation.reviews,
      path: 'reviews'
    }
  ]

  return (
    <header className='container flex flex-col'>
      <nav className='hidden grid-cols-6 items-center py-7 lg:grid'>
        <ThemeButton />
        <HeaderLogo />
        <LocaleSwitcher />
      </nav>
      <MobileNav items={items} lang={lang} />
      <ul className='hidden h-[90px] grid-cols-6 divide-x border-y-[0.5px] lg:grid'>
        {items.map(({ label, path }) => (
          <li key={path}>
            <Link
              href={`/${lang}/${path}`}
              className='flex h-full w-full items-center justify-center p-[15px] font-sans text-2xl'
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
