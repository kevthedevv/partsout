import React from 'react'
import styled from "styled-components";
import { categories } from '../data';
import CategoryItem from './CategoryItem';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`
const Categories = () => {
  return (
    <>
    <Container>
        {categories.slice(0, 5).map(item=>(

            <CategoryItem item={item}/>
        ))}
    </Container>
    <Container>
        {categories.slice(5, 10).map(item=>(

            <CategoryItem item={item}/>
        ))}
    </Container>
    </>
  )
}

export default Categories