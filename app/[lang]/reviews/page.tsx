import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Reviews from '@/sections/Reviews'
import LeaveYourApplication from '@/sections/LeaveYourApplication'

export default async function ReviewsPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const locale = await getDictionary(lang)

  return (
    <>
      <Reviews params={{ lang }} />
      <LeaveYourApplication locale={locale} />
    </>
  )
}
