'use client'

import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
import SliderArrow from '@/components/sliders/SliderArrow'

const Slider = ({
  children,
  viewAll,
  viewAllLink,
  options
}: {
  children: React.ReactNode
  viewAll?: string
  viewAllLink?: string
  options: Omit<KeenSliderOptions, 'slideChanged' | 'created'>
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      ...options,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      }
    },
    []
  )

  return (
    <div className='navigation-wrapper'>
      <div ref={sliderRef} className='keen-slider'>
        {children}
      </div>
      {loaded && instanceRef.current && (
        <div className='mt-[60px] flex h-6 items-center justify-between '>
          <SliderArrow
            dir='left'
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          {viewAllLink && viewAll && (
            <Link
              href={viewAllLink}
              className='flex h-6 flex-nowrap items-center text-center font-mono text-[10px] font-normal text-emerald-950 dark:text-white lg:text-sm'
            >
              {viewAll}
            </Link>
          )}

          <SliderArrow
            dir='right'
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details?.slides.length - 1
            }
          />
        </div>
      )}
    </div>
  )
}

export default Slider
