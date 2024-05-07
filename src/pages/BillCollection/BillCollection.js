import { Button, Chip, Link, Paper, TextField, Typography } from "@mui/material"
import Bill from "../../components/Bill"
import { isDueBeforeNextPayday } from "../../utils"

const BillCollection = props => {
  return (
    <>
      <Paper>
        <Typography variant="subtitle1">Enter your income and credit card expenses</Typography>
        <Bill income>
          <Typography variant="body1">Income</Typography>
          <TextField 
            id="income" 
            type="number" 
            variant="standard"
            onBlur={props.onChangeIncome} 
          />
        </Bill>
        <br />
        {props.accounts.map((account, index) => {
          return (
            <Bill key={index}>
              <Link href={account.link} target="_blank" rel="noopener" underline="none" color="inherit">
                <Typography variant="body1">{account.name}</Typography>
              </Link>
              <TextField 
                id={`creditAccount${index}`} 
                type="number" 
                variant="standard"
                onBlur={e => props.onChange(e, account.name)}
              />
              {isDueBeforeNextPayday(props.date, account.dueDate)
                ? <span></span>
                : <Chip label="Optional" color="primary" size="small" />
              }
            </Bill>
          )
        })}
        <br />
        <Button variant="contained" onClick={props.onSetSummary}>Go to Summary</Button>
      </Paper>
    </>
  )
}

export default BillCollection