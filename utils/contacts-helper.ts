export const russianPhoneNumber = '+7 968 644 65 05'
export const dubaiPhoneNumber = '+971  4 375 3178'
export const email = 'tuimaada_moscow@mail.ru'

export const formatPhoneToLink = (phone: string) => {
  return `tel:${phone.replace(' ', '')}`
}
