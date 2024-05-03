import { Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import Account from "../../components/Account";
import Section from "../../components/Section";
import { calculateRemainingIncome } from "../../utils";

const AllocationSummary = props => {
  const primary = calculateRemainingIncome(props.income, props.accounts, 'primary')
  const credit = calculateRemainingIncome(props.income, props.accounts, 'credit')
  const secondary = calculateRemainingIncome(props.income, props.accounts, 'secondary')
  const tertiary = calculateRemainingIncome(props.income, props.accounts, 'tertiary')

  const [stop, setStop] = useState(null)

  const isGreaterThanZero = (section, sectionName) => {
    if (section > 0 && stop === sectionName) {
      setStop(null)
      return true
    }

    if (stop && section <= 0) {
      return false
    }

    if (section <= 0) {
      setStop(sectionName)
      return false
    }

    return true
  }

  const finalRemainingIncome = () => {
    return (stop) 
      ? calculateRemainingIncome(props.income, props.accounts, stop)
      : calculateRemainingIncome(props.income, props.accounts)
  }

  return (
    <>
      <Typography variant="h3" gutterBottom>{`Allocation Summary for ${props.date.format('M/D/YYYY')}`}</Typography>
      <Paper elevation={3}>
        <Grid container spacing={2}>
          <Account name={'Income'} cost={props.income} onChangeAccount={props.onChangeIncome} />
        </Grid>
      </Paper>

      <Section 
        accounts={props.accounts.filter(acc => acc.priority === 'base')} 
        remainingIncome={calculateRemainingIncome(props.income, props.accounts, 'base')}
        title="Base Expenses" 
        onChangeAccount={props.onChangeAccount}
        backgroundColor={'#ACEAF9'}
      />
      {isGreaterThanZero(primary, 'primary') &&
        <Section 
          accounts={props.accounts.filter(acc => acc.priority === 'primary')} 
          remainingIncome={primary}
          title="Primary Expenses" 
          onChangeAccount={props.onChangeAccount}
          backgroundColor={'#89C9D9'}
        />
      }
      {isGreaterThanZero(credit, 'credit') &&
        <Section 
          accounts={props.accounts.filter(acc => acc.priority === 'credit')} 
          remainingIncome={credit}
          title="Credit Card Payments" 
          onChangeAccount={props.onChangeAccount}
          backgroundColor={'#E22B13'}
          textColor={'#FFF'}
        />
      }
      {isGreaterThanZero(secondary, 'secondary') &&
        <Section 
          accounts={props.accounts.filter(acc => acc.priority === 'secondary')}
          remainingIncome={secondary}
          title="Secondary Expenses" 
          onChangeAccount={props.onChangeAccount}
          backgroundColor={'#549EB1'}
        />
      }
      {isGreaterThanZero(tertiary, 'tertiary') &&
        <Section 
          accounts={props.accounts.filter(acc => acc.priority === 'tertiary')}
          remainingIncome={tertiary}
          title="Tertiary Expenses" 
          onChangeAccount={props.onChangeAccount}
          backgroundColor={'#418B9D'}
        />
      }

      <Paper elevation={3}>
        <Typography variant="subtitle1">
          <span>Total Income Remaining: </span>
          <span>{finalRemainingIncome()}</span>
        </Typography>
      </Paper>
    </>
  )
}

export default AllocationSummary