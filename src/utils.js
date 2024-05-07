import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrBefore)
dayjs.extend(dayOfYear)
dayjs.extend(isLeapYear)

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
  const startingPayDate = dayjs().set('date', 26).set('month', 3).set('year', 2024) // Apr 26, 2024
  const startingConverted  = new Date(2024, 3, 26) // Apr 26, 2024
  const todayConverted = new Date()

  const difference = durationOfDays(startingConverted, todayConverted)

  const multiplier = Math.ceil(difference / 14) // how many pay cycles since starting date
  
  const nextPayday = startingPayDate.add(multiplier * 2, 'week')

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

export const durationOfDays = (date1, date2, precise = true) => {
  const day = 1000 * 60 * 60 * 24 
  const start = date1.getTime()
  const end = date2.getTime()

  return precise ? (end - start) / day : Math.floor((end - start) / day)
}

export const formatNumber = (number, formatType = null, digits = 2) => {
  if (formatType === "currency") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: digits }).format(number)
  }

  return new Intl.NumberFormat().format(number)
}