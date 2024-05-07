import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import AreaChart from "../../components/AreaChart/AreaChart";
import LineChart from "../../components/LineChart";
import { amexBlueData, amexGoldData, australiaData, capitalOneData, discoverData, emergencyFundData, getDataColor, studentLoanData, wellsFargoData } from "../../data";

const AreaChartContainer = styled(Paper)((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: '#fff',
  padding: 5,
}))

const BalanceCharts = () => {
  return (
    <>
      <LineChart />
      <AreaChartContainer>
        <AreaChart data={australiaData} title="Australia Data" color={getDataColor("australia")} />
        <AreaChart data={emergencyFundData} title="Emergency Fund Balance" color={getDataColor("emergency")} />
        <AreaChart data={wellsFargoData} title="Wells Fargo CC Balance" color={getDataColor("wellsFargo")} />
        <AreaChart data={discoverData} title="Discover Balance" color={getDataColor("discover")} />
        <AreaChart data={amexBlueData} title="Amex Blue Balance" color={getDataColor("amexBlue")} />
        <AreaChart data={amexGoldData} title="Amex Gold Balance" color={getDataColor("amexGold")} />
        <AreaChart data={capitalOneData} title="Capital One Balance" color={getDataColor("capitalOne")} />
        <AreaChart data={studentLoanData} title="Student Loan Balance" color={getDataColor("studentLoan")} />
      </AreaChartContainer>
    </>
  )
}

export default BalanceCharts