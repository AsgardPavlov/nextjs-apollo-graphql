interface StarSolidIconProps {
  className?: string
}

const StarSolidIcon = ({ className }: StarSolidIconProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M12.8652 2.99616C12.4799 2.33201 11.5208 2.33201 11.1354 2.99616L8.42132 7.67347C8.23094 8.00155 7.90189 8.22544 7.52683 8.28209L2.44052 9.05032C1.58623 9.17935 1.28658 10.258 1.95188 10.8092L5.74097 13.9484C6.09171 14.239 6.25663 14.6973 6.17143 15.1448L5.18026 20.3499C5.02358 21.1727 5.88737 21.812 6.62852 21.4218L11.4179 18.9C11.7825 18.708 12.2182 18.708 12.5827 18.9L17.3721 21.4218C18.1132 21.812 18.977 21.1727 18.8203 20.3499L17.8292 15.1448C17.744 14.6973 17.9089 14.239 18.2596 13.9484L22.0487 10.8092C22.714 10.258 22.4144 9.17935 21.5601 9.05032L16.4738 8.28209C16.0987 8.22544 15.7697 8.00155 15.5793 7.67347L12.8652 2.99616Z'
        fill='url(#paint0_linear_416_6276)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_416_6276'
          x1='1.58887'
          y1='2.49805'
          x2='20.5542'
          y2='23.2379'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#A57E4D' />
          <stop offset='0.495738' stopColor='#F3D199' />
          <stop offset='1' stopColor='#A57E4D' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default StarSolidIcon
