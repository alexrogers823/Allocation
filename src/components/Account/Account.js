import { Grid, InputAdornment, Link, Paper, TextField } from "@mui/material"
import { styled } from "@mui/material/styles"

const AccountItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  margin: theme.spacing(1),
  textAlign: 'center',
  minHeight: 30,
  width: '90%',
  color: theme.palette.text.secondary,
}))

const Account = (props) => {

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

export default Account