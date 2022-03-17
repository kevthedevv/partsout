import styled from "styled-components";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import pc1 from "../images/pc1.png";
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    align-items: center;
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
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
    text-transform: uppercase;
`
const Description = styled.p`
    margin: 50px 0;
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

  return (
    <Container>
        <Wrapper>
            <ImgContainer>
                <Image src = {pc1}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{sliderItems.title}</Title>
                <Description>{sliderItems.desc}</Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Slider