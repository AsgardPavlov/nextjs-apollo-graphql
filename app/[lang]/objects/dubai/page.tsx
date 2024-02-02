import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LeaveYourApplication from '@/sections/LeaveYourApplication'
import FiltersAndObjectsList from '@/app/[lang]/objects/components/FiltersAndObjectsList'
import { CityEnum } from '@/gql/types/graphql'

export default async function Objects({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const locale = await getDictionary(lang)

  return (
    <>
      <div className='container flex flex-col gap-6 lg:mt-[90px] lg:gap-[60px]'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {locale.page.objects.title}
        </h1>

        <FiltersAndObjectsList
          locale={locale}
          lang={lang}
          initFilters={{ city: CityEnum.Dubai }}
        />
      </div>

      <LeaveYourApplication locale={locale} />
    </>
  )
}
