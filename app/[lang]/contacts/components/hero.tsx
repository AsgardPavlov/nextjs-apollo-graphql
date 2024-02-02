'use client'

import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import { formatPhoneToLink } from '@/utils/contacts-helper'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { lightStyles, darkStyles } from './map-styles'

export type MapConfig = {
  id: string
  label: string
  mapId?: string
  mapTypeId?: string
  styles?: google.maps.MapTypeStyle[]
}

const MapTypeId = {
  HYBRID: 'hybrid',
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
  TERRAIN: 'terrain'
}

const MAP_CONFIGS: MapConfig[] = [
  {
    id: 'light',
    label: 'Light',
    mapTypeId: MapTypeId.TERRAIN,
    styles: lightStyles
  },
  {
    id: 'dark',
    label: 'Dark',
    mapTypeId: MapTypeId.ROADMAP,
    styles: darkStyles
  }
]

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string

export default function Hero({
  locale
}: {
  locale: Awaited<ReturnType<typeof getDictionary>>
}) {
  const { page } = locale
  const { resolvedTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'

  // const [mapConfig, setMapConfig] = useState<MapConfig>(MAP_CONFIGS[1])
  const [selectedOfficeId, setSelectedOfficeId] = useState('msc')

  const officeCoordinates = page.contacts.hero.addresses.find(
    i => i.id === selectedOfficeId
  )?.coordinates

  const selectedClasses =
    'text-teal-900 dark:bg-gradient-to-r dark:from-stone-500 dark:via-orange-200 dark:to-stone-500 dark:bg-clip-text dark:text-transparent'

  const mapConfig = isDark ? MAP_CONFIGS[1] : MAP_CONFIGS[0]

  const GoogleMap = (
    <APIProvider apiKey={GOOGLE_API_KEY}>
      <Map
        mapId={mapConfig.mapId}
        mapTypeId={mapConfig.mapTypeId}
        styles={mapConfig.styles}
        zoom={15}
        center={officeCoordinates}
        gestureHandling='greedy'
        disableDefaultUI={true}
      >
        <Marker position={officeCoordinates} />
      </Map>
    </APIProvider>
  )

  return (
    <div className='container mb-[60px] flex grid-cols-2 flex-col gap-6 lg:mb-60 lg:mt-[90px] lg:grid lg:border-b-1'>
      <div className='flex flex-col gap-6 lg:gap-[106px]'>
        <h1 className='font-sans text-lg font-bold uppercase tracking-[2.88px] text-teal-900 dark:text-white lg:text-5xl'>
          {page.contacts.hero.title}
        </h1>

        <div className='h-60 bg-zinc-300 lg:hidden'>{GoogleMap}</div>

        <div className='flex flex-col divide-y-[0.5px] border-b-[0.5px] pb-[10px] lg:divide-y-1 lg:border-b-0 lg:pb-0'>
          {page.contacts.hero.addresses.map(
            ({ id, city, building, street, phone }, index) => (
              <div
                key={id}
                className='grid cursor-pointer grid-cols-2 gap-6 py-3 lg:py-6'
                onClick={() => setSelectedOfficeId(id)}
              >
                <h3
                  className={`font-sans text-sm font-normal uppercase tracking-widest lg:text-3xl ${
                    selectedOfficeId === id && selectedClasses
                  }`}
                >
                  {city}
                </h3>
                <div
                  className={`flex flex-col gap-0.5	font-mono text-[10px] font-medium lg:gap-3 lg:text-lg ${
                    selectedOfficeId === id && selectedClasses
                  }`}
                >
                  <p className='uppercase'>{building}</p>
                  <p className='not-italic'>{street}</p>
                  {phone && (
                    <Link
                      href={formatPhoneToLink(phone)}
                      className='w-fit hover:underline'
                    >
                      {phone}
                    </Link>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className='hidden bg-zinc-300 lg:flex'>{GoogleMap}</div>
    </div>
  )
}
