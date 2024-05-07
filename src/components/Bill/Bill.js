import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBill = styled(Box)((props) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  backgroundColor: props.income ? '#34DF2D' : '#847FED',
  padding: 5,
  margin: 10,
  textAlign: 'left',
  color: props.income ? '#187A14' : 'white',
  width: '50%'
}))

const Bill = props => {
  return (
    <StyledBill income={props.income || false}>{props.children}</StyledBill>
  )
}

export default Bill