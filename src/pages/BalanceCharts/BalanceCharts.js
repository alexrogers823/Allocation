import { Box, Checkbox, FormControlLabel, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import AreaChart from "../../components/AreaChart/AreaChart";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import { amexBlueData, amexGoldData, australiaData, capitalOneData, discoverData, emergencyFundData, getDataColor, studentLoanData, wellsFargoData } from "../../data";

const StyledChartContainer = styled(Paper)((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: props.backgroundColor ? props.backgroundColor : '#FFF',
  padding: 5,
}))

const BalanceCharts = () => {
  const [chartWidth, chartHeight] = [600, 300]
  const [studentLoanBar, setStudentLoanBar] = useState(false)

  return (
    <>
      <StyledChartContainer>
        <Box>
          <FormControlLabel 
            checked={studentLoanBar}
            control={
              <Checkbox onChange={(e) => setStudentLoanBar(e.target.checked)} />
            }
            label="Show Student Loans"
            labelPlacement="end"
          />
          <BarChart width={chartWidth} height={chartHeight} showStudentLoanBar={studentLoanBar} />
        </Box>
        <LineChart width={chartWidth} height={chartHeight} />
      </StyledChartContainer>
      <StyledChartContainer backgroundColor="#E3F5F4">
        <AreaChart data={australiaData} title="Australia Data" color={getDataColor("australia")} width={chartWidth} height={chartHeight} />
        <AreaChart data={emergencyFundData} title="Emergency Fund Balance" color={getDataColor("emergency")} width={chartWidth} height={chartHeight} />
        <AreaChart data={wellsFargoData} title="Wells Fargo CC Balance" color={getDataColor("wellsFargo")} width={chartWidth} height={chartHeight} />
        <AreaChart data={discoverData} title="Discover Balance" color={getDataColor("discover")} width={chartWidth} height={chartHeight} />
        <AreaChart data={amexBlueData} title="Amex Blue Balance" color={getDataColor("amexBlue")} width={chartWidth} height={chartHeight} />
        <AreaChart data={amexGoldData} title="Amex Gold Balance" color={getDataColor("amexGold")} width={chartWidth} height={chartHeight} />
        <AreaChart data={capitalOneData} title="Capital One Balance" color={getDataColor("capitalOne")} width={chartWidth} height={chartHeight} />
        <AreaChart data={studentLoanData} title="Student Loan Balance" color={getDataColor("studentLoan")} width={chartWidth} height={chartHeight} />
      </StyledChartContainer>
    </>
  )
}

export default BalanceCharts