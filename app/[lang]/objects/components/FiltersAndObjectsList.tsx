'use client'

import React, { useEffect, useState } from 'react'

import InputButton from '@/components/InputButton'
import Select from '@/components/Select'
import Input from '@/components/Input'
import OutlineButton from '@/components/OutlineButton'
import ObjectCard from '@/app/[lang]/_components/ObjectCard'
import { FIND_MANY_OBJECT } from '@/gql/gqls'
import {
  CityEnum,
  Query,
  QueryFindManyObjectArgs,
  TypeEnum
} from '@/gql/types/graphql'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'
import { useQuery } from '@apollo/client'
import { getClient } from '@/lib/client'
import { SelectItem, Spinner } from '@nextui-org/react'
import { useDebouncedValue } from '@mantine/hooks'

interface FilterValues {
  city?: string
  type?: string
  priceGte?: string
  priceLte?: string
  rooms?: string
  bedrooms?: string
  bathrooms?: string
  spaceGte?: string
  spaceLte?: string
}

export default function FiltersAndObjectsList({
  lang,
  locale,
  initFilters
}: {
  lang: Locale
  locale: Awaited<ReturnType<typeof getDictionary>>
  initFilters?: {
    city?: CityEnum
    type?: TypeEnum
  }
}) {
  const { page, common, apartmentType } = locale

  const isEng = lang === 'en'

  const filtersRestedValue: FilterValues = {
    city: undefined,
    type: undefined,
    priceGte: '',
    priceLte: '',
    rooms: undefined,
    bedrooms: undefined,
    bathrooms: undefined,
    spaceGte: '',
    spaceLte: ''
  }
  const [filters, setFilters] = useState<any>({
    city: initFilters?.city || undefined,
    type: initFilters?.type || undefined,
    priceGte: '',
    priceLte: '',
    rooms: undefined,
    bedrooms: undefined,
    bathrooms: undefined,
    spaceGte: '',
    spaceLte: ''
  })
  const [debouncedFilters] = useDebouncedValue(filters, 400)

  const client = getClient()
  const { data, loading, refetch } = useQuery<Query, QueryFindManyObjectArgs>(
    FIND_MANY_OBJECT,
    {
      client: client,
      fetchPolicy: 'no-cache',
      variables: {
        where: {
          AND: [
            {
              city: debouncedFilters.city
                ? {
                    equals: debouncedFilters.city
                  }
                : undefined,
              type: debouncedFilters.type
                ? {
                    equals: debouncedFilters.type
                  }
                : undefined,
              rooms: debouncedFilters.rooms
                ? {
                    equals: Number(debouncedFilters.rooms)
                  }
                : undefined,
              bathrooms: debouncedFilters.bathrooms
                ? {
                    equals: Number(debouncedFilters.bathrooms)
                  }
                : undefined,
              bedrooms: debouncedFilters.bedrooms
                ? {
                    equals: Number(debouncedFilters.bedrooms)
                  }
                : undefined,
              space:
                debouncedFilters.spaceGte || debouncedFilters.spaceLte
                  ? {
                      gte: debouncedFilters?.spaceGte
                        ? Number(debouncedFilters?.spaceGte)
                        : undefined,
                      lte: debouncedFilters?.spaceLte
                        ? Number(debouncedFilters?.spaceLte)
                        : undefined
                    }
                  : undefined,
              costRUB:
                !isEng &&
                (debouncedFilters.priceGte || debouncedFilters.priceLte)
                  ? {
                      gte: debouncedFilters?.priceGte
                        ? Number(debouncedFilters?.priceGte)
                        : undefined,
                      lte: debouncedFilters?.priceLte
                        ? Number(debouncedFilters?.priceLte)
                        : undefined
                    }
                  : undefined,
              costUSD:
                isEng &&
                (debouncedFilters.priceGte || debouncedFilters.priceLte)
                  ? {
                      gte: debouncedFilters?.priceGte
                        ? Number(debouncedFilters?.priceGte)
                        : undefined,
                      lte: debouncedFilters?.priceLte
                        ? Number(debouncedFilters?.priceLte)
                        : undefined
                    }
                  : undefined
            }
          ]
        }
      }
    }
  )

  const handleClickCity = (value: 'DUBAI' | 'MOSCOW') => {
    setFilters((prev: any) => ({
      ...prev,
      city: prev.city === value ? undefined : value
    }))
  }

  const handleResetFilters = () => {
    setFilters(filtersRestedValue)
  }

  const ObjectTypeSelect = ({ className }: { className: string }) => (
    <Select
      className={className}
      label={page.objects.filters.objects.label}
      placeholder={page.objects.filters.objects.placeholder}
      variant='underlined'
      size='lg'
      selectedKeys={filters.type ? [filters.type] : undefined}
      onChange={e => {
        setFilters((prev: any) => ({ ...prev, type: e.target.value }))
      }}
    >
      {Object.values(apartmentType).map(({ label, value }) => (
        <SelectItem key={value} value={value} className='font-mono'>
          {label}
        </SelectItem>
      ))}
    </Select>
  )

  const RoomsSelect = () => (
    <Select
      label={page.objects.filters.rooms.label}
      placeholder={page.objects.filters.rooms.placeholder}
      variant='underlined'
      size='lg'
      selectedKeys={filters.rooms ? [filters.rooms] : undefined}
      onChange={e =>
        setFilters((prev: any) => ({
          ...prev,
          rooms: e.target.value
        }))
      }
    >
      {['1', '2', '3', '4', '5'].map(at => (
        <SelectItem key={at} value={at} className='font-mono'>
          {at}
        </SelectItem>
      ))}
    </Select>
  )

  const BedroomsSelect = () => (
    <Select
      label={page.objects.filters.bedrooms.label}
      placeholder={page.objects.filters.bedrooms.placeholder}
      variant='underlined'
      size='lg'
      selectedKeys={filters.bedrooms ? [filters.bedrooms] : undefined}
      onChange={e =>
        setFilters((prev: any) => ({
          ...prev,
          bedrooms: e.target.value
        }))
      }
    >
      {['1', '2', '3', '4', '5'].map(at => (
        <SelectItem key={at} value={at} className='font-mono'>
          {at}
        </SelectItem>
      ))}
    </Select>
  )
  const BathroomsSelect = () => (
    <Select
      label={page.objects.filters.bathrooms.label}
      placeholder={page.objects.filters.bathrooms.placeholder}
      variant='underlined'
      size='lg'
      selectedKeys={filters.bathrooms ? [filters.bathrooms] : undefined}
      onChange={e =>
        setFilters((prev: any) => ({
          ...prev,
          bathrooms: e.target.value
        }))
      }
    >
      {['1', '2', '3', '4', '5'].map(at => (
        <SelectItem key={at} value={at} className='font-mono'>
          {at}
        </SelectItem>
      ))}
    </Select>
  )

  return (
    <>
      <div className='grid grid-cols-2 gap-x-3 gap-y-3 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-[60px]'>
        <InputButton
          color={filters.city === CityEnum.Dubai ? 'gradient' : 'default'}
          label={page.objects.filters.city}
          value={common.dubai}
          variant='underlined'
          size='lg'
          type='button'
          onClick={() => handleClickCity(CityEnum.Dubai)}
        />
        <InputButton
          color={filters.city === CityEnum.Moscow ? 'gradient' : 'default'}
          label=' '
          value={common.moscow}
          variant='underlined'
          size='lg'
          type='button'
          onClick={() => handleClickCity(CityEnum.Moscow)}
        />
        <ObjectTypeSelect className='hidden lg:flex' />
        <div className='col-span-2 flex'>
          <Input
            label={page.objects.filters.price.label}
            placeholder={page.objects.filters.price.from}
            variant='underlined'
            size='lg'
            type='number'
            min={0}
            value={filters.priceGte}
            onValueChange={value =>
              setFilters((prev: any) => ({ ...prev, priceGte: value }))
            }
            // startContent={
            //   <div className='pointer-events-none flex items-center'>
            //     <span className='text-small text-default-400'>
            //       {isEng ? '$' : '₽'}
            //     </span>
            //   </div>
            // }
          />
          <Input
            label=' '
            placeholder={page.objects.filters.price.until}
            variant='underlined'
            size='lg'
            type='number'
            min={0}
            value={filters.priceLte}
            onValueChange={value =>
              setFilters((prev: any) => ({
                ...prev,
                priceLte: value
              }))
            }
          />
        </div>
        <OutlineButton className='hidden lg:flex' onClick={() => refetch()}>
          {page.objects.filtersActionBtns.show}
        </OutlineButton>

        <ObjectTypeSelect className='lg:hidden' />
        <RoomsSelect />
        <BedroomsSelect />
        <BathroomsSelect />

        <div className='col-span-2 flex'>
          <Input
            label={page.objects.filters.square.label}
            placeholder={page.objects.filters.square.from}
            variant='underlined'
            size='lg'
            type='number'
            min={0}
            value={filters.spaceGte}
            onValueChange={value =>
              setFilters((prev: any) => ({ ...prev, spaceGte: value }))
            }
          />
          <Input
            label=' '
            placeholder={page.objects.filters.square.until}
            variant='underlined'
            size='lg'
            type='number'
            min={0}
            value={filters.spaceLte}
            onValueChange={value =>
              setFilters((prev: any) => ({ ...prev, spaceLte: value }))
            }
          />
        </div>
        <OutlineButton className='mt-3 lg:mt-0' onClick={handleResetFilters}>
          {page.objects.filtersActionBtns.throwOff}
        </OutlineButton>
        <OutlineButton className='mt-3 lg:hidden' onClick={() => refetch()}>
          {page.objects.filtersActionBtns.show}
        </OutlineButton>
      </div>

      {loading && (
        <div className='flex items-center justify-center py-10'>
          <Spinner color='default' />
        </div>
      )}
      {data?.findManyObject && (
        <div className='grid grid-cols-1 gap-x-6 gap-y-[60px] lg:grid-cols-3'>
          {data.findManyObject.map(object => (
            <ObjectCard
              key={object.id}
              link={`/${lang}/objects/${object.id}`}
              object={object}
              cost={`${common.cost}: ${
                lang === 'en' ? `$${object.costUSD}` : `${object.costRUB}РУБ`
              }`}
            />
          ))}
        </div>
      )}
    </>
  )
}

// export default FiltersAndObjectsList
