import AreaChart from "../../components/AreaChart/AreaChart"
import LineChart from "../../components/LineChart"
import { amexBlueData, amexGoldData, australiaData, capitalOneData, discoverData, emergencyFundData, studentLoanData, wellsFargoData } from "../../data"

const BalanceCharts = () => {
  return (
    <>
      <LineChart />
      <AreaChart data={australiaData} title="Australia Data" />
      <AreaChart data={emergencyFundData} title="Emergency Fund Balance" />
      <AreaChart data={wellsFargoData} title="Wells Fargo CC Balance" />
      <AreaChart data={discoverData} title="Discover Balance" />
      <AreaChart data={amexBlueData} title="Amex Blue Balance" />
      <AreaChart data={amexGoldData} title="Amex Gold Balance" />
      <AreaChart data={capitalOneData} title="Capital One Balance" />
      <AreaChart data={studentLoanData} title="Student Loan Balance" />
    </>
  )
}

export default BalanceCharts