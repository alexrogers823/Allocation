import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBill = styled(Box)((props) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  backgroundImage: props.income ? 'linear-gradient(to bottom right, #34DF2D, #175C0C)' : 'linear-gradient(to bottom right, #A6D8E5, #847FED)',
  padding: 5,
  margin: 10,
  textAlign: 'left',
  color: 'white',
  width: '50%'
}))

const Bill = props => {
  return (
    <StyledBill income={props.income || false}>{props.children}</StyledBill>
  )
}

export default Bill