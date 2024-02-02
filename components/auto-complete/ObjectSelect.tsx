'use client'

import React, { useEffect, useState } from 'react'
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps
} from '@nextui-org/react'
import { getClient } from '@/lib/client'
import { useQuery } from '@apollo/client'
import { Object, Query, QueryFindManyObjectArgs } from '@/gql/types/graphql'
import { FIND_MANY_OBJECT } from '@/gql/gqls'

export interface ObjectSelect
  extends Omit<AutocompleteProps, 'classNames' | 'isLoading' | 'children'> {}

const ObjectSelect = ({ label, ...selectProps }: ObjectSelect) => {
  const [items, setItems] = useState<Object[]>([])

  const client = getClient()
  const { data, loading } = useQuery<Query, QueryFindManyObjectArgs>(
    FIND_MANY_OBJECT,
    {
      client: client,
      fetchPolicy: 'no-cache'
    }
  )

  useEffect(() => {
    if (!!data?.findManyObject && !loading) {
      setItems(data?.findManyObject)
    }
  }, [data?.findManyObject])

  return (
    <Autocomplete
      classNames={{
        base: 'font-mono'
      }}
      label={
        <label className='mb-3 text-xs font-medium uppercase text-neutral-400 2xl:text-sm'>
          {label}
        </label>
      }
      isLoading={loading}
      {...selectProps}
    >
      {items.map(i => (
        <AutocompleteItem key={i.id} value={i.id} className='font-mono'>
          {i.title}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  )
}

export default ObjectSelect
