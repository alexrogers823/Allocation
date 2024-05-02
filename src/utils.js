import dayjs from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"

dayjs.extend(isSameOrBefore)

export const calculateRemainingIncome = (income, data, priority = '') => {
  const priorityLevel = ['base', 'primary', 'credit', 'secondary', 'tertiary']

  let remainingIncome = income

  for (const level of priorityLevel) {
    if (level === priority) {
      return remainingIncome
    }

    const filteredData = data.filter(account => account.priority === level)
    remainingIncome = remainingIncome - filteredData.reduce((total, acc) => total + acc.cost, 0)
  }

  return remainingIncome
}

export const isDueBeforeNextPayday = (today, dueDate) => {
  const daysFromFriday = 7 - Math.abs(today.day() - 5) // 5 = Friday
  const lastPayday = today.subtract(daysFromFriday, 'day')
  const nextPayday = lastPayday.add(2, 'week')

  const convertedDueDate = (dueDate > today.date()) 
                              ? dayjs().set('date', dueDate) 
                              : dayjs().set('date', dueDate).add(1, 'month')

  return convertedDueDate.isSameOrBefore(nextPayday, 'date')
}

export const updateAccounts = (value, accountName, accountList) => {
  const original = accountList.find(account => account.name === accountName)
  const originalIndex = accountList.findIndex(account => account.name === accountName)

  const updated = { cost: Number(value) }

  const updatedAccount = Object.assign(original, updated)
  const newAccountList = [...accountList.slice(0, originalIndex), updatedAccount, ...accountList.slice(originalIndex + 1)]

  return newAccountList
}