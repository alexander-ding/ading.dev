import dayjs from 'dayjs'

function getGreeting(): string {
  const hour = dayjs().hour()
  if (hour >= 5 && hour <= 12) {
    return 'Good morning'
  }
  if (hour >= 12 && hour <= 18) {
    return 'Good afternoon'
  }
  return 'Good evening'
}

export { getGreeting }
