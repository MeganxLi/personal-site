export const formatYearMonth = (dateString:string) => {
  const date = new Date(dateString)
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}

export const calcDuration = (start:string, end:string) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  let years = endDate.getFullYear() - startDate.getFullYear()
  let months = endDate.getMonth() - startDate.getMonth()
  const days = endDate.getDate() - startDate.getDate()

  if (days > 0) {
    months += 1 // 有跨過當月就多算一個月
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return months > 0 ? `${years} yrs ${months} mo` : `${years} yrs`
}
