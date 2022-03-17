import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    &:hover{
        opacity: 0.3;
    }
    position: relative;
    transition: .5s ease;
    cursor: pointer;

`
const Image = styled.img`
    filter: brightness(60%);
    opacity: 1;
    //add darken
    height: 270px;
    transition: .5s ease;
    
`
const Title = styled.p`
    color: white;
    font-size: 20px;
    letter-spacing: 1px;
`
const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const CategoryItem = ({item}) => {
  return (
   <Container>
       <Image src={item.img}/>
       <Info>
           <Title>{item.title}</Title>
       </Info>
   </Container>
  )
}

export default CategoryItem