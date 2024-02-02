import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import PrimaryButton from '@/components/PrimaryButton'

export default async function Reviews({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { section, common } = await getDictionary(lang)

  return (
    <div className='container flex gap-[60px] pt-32'>
      <h1 className='max-w-[700px] font-sans text-5xl font-bold uppercase tracking-[2.88px] text-teal-900'>
        {section.reviews.title}
      </h1>
    </div>
  )
}
