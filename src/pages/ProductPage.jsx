import styled from "styled-components"
import Navbar from '../components/Navbar'
import { Add, AddShoppingCartRounded, FavoriteBorderRounded, Remove, ShareRounded, ShoppingCartOutlined, StarHalfRounded, StarRateRounded } from "@material-ui/icons";
import Announcement from '../components/Announcement';
//https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260

const Wrapper = styled.div`
    
`
const Container = styled.div`
    padding-top:50px;
    display: flex;
    max-width: 80%;
    margin: auto;
    
`
const ImageContainer = styled.div`
    flex: 2;
`
const MainImage = styled.img`
    max-width: 100%;
    min-width: 100%;
    object-fit: cover;
`
const Info = styled.div`
    flex: 1;
    background-color: #F5F5F5;
`

const InfoContainer = styled.div`
    margin: 20px;
`

const Name = styled.h1`
    font-size: 30px;
    letter-spacing: 1px;
    font-weight: 100;
    padding-bottom: 30px;
`
const Description = styled.div`
    line-height: 1rem;
    letter-spacing: 1px;
    padding-bottom: 30px;
`
const RateFaveContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
`
const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Favorite = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Price = styled.div`
    font-size: 23px;
    color: #F57224;
`
const RegularPrice = styled.div`
    font-style: italic;
    color: gray;
`
const QuantityContainer = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
      
`
const Button = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    padding: 10px 10px;
    border: 1px solid black;
    cursor: pointer;
    border-radius:50%;
    background-color: transparent;
    font-size: 15px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.2s ease;
    &:hover{
        background-color: #e0bb7f;
        border: 1px solid #e0bb7f;
    }
`
const Quantity = styled.div`

`
const AvailableStocks = styled.div`
    font-style: italic;
    color: gray;
`
const ButtonsContainer = styled.div`
    padding-top: 230px;
    display: flex;
    align-items: center;
    justify-content: left;

`
const BuyNow = styled.button`
    width: 150px;
    height: 20px;
    padding: 20px;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        background-color: #e0bb7f;
        border: 1px solid #e0bb7f;
    }

    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 10px;
`
const AddToCart = styled.button`
    width: 150px;
    height: 20px;
    padding: 20px;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        background-color: #e0bb7f;
        border: 1px solid #e0bb7f;
    }

    display: flex;
    align-items: center;
    justify-content: space-around;
`
const ProductPage = () => {
  return (
    <Wrapper>
    <Navbar/>
    <Announcement/>
    <Container>
        <ImageContainer>
            <MainImage src="https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
        </ImageContainer>
        <Info>
            <InfoContainer>
                <Name>Samsung 1TB Portable SSD for Laptop/PC/Mac</Name>
                <Description>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                </Description>
                <RateFaveContainer>
                    <Rating>
                        <StarRateRounded/>
                        <StarRateRounded/>
                        <StarRateRounded/>
                        <StarRateRounded/>
                        <StarRateRounded/>
                    </Rating>
                    <Favorite>
                        <FavoriteBorderRounded/>
                        <ShareRounded/>
                    </Favorite>
                </RateFaveContainer>
                <Price>P9,000.00</Price>
                <RegularPrice>P11,500.00</RegularPrice>
                <QuantityContainer>
                    Quantity
                    <Button>-</Button>
                    <Quantity>1</Quantity>
                    <Button>+</Button>
                    <AvailableStocks>5 item/s left</AvailableStocks>
                </QuantityContainer>
                <ButtonsContainer>
                    <BuyNow>Buy Now<ShoppingCartOutlined/></BuyNow>
                    <AddToCart>Add To Cart<AddShoppingCartRounded/></AddToCart>
                </ButtonsContainer>
            </InfoContainer>
        </Info>
        
    </Container>
    </Wrapper>  
  )
}

export default ProductPage