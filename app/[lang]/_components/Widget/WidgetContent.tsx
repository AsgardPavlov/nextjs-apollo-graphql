'use client'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  useDisclosure
} from '@nextui-org/react'
import { CloseIcon } from '@nextui-org/shared-icons'
import { getDictionary } from '@/lib/dictionary'
import WhatsappIcon from '@/components/icons/WhatsappIcon'
import TelegramIcon from '@/components/icons/TelegramIcon'

export default function WidgetContent({
  locale,
  isEng
}: {
  locale: Awaited<ReturnType<typeof getDictionary>>
  isEng: boolean
}) {
  const { isOpen, onClose } = useDisclosure({ defaultOpen: true })

  return (
    <Card
      className={`fixed bottom-5 right-5 z-50 w-full max-w-[200px] overflow-visible ${
        !isOpen ? 'hidden' : 'visible'
      }`}
      shadow='lg'
    >
      <CardHeader className='relative grid grid-cols-3 items-start gap-3'>
        <Avatar
          className='absolute top-[-25%] col-start-2'
          // isBordered
          size='lg'
          color='success'
          // src='https://i.pravatar.cc/150?u=a04258114e29026302d'
        />
        <Button
          className='col-start-3 ml-auto'
          isIconOnly
          aria-label='Close'
          size='sm'
          radius='lg'
          variant='flat'
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      </CardHeader>
      <CardBody>
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-md font-sans'>{locale.widget.consultant}</p>
          <p className='font-mono text-sm text-default-500'>
            {locale.widget.title}
          </p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className='flex w-full items-center justify-center gap-1.5'>
          <Link isExternal href='https://wa.me/+79686446505'>
            <Button
              isIconOnly
              aria-label='WhatsApp'
              size='sm'
              radius='lg'
              color='success'
            >
              <WhatsappIcon className='h-3 w-3 fill-white lg:h-5 lg:w-5' />
            </Button>
          </Link>
          <Link isExternal href='https://wa.me/+79686446505' isDisabled>
            <Button
              isIconOnly
              aria-label='WhatsApp'
              size='sm'
              radius='lg'
              color='primary'
            >
              <TelegramIcon className='h-3 w-3 fill-white lg:h-5 lg:w-5' />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
