import styled from "styled-components";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import pc1 from "../images/pc1.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
  
    overflow: hidden;
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
const Wrapper = styled.div`
    height: 80%;
    display: flex;
    transform: translateX(-100px);
    ;
`

const Slide = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    background-color: ${props=>props.bg};
    
    
`
const ImgContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    flex: 1;
    
`

const Image = styled.img`
    height: 80%;
    
  
`

const InfoContainer = styled.div`
    flex: 1.5;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
    text-transform: uppercase;
`
const Description = styled.p`
    margin: 50px 200px 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Slider = () => {

    const handleClick = (direction) => {

    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowBackIos />
        </Arrow>

        <Wrapper>
            <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src = {pc1}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Need a PC parts?</Title>
                    <Description>PARTSOUT is an online PC parts buying and selling platform. You can buy or sell new or even old stuff at a lowest price!</Description>
                    <Button>Shop now</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="fcf1ed">
                <ImgContainer>
                    <Image src = {pc1}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Need a PC parts?</Title>
                    <Description>PARTSOUT is an online PC parts buying and selling platform. You can buy or sell new or even old stuff at a lowest price!</Description>
                    <Button>Shop now</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>

        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowForwardIos />
        </Arrow>
    </Container>
  )
}

export default Slider