import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'
import WidgetContent from '@/app/[lang]/_components/Widget/WidgetContent'

export default async function WidgetContainer({ lang }: { lang: Locale }) {
  const locale = await getDictionary(lang)
  const isEng = lang === 'en'

  return <WidgetContent locale={locale} isEng={isEng} />
}
