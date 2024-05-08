import { BarChart as MuiBarChart } from "@mui/x-charts"
import { amexBlueData, amexGoldData, capitalOneData, discoverData, getDataColor, studentLoanData, wellsFargoData } from "../../data"
import { formatNumber } from "../../utils"

const valueFormatter = value => formatNumber(value, "currency")

const BarChart = props => {
  const seriesData = [
    { data: amexGoldData.map(v => v.balance), stack: 'credit', label: 'Amex Gold', color: getDataColor("amexGold"), valueFormatter },
    { data: capitalOneData.map(v => v.balance), stack: 'credit', label: 'Capital One', color: getDataColor("capitalOne"), valueFormatter },
    { data: wellsFargoData.map(v => v.balance), stack: 'credit', label: 'Wells Fargo', color: getDataColor("wellsFargo"), valueFormatter },
    { data: amexBlueData.map(v => v.balance), stack: 'credit', label: 'Amex Blue', color: getDataColor("amexBlue"), valueFormatter },
    { data: discoverData.map(v => v.balance), stack: 'credit', label: 'Discover', color: getDataColor("discover"), valueFormatter }
  ]

  if (props.showStudentLoanBar) {
    seriesData.push({ data: studentLoanData.map(v => v.balance), stack: 'studentLoan', label: 'Student Loans', color: getDataColor("studentLoan"), valueFormatter})
  }

  return (
    <MuiBarChart 
      width={props.width}
      height={props.height}
      series={seriesData}
      xAxis={[{ scaleType: 'band', data: capitalOneData.map(v => v.date) }]}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'top', horizontal: 'middle' },
          itemMarkWidth: 15,
          itemMarkHeight: 2,
          markGap: 7,
          itemGap: 10
        }
      }}
    />
  )
}

export default BarChart