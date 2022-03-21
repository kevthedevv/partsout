import styled from "styled-components"
//https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260

const Wrapper = styled.div`
    max-width: 80%;
    margin: auto;
`
const Container = styled.div`
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const MainImage = styled.img`
    width: 100%;
    height: 70vh;

`
const Info = styled.div`
    flex: 1;
`

const Name = styled.div`

`
const Description = styled.div`

`
const RateFaveContainer = styled.div`

`
const Rating = styled.div`

`
const Favorite = styled.div`

`
const Price = styled.div`

`
const RegularPrice = styled.div`

`
const QuantityContainer = styled.div`

`
const Quantity = styled.div`

`
const AvailableStocks = styled.div`

`
const ButtonsContainer = styled.div`

`
const BuyNow = styled.div`

`
const AddToCart = styled.div`

`
const ProductPage = () => {
  return (
    <Wrapper>
    <Container>
        <ImageContainer>
            <MainImage src="https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
        </ImageContainer>
        <Info>
            <Name></Name>
            <Description></Description>
            <RateFaveContainer>
                <Rating></Rating>
                <Favorite></Favorite>
            </RateFaveContainer>
            <Price></Price>
            <RegularPrice></RegularPrice>
            <QuantityContainer>
                <Quantity></Quantity>
                <AvailableStocks></AvailableStocks>
            </QuantityContainer>
            
            <ButtonsContainer>
                <BuyNow></BuyNow>
                <AddToCart></AddToCart>
            </ButtonsContainer>
        </Info>
        
    </Container>
    </Wrapper>  
  )
}

export default ProductPage