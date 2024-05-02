import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Account from "../Account";

const SectionItem = styled(Paper)((props) => ({
  backgroundColor: props.backgroundColor ? props.backgroundColor : '#fff',
  padding: 10,
  margin: 15,
  textAlign: 'left',
}))

const Section = props => {
  return (
    <SectionItem elevation={3} backgroundColor={props.backgroundColor}>
      <Typography variant="h6">{props.title}</Typography>
      <Typography variant="subtitle1" gutterBottom>Income Remaining: {props.remainingIncome}</Typography>
      <Grid container spacing={2}>
        {props.accounts.map((acc, i) => <Account key={i} name={acc.name} cost={acc.cost} link={acc.link ? acc.link : null} onChangeAccount={props.onChangeAccount} />)}
      </Grid>
      <Typography variant="subtitle1">
        <span>Total: </span>
        <span>{props.accounts.reduce((total, acc) => total + acc.cost, 0)}</span>
      </Typography>
    </SectionItem>
  )
}

export default Section