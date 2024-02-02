import { Locale } from '@/i18n.config'
import Hero from '@/app/[lang]/_sections/hero'
import About from '@/app/[lang]/_sections/about'
import LeaveYourApplication from '@/sections/LeaveYourApplication'
import StatisticItems from '@/components/StatisticItems'
import { getDictionary } from '@/lib/dictionary'
import NewObjects from '@/app/[lang]/_sections/new-objects'
import BestOffer from '@/app/[lang]/_sections/best-offer'
import Reviews from '@/sections/Reviews'
import Blog from '@/app/[lang]/_sections/blog'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const locale = await getDictionary(lang)
  const { page } = locale

  return (
    <section>
      <Hero params={{ lang }} />
      <About params={{ lang }} />
      <StatisticItems
        items={[
          page.home.statistic.commission,
          page.home.statistic.experience,
          page.home.statistic.benefits,
          page.home.statistic.conditions
        ]}
      />
      <NewObjects locale={locale} params={{ lang }} />
      <BestOffer params={{ lang }} />
      <Reviews params={{ lang }} />
      <Blog params={{ lang }} />
      <LeaveYourApplication locale={locale} />
    </section>
  )
}
