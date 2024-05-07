import { accountsData } from './accountsData'
import { amexBlueData } from './amexBlueData'
import { amexGoldData } from './amexGoldData'
import { australiaData } from './australiaData'
import { capitalOneData } from './capitalOneData'
import { discoverData } from './discoverData'
import { emergencyFundData } from './emergencyFundData'
import { studentLoanData } from './studentLoanData'
import { wellsFargoData } from './wellsFargoData'

const dataColors = [
  { name: 'amexBlue', color: '#2A3BD7' },
  { name: 'amexGold', color: '#BA9E29' },
  { name: 'australia', color: '#E9B833' },
  { name: 'capitalOne', color: '#8C29BA' },
  { name: 'discover', color: '#79E5D6' },
  { name: 'emergency', color: '#4BA924' },
  { name: 'studentLoan', color: '#DAD555' },
  { name: 'wellsFargo', color: '#E5BF4D' }
] 

const getDataColor = dataName => {
  const selected = dataColors.find(d => d.name === dataName)

  return selected ? selected.color : '#000'
}


export { accountsData, amexBlueData, amexGoldData, australiaData, capitalOneData, discoverData, emergencyFundData, getDataColor, studentLoanData, wellsFargoData }

