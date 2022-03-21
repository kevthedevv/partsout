import { AddShoppingCartOutlined, FavoriteBorderOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: auto;
`
const Details = styled.div`
    width:100%;
    overflow: hidden;
    padding-bottom: 30px;
`
const Price = styled.h1`
    font-size: 23px;
    color: #F57224;
`
const Name = styled.p`

`
const RegularPrice = styled.p`
    font-style: italic;
`
const Rating = styled.div`

`
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    transition: all 0.2s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #F5F5F5;
    &:hover ${Info}{
        opacity: 1;
    }
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 5px ;
    transition: all 0.2s ease;
    &:hover{
        background-color: #e0bb7f;
        transform: scale(1.1);
    }
    `

const Product = ({item}) => {
  return (
      <Wrapper>
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <AddShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
        <Details>
            <Name>2222222222222</Name>
            <Price>P7,897</Price>
            <RegularPrice>P8,882</RegularPrice>
            <Rating>*****</Rating>
        </Details>
      </Wrapper>
  )
}

export default Product