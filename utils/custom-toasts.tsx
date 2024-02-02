import toast from 'react-hot-toast'

export const showSuccessToast = (message: string) => {
  toast.custom(t => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } relative z-50 mx-1 my-1 box-border flex w-full max-w-xs flex-col overflow-y-hidden rounded-large bg-content1 shadow-small outline-none sm:mx-6 sm:my-16`}
    >
      <div className='flex p-4'>
        <div className='flex-shrink-0'>
          <svg
            className='text-teal-500 mt-0.5 h-4 w-4 flex-shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
          </svg>
        </div>
        <div className='ms-3 font-mono'>
          <p className='text-gray-700 dark:text-gray-400 text-sm'>{message}</p>
        </div>
        <div className='ms-auto'>
          <button
            onClick={() => toast.dismiss(t.id)}
            type='button'
            className='inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-lg text-white opacity-50 hover:text-white hover:opacity-100 focus:opacity-100 focus:outline-none'
          >
            <span className='sr-only'>Close</span>
            <svg
              className='text-teal-500 h-4 w-4 flex-shrink-0'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M18 6 6 18' />
              <path d='m6 6 12 12' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ))
}
