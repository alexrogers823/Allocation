import { Grid, InputAdornment, Link, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { formatNumber } from "../../utils";

const AccountItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  margin: theme.spacing(1),
  textAlign: 'center',
  minHeight: 30,
  width: '90%',
  color: theme.palette.text.secondary,
}))

export const Account = (props) => {
  return (
    <>
      <Grid item xs={8}>
        {props.link
          ? <Link href={props.link} target="_blank" rel="noopener" underline="none">
              <AccountItem>{props.name}</AccountItem>
            </Link>
          : <AccountItem>{props.name}</AccountItem>
        }
      </Grid>
      <Grid item xs={4}>
        <AccountItem>
          <TextField 
            defaultValue={props.cost}
            type="number" 
            variant="standard" 
            size="small"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            onBlur={e => props.onChangeAccount(e, props.name)}
          />
        </AccountItem>
      </Grid>
    </>
  )
}

export const TertiaryAccount = props => {
  return (
    <>
      <Grid item xs={8}>
        <AccountItem>{props.name}</AccountItem>
      </Grid>
      <Grid item xs={1}>
        <AccountItem>
          <TextField 
            defaultValue={formatNumber(props.percent, "percent")}
            type="number" 
            variant="standard" 
            size="small"
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            onBlur={e => props.onChangeAccount(e, props.name, true)}
          />
        </AccountItem>
      </Grid>
      <Grid item xs={3}>
        <AccountItem>
          <TextField 
            value={formatNumber(props.cost)}
            type="number" 
            variant="standard" 
            size="small"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            disabled
          />
        </AccountItem>
      </Grid>
    </>
  )
}
