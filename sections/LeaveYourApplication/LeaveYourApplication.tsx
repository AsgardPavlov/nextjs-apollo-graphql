'use client'

import { getDictionary } from '@/lib/dictionary'
import Input from '@/components/Input'
import PrimaryButton from '@/components/PrimaryButton'
import Link from 'next/link'
import {
  dubaiPhoneNumber,
  email,
  formatPhoneToLink,
  russianPhoneNumber
} from '@/utils/contacts-helper'
import { useMutation } from '@apollo/client'
import { CREATE_ONE_APPLICATION } from '@/gql/gqls'
import {
  ApplicationCreateInput,
  CommuticationType,
  MutationCreateOneApplicationArgs
} from '@/gql/types/graphql'
import { useForm } from '@mantine/form'
import { usePathname } from 'next/navigation'
import { getClient } from '@/lib/client'
import { SelectItem } from '@nextui-org/react'
import toast from 'react-hot-toast'
import { allTimeArray } from '@/utils/time-util'
import Select from '@/components/Select'
import EnvelopIcon from '@/components/icons/EnvelopIcon'
import TelegramIcon from '@/components/icons/TelegramIcon'
import WhatsappIcon from '@/components/icons/WhatsappIcon'
import PhoneIcon from '@/components/icons/PhoneIcon'
import ObjectSelect from '@/components/auto-complete/ObjectSelect'

export default function LeaveYourApplication({
  locale
}: {
  locale: Awaited<ReturnType<typeof getDictionary>>
}) {
  const pathName = usePathname()
  const isEng = pathName.split('/').includes('en')

  const { section, common } = locale

  const client = getClient()
  const [createOneApplication, { loading }] = useMutation<
    unknown,
    MutationCreateOneApplicationArgs
  >(CREATE_ONE_APPLICATION, {
    client: client
  })

  const form = useForm<ApplicationCreateInput>({
    initialValues: {
      name: '',
      email: '',
      number: '',
      callTime: '',
      commuticationType: CommuticationType.Wa,
      objectOfInterest: undefined
    },

    validate: {
      name: value =>
        value.length < 3
          ? isEng
            ? 'Name is required'
            : 'Имя это обязательное поле'
          : null,
      email: value =>
        /^\S+@\S+$/.test(value)
          ? null
          : isEng
          ? 'Invalid email'
          : 'Неправильный формат электронной почты',
      number: value =>
        value.length >= 8 &&
        value.length <= 20 &&
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)
          ? null
          : isEng
          ? 'Invalid phone number. Length should be 8-15 letters.'
          : 'Неправильный формат номера телефона. Длинна должна быть 8-15 символов.'
    }
  })

  const handleSubmit = (formValues: ApplicationCreateInput) => {
    createOneApplication({
      variables: { data: formValues },
      onCompleted: () => {
        const message = isEng
          ? 'Your application is successfully sent!'
          : 'Ваш запрос успешно отправлен!'
        toast.success(message)
        form.reset()
      },
      onError: () => {
        const message = isEng
          ? 'Sending is failed! Try again later!'
          : 'Запрос не доставлен! Попробуйте отправить еще раз позднее!'
        toast.success(message)
      }
    })
  }

  return (
    <>
      <div className='container mb-0 mt-[60px] flex flex-col gap-6 lg:mb-32 lg:mt-60 lg:gap-[60px]'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {section.leaveApplication.title}
        </h1>

        <div className='flex grid-cols-2 flex-col lg:grid'>
          <div className='hidden flex-col gap-3 lg:flex'>
            <div className='flex flex-col gap-1.5'>
              <Link
                href={formatPhoneToLink(russianPhoneNumber)}
                className='w-fit font-mono text-lg uppercase tracking-wide'
              >
                {russianPhoneNumber}
              </Link>
              <p className='font-mono text-lg tracking-wide text-stone-300'>
                {`(${common.russia})`}
              </p>
            </div>
            <div className='flex flex-col gap-1.5'>
              <Link
                href={formatPhoneToLink(dubaiPhoneNumber)}
                className='w-fit font-mono text-lg uppercase tracking-wide'
              >
                {dubaiPhoneNumber}
              </Link>
              <p className='font-mono text-lg uppercase tracking-wide text-stone-300'>
                {`(${common.dubai})`}
              </p>
            </div>
            <Link
              href={`mailto:${email}`}
              className='w-fit font-mono text-lg uppercase tracking-wide'
            >
              {email}
            </Link>
          </div>

          <form
            className='flex flex-col items-start'
            onSubmit={form.onSubmit(handleSubmit)}
          >
            <div className='flex w-full grid-cols-2 flex-col gap-x-6 gap-y-3 lg:grid lg:gap-y-[30px]'>
              <Input
                label={section.leaveApplication.yourName}
                placeholder='***'
                type='text'
                size='lg'
                variant='underlined'
                value={form.values.name}
                onValueChange={form.getInputProps('name').onChange}
                errorMessage={form.errors.name}
              />
              <Input
                label={section.leaveApplication.phoneNumber}
                placeholder='***'
                type='tel'
                size='lg'
                variant='underlined'
                value={form.values.number}
                onValueChange={form.getInputProps('number').onChange}
                errorMessage={form.errors.number}
              />
              <Input
                label={section.leaveApplication.mail}
                placeholder='***'
                type='email'
                size='lg'
                variant='underlined'
                value={form.values.email}
                onValueChange={form.getInputProps('email').onChange}
                errorMessage={form.errors.email}
              />
              <Select
                label={section.leaveApplication.convenientTime}
                placeholder='***'
                size='lg'
                variant='underlined'
                value={form.values.callTime || undefined}
                onChange={e =>
                  form.getInputProps('callTime').onChange(e.target.value)
                }
                errorMessage={form.errors.callTime}
              >
                {allTimeArray.map(t => (
                  <SelectItem key={t} value={t} className='font-mono'>
                    {t}
                  </SelectItem>
                ))}
              </Select>

              <ObjectSelect
                label={section.leaveApplication.interestedObject}
                placeholder='***'
                size='lg'
                variant='underlined'
                selectedKey={form.values.objectOfInterest}
                onSelectionChange={v =>
                  form.getInputProps('objectOfInterest').onChange(v)
                }
              />

              <div className='col-span-2 grid gap-1.5'>
                <label className='block font-mono text-[10px] font-normal uppercase tracking-wide lg:text-sm'>
                  {section.leaveApplication.communicationMethod}
                </label>

                <div className='grid w-full grid-cols-4 font-mono text-sm font-normal text-neutral-400'>
                  {section.leaveApplication.communicationTypes.map(t => {
                    const isActive = form.values.commuticationType === t.value

                    const iconClasses = `w-3 h-3 lg:h-5 lg:w-5 ${
                      isActive
                        ? 'fill-teal-900 dark:fill-stone-500'
                        : 'fill-neutral-400'
                    }`
                    const itemTextClass = `text-[8px] lg:text-sm font-normal ${
                      isActive
                        ? 'text-teal-900 bg-gradient-to-r from-stone-500 via-orange-200 to-stone-500 bg-clip-text dark:text-transparent'
                        : ''
                    }`
                    const itemActiveClass = isActive
                      ? 'border border-teal-900 dark:border-stone-500 border-x-2'
                      : 'border-[0.1px] border-neutral-400'

                    return (
                      <div
                        key={t.value}
                        className={`flex cursor-pointer items-center justify-center gap-1.5 p-2 lg:p-[5px] ${itemActiveClass}`}
                        onClick={() =>
                          form
                            .getInputProps('commuticationType')
                            .onChange(t.value)
                        }
                      >
                        {t.value === CommuticationType.Wa && (
                          <WhatsappIcon className={iconClasses} />
                        )}
                        {t.value === CommuticationType.Tg && (
                          <TelegramIcon className={iconClasses} />
                        )}
                        {t.value === CommuticationType.Call && (
                          <PhoneIcon className={iconClasses} />
                        )}
                        {t.value === CommuticationType.Email && (
                          <EnvelopIcon className={iconClasses} />
                        )}

                        <p className={itemTextClass}>{t.label}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className='mt-[60px] grid w-full grid-cols-2 gap-x-6 gap-y-3 lg:gap-y-[30px]'>
              <PrimaryButton type='submit' loading={loading}>
                {section.leaveApplication.send}
              </PrimaryButton>
              <text className='col-span-2 font-mono text-[10px] font-normal uppercase tracking-wide lg:text-sm'>
                {section.leaveApplication.agreement}
              </text>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
