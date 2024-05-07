import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { formatNumber } from "../../utils";
import Account from "../Account";

const SectionItem = styled(Paper)((props) => ({
  backgroundColor: props.backgroundColor ? props.backgroundColor : '#fff',
  padding: 10,
  margin: 15,
  textAlign: 'left',
}))

const StyledTypography = styled(Typography)((props) => ({
  color: props.textColor ? props.textColor : '#000'
}))

const Section = props => {
  return (
    <SectionItem elevation={3} backgroundColor={props.backgroundColor}>
      <StyledTypography variant="h6" textColor={props.textColor}>{props.title}</StyledTypography>
      <StyledTypography variant="subtitle1" textColor={props.textColor} gutterBottom>Income Remaining: {formatNumber(props.remainingIncome, "currency")}</StyledTypography>
      <Grid container spacing={2}>
        {props.accounts.map((acc, i) => <Account key={i} name={acc.name} cost={acc.cost} link={acc.link ? acc.link : null} onChangeAccount={props.onChangeAccount} />)}
      </Grid>
      <StyledTypography variant="subtitle1" textColor={props.textColor}>
        <span>Total: </span>
        <span>{formatNumber(props.accounts.reduce((total, acc) => total + acc.cost, 0), "currency", 0)}</span>
      </StyledTypography>
    </SectionItem>
  )
}

export default Section