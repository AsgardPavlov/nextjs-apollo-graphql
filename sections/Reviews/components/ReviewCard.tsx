'use client'

import { Review } from '@/gql/types/graphql'
import StarSolidIcon from '@/components/icons/StarSolidIcon'
import { getDictionary } from '@/lib/dictionary'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure
} from '@nextui-org/react'

const ReviewCard = ({
  review,
  locale
}: {
  review: Review
  locale: Awaited<ReturnType<typeof getDictionary>>
}) => {
  const { section } = locale

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div
        className='keen-slider__slide group flex cursor-pointer flex-col gap-6 border-t-1'
        onClick={onOpen}
      >
        <p className='my-6 line-clamp-4 h-full font-mono text-[10px] font-medium tracking-widest lg:text-lg'>
          {review.description}
        </p>

        <div className='flex justify-between'>
          <div className='flex'>
            {Array.from(Array(review.rating).keys()).map(r => (
              <StarSolidIcon className='h-6 w-6' key={r} />
            ))}
          </div>

          <p
            className='flex h-6 items-center text-right font-mono
            text-[10px] font-medium uppercase tracking-widest group-hover:bg-gradient-to-r
            group-hover:from-stone-500 group-hover:via-orange-200 group-hover:to-stone-500 group-hover:bg-clip-text group-hover:text-transparent
            dark:text-white lg:text-sm'
          >
            {section.reviews.learnMore}
          </p>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>
            <div className='flex justify-center'>
              <div className='flex'>
                {Array.from(Array(review.rating).keys()).map(r => (
                  <StarSolidIcon className='h-6 w-6' key={r} />
                ))}
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <p className='my-6 h-full font-mono text-[10px] font-medium tracking-widest lg:text-lg'>
              {review.description}
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ReviewCard
