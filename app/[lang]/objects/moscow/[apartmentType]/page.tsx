import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LeaveYourApplication from '@/sections/LeaveYourApplication'
import FiltersAndObjectsList from '@/app/[lang]/objects/components/FiltersAndObjectsList'
import { CityEnum, TypeEnum } from '@/gql/types/graphql'

export default async function Objects({
  params: { lang, apartmentType }
}: {
  params: { lang: Locale; apartmentType: string }
}) {
  const locale = await getDictionary(lang)

  const initFilters = Object.values(TypeEnum).includes(
    apartmentType.toUpperCase() as TypeEnum
  )
    ? { city: CityEnum.Moscow, type: apartmentType.toUpperCase() as TypeEnum }
    : undefined

  return (
    <>
      <div className='container flex flex-col gap-6 lg:mt-[90px] lg:gap-[60px]'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {locale.page.objects.title}
        </h1>

        <FiltersAndObjectsList
          locale={locale}
          lang={lang}
          initFilters={initFilters}
        />
      </div>

      <LeaveYourApplication locale={locale} />
    </>
  )
}
