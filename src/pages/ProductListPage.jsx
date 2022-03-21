import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Filter from '../components/Filter';
import Navbar from '../components/Navbar'
import Products from '../components/Products';


const Container = styled.div`

`

const ProductListPage = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Filter/>
        <Products/>
    </Container>
     
  )
}

export default ProductListPage