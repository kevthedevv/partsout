import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`

const Arrow = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction==="left" && "10px"};
    right: ${props=> props.direction==="right" && "10px"};
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBackIos />
        </Arrow>
        <Arrow direction="right">
            <ArrowForwardIos />
        </Arrow>
    </Container>
  )
}

export default Slider