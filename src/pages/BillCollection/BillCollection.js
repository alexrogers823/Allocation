import { Box, Button, Chip, Link, Paper, TextField, Typography } from "@mui/material"
import { isDueBeforeNextPayday } from "../../utils"

const BillCollection = props => {
  return (
    <>
      <Paper>
        <Typography variant="subtitle1">Enter your income and credit card expenses</Typography>
        <Box>
          <span>Income</span>
          <TextField 
            id="income" 
            type="number" 
            variant="standard"
            onBlur={props.onChangeIncome} 
          />
        </Box>
        <br />
        {props.accounts.map((account, index) => {
          return (
            <Box key={index}>
              <Link href={account.link} target="_blank" rel="noopener" underline="none">
                <span>{account.name}</span>
              </Link>
              <TextField 
                id={`creditAccount${index}`} 
                type="number" 
                variant="standard"
                onBlur={e => props.onChange(e, account.name)}
              />
              {!isDueBeforeNextPayday(props.date, account.dueDate) && <Chip label="Optional" color="primary" size="small" />}
            </Box>
          )
        })}
        <br />
        <Button variant="contained" onClick={props.onSetSummary}>Go to Summary</Button>
      </Paper>
    </>
  )
}

export default BillCollection