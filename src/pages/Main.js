import { Box, Tab, Tabs, Typography } from '@mui/material'
import dayjs from "dayjs"
import { useState } from "react"

import { accountsData } from "../data"
import { updateAccounts } from "../utils"
import AllocationSummary from "./AllocationSummary/"
import BalanceCharts from './BalanceCharts'
import BillCollection from "./BillCollection"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Main = () => {
  const [tabValue, setTabValue] = useState(0);
  const [income, setIncome] = useState(0)
  const [summaryReady, setSummaryReady] = useState(false)
  
  const [accounts, setAccounts] = useState([ ...accountsData ])

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeAccount = (e, accountName) => {
    const updatedAccounts = updateAccounts(e.target.value, accountName, accounts)
    setAccounts(updatedAccounts)
  }

  const handleChangeIncome = (e) => {
    setIncome(Number(e.target.value))
  }

  const handleChangeToSummary = () => {
    setSummaryReady(true)
    handleTabChange(null, 1)
  }

  const todaysDate = dayjs() 

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Allocation Input" disabled={summaryReady} {...a11yProps(0)} />
          <Tab label="Allocation Summary" disabled={!summaryReady} {...a11yProps(1)} />
          <Tab label="Account Charts" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabValue} index={0}>
        <BillCollection 
          date={todaysDate}
          accounts={accounts.filter(acc => acc.priority === 'credit')}
          onChangeIncome={handleChangeIncome}
          onChange={handleChangeAccount}
          onSetSummary={handleChangeToSummary}
        />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <AllocationSummary 
          date={todaysDate} 
          income={income}
          accounts={accounts}
          onChangeIncome={handleChangeIncome}
          onChangeAccount={handleChangeAccount}
        />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={2}>
        <BalanceCharts />
      </CustomTabPanel>
    </Box>
  );
}

export default Main