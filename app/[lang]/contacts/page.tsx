import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Hero from './components/hero'
import LeaveYourApplication from '@/sections/LeaveYourApplication'

export default async function Contacts({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const locale = await getDictionary(lang)

  return (
    <section>
      <Hero locale={locale} />
      <LeaveYourApplication locale={locale} />
    </section>
  )
}
