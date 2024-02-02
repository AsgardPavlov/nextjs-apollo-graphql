interface StatisticItemsProps {
  items: {
    beforeTitle?: string
    afterTitle?: string
    number?: string
    title: string
    label: string
  }[]
}

const StatisticItems = ({ items }: StatisticItemsProps) => {
  return (
    <div className='container lg:w-full'>
      <div className='grid grid-cols-2 divide-x-[0.5px] divide-y-[0.5px] border-[0.5px] lg:container lg:flex lg:divide-x lg:border-1'>
        {items.map(
          ({ number, beforeTitle, afterTitle, title, label }, index) => (
            <div
              key={title}
              className={`flex flex-1 flex-col justify-center gap-3 px-3 py-6 lg:gap-1.5 lg:px-3 lg:py-[62px]
            ${index === 0 && 'bg-teal-900 dark:bg-transparent'}
          `}
            >
              <h3 className='text-md text-center font-sans font-bold uppercase tracking-[3.60px] lg:text-[42px]'>
                <span
                  className={`${
                    index === 0 &&
                    'bg-gradient-to-r from-stone-500 via-orange-200 to-stone-500 bg-clip-text text-transparent'
                  }`}
                >
                  {beforeTitle}
                  {number && (
                    <span className='text-xl lg:text-6xl'>{number}</span>
                  )}
                  {title}
                </span>
              </h3>
              <p
                className='flex items-center justify-center text-center font-mono text-[6px] font-medium uppercase
            tracking-wide lg:h-[60px] lg:text-lg'
              >
                <span
                  className={`${
                    index === 0 &&
                    'bg-gradient-to-r from-stone-500 via-orange-200 to-stone-500 bg-clip-text text-transparent'
                  }`}
                >
                  {label}
                </span>
              </p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default StatisticItems
