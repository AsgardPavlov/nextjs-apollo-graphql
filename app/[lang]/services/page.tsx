import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Hero from './components/hero'
import Items from './components/items'
import LeaveYourApplication from '@/sections/LeaveYourApplication'

export default async function Services({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const locale = await getDictionary(lang)

  return (
    <section>
      <Hero params={{ lang }} />
      <Items params={{ lang }} />
      <LeaveYourApplication locale={locale} />
    </section>
  )
}
