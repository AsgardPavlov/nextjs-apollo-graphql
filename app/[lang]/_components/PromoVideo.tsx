'use client'

export default function PromoVideo() {
  return (
    <video
      className='row-span-3 h-full w-full object-cover'
      autoPlay
      loop
      muted
      src={require('@/public/page/home/promo.mp4')}
    />
  )
}
