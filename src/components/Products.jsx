import styled from "styled-components";
import { popularProducts } from '../data'
import Product from "./Product";

const Container = styled.div`
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
`
const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} Key={item.id}/>
        ))}
    </Container>
  )
}

export default Products